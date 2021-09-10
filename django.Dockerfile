FROM python:3.8.12-alpine
RUN apk add --no-cache --virtual .compile_ gcc g++
RUN apk add --update --no-cache musl-dev python3-dev libffi-dev openssl-dev jpeg-dev zlib-dev mariadb-connector-c-dev

ENV PROJECT_DIR /app

COPY . ${PROJECT_DIR}
WORKDIR /${PROJECT_DIR}
RUN pip install -r requirements.txt

RUN apk del .compile_