FROM eclipse-temurin:21-alpine

ENV MC_VER=1.18.2 \
    FORGE_VER=40.2.0

RUN apk update \
    apk add wget \
    mkdir /server

COPY init.sh /
RUN chmod 777 init.sh

EXPOSE 25565 25575
ENTRYPOINT ["./init.sh"]