FROM node:18

WORKDIR /app

# Copiar arquivos de configuração e dependências
COPY . .


RUN npm install
EXPOSE 3000

# Iniciar o aplicativo
entrypoint ["bash", "start.sh"]
