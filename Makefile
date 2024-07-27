env:
	@touch .env
	@echo 'POSTGRES_USER=example' >> .env
	@echo 'POSTGRES_PASSWORD=example' >> .env
	@echo 'POSTGRES_DB=example' >> .env


up:
	docker compose up -d

down:
	docker compose down

ps:
	docker compose ps

logs:
	docker compose logs -f

all-stop:
	docker stop $(docker ps -q)

all-rm:
	docker rm $(docker ps -a -q)

all-rmi:
	docker rmi $(docker images -q)

all-rmv:
	docker volume rm $(docker volume ls -q)

cleanup: all-stop all-rm all-rmi all-rmv

help:
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@echo "  env        Create .env file"
	@echo "  up         Start the containers"
	@echo "  down       Stop the containers"
	@echo "  ps         List the containers"
	@echo "  logs       Show the logs"
	@echo "  all-stop   Stop all containers"
	@echo "  all-rm     Remove all containers"
	@echo "  all-rmi    Remove all images"
	@echo "  all-rmv    Remove all volumes"
	@echo "  cleanup    Stop all containers, remove all containers, remove all images, remove all volumes"

.PHONY: env up down ps logs all-stop all-rm all-rmi all-rmv cleanup

