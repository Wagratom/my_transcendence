env:
	@touch .env
	@echo 'POSTGRES_USER=example' >> .env
	@echo 'POSTGRES_PASSWORD=example' >> .env
	@echo 'POSTGRES_DB=example' >> .env
	@echo 'JWT_SECRET=example' >> .env
	@echo 'NODE_ENV=production' >> .env
	@echo 'PORT_REACT_APP=3001' >> .env

	@touch backend/.env
	@echo 'DATABASE_URL=postgresql://example:example@db:5432/example' >> backend/.env
	@


up:
	docker compose up

build:
	docker compose up --build

down:
	docker compose down

down-v:
	docker compose down -v

rm:
	docker compose rm

ps:
	docker compose ps

logs:
	docker compose logs -f


all-stop:
	docker stop $$(docker ps -q)

all-rm:
	docker rm $$(docker ps -a -q)

all-rmi:
	docker rmi $$(docker images -q)

all-rmv:
	docker volume rm $$(docker volume ls -q)

prune:
	docker system prune -a

show:
	@echo "Containers:"
	@echo "----------------"
	docker compose ps -a
	@echo ""
	@echo "Volumes:"
	@echo "----------------"
	docker volume ls
	@echo ""
	@echo "Images:"
	@echo "----------------"
	docker images



help:
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@echo "  up  	  Start the containers"
	@echo "  build   Start the containers and rebuild the images"
	@echo "  down    Stop the containers"
	@echo "  down-v  Stop the containers and remove the volumes"
	@echo "  rm      Remove the containers"
	@echo "  ps      List the containers"
	@echo "  logs    Show the logs of the containers"
	@echo "  all-stop  Stop all containers"
	@echo "  all-rm    Remove all containers"
	@echo "  all-rmi   Remove all images"
	@echo "  all-rmv   Remove all volumes"
	@echo "  prune     Remove all unused containers, networks, images, and volumes"
	@echo "  show      Show the containers, volumes, and images"
	@echo "  help     Show this help message"


.PHONY: up, build, down, down-v, rm, ps, logs, all-stop, all-rm, all-rmi, all-rmv, prune, show, help
