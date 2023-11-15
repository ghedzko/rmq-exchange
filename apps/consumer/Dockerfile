FROM node:18.14.1-alpine As development

WORKDIR /usr/src/app

COPY package.json ./ 
COPY tsconfig.json tsconfig.json
COPY nest-cli.json nest-cli.json 

RUN npm install -g pnpm

RUN npm install -g @nestjs/cli

COPY apps/consumer apps/consumer
COPY libs libs

RUN pnpm install -r 

RUN pnpm run build consumer

FROM node:18.14.1-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json ./ 

RUN npm install -g pnpm

RUN npm install -g @nestjs/cli

RUN pnpm install --prod

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/apps/consumer/main"]