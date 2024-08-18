import { Socket, Server } from 'socket.io';
import {
	SubscribeMessage,
	WebSocketGateway, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
} from '@nestjs/websockets';
import { LoginService } from '../login/login.service';
import { WebSocketServer } from '@nestjs/websockets';


@WebSocketGateway({
	namespace: 'events/',
	cors: {
		origin: '*'
	}
})

export class WebsocketsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
	private clients: Set<Socket> = new Set();

	@WebSocketServer() server: Server;

	constructor(
		private readonly loginService: LoginService
	) {}

	afterInit(server: Server) {
		console.log('WebSocket Gateway initialized');
	}

	handleConnection(client: Socket) {
		console.log(`Client connected: ${client.id}`);
		this.clients.add(client);
	}

	handleDisconnect(client: Socket) {
		console.log(`Client disconnected: ${client.id}`);
		this.clients.delete(client);
	}

	@SubscribeMessage('login')
	handleMessage(client: Socket, payload: any): void {
		console.log(`Message from client ${client.id}: ${payload}`);
		this.server.emit('messageToClient', payload);
	}
}

