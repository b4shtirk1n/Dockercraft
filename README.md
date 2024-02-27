<p align="left" width="100%">
    <img width="33%" src="./dockercraft-web/src/assets/logo.svg">
</p>

# Dockercraft

Docker image for minecraft server

## Featured

✖️ Vanilla  
✔️ Forge  
✖️ Mohist  
✖️ Bedrock  
✖️ Environment for server properties

## Environments

```
MC_VER=minecraft version(default - 1.18.2)
FORGE_VER=forge version(default - 40.2.0)
```

## Example

CLI

```sh
docker run -d -p 25565:25565
```

Compose

```yaml
version: "3.8"
services:
  server:
    image: b4shtirk1n/minecraft-server
    restart: always
    tty: true
    stdin_open: true
    environment:
      MC_VER: 1.20.2
      FORGE_VER: 48.1.0
    volumes:
      - ./server:/server
    ports:
      - 25565:25565
```
