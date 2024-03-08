FROM eclipse-temurin:21-alpine

ENV TYPE=VANILA \
    MC_VER=1.18.2

RUN apk update \
    apk add wget \
    apk add python \
    python3 pip install requests \
    mkdir /server

COPY init.sh main.py /
RUN chmod 777 init.sh

RUN python3 main.py

EXPOSE 25565 25575
ENTRYPOINT ./init.sh