#syntax=docker/dockerfile:1.4
FROM node:20-alpine

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# hadolint ignore=DL3018
RUN apk add --no-cache libc6-compat

WORKDIR /usr/src/app

RUN corepack enable && \
	corepack prepare --activate pnpm@latest && \
	pnpm config -g set store-dir /.pnpm-store

COPY --link ./frontend/package.json ./frontend/package.json
COPY --link ./backend/package.json ./backend/package.json

RUN cd frontend && \
    pnpm fetch && \
    pnpm install
RUN cd backend && \
    pnpm fetch && \
    pnpm install

COPY ./frontend ./frontend

RUN cd frontend && \
    pnpm run build

COPY ./backend ./backend
COPY docker-entry.sh .
COPY package.json .

CMD ["sh","./docker-entry.sh"]
