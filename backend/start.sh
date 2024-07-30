#Tive que criar um script para rodar os comandos de migração e geração de código prisma
#Porque quando tento rodar no dockerfile o DATABASE_URL não foi adicionado ao ambiente pelo docker-compose
#Tentei usar ARG copiar um .env para o container mas não funcionou, então vamos fazer assim porque o importante e funcionar
npx prisma migrate deploy
npx prisma generate
npm run start:dev
