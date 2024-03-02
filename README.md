<h1 align="center">
  <br>
  <img src="./dockercraft-web/src/assets/logo.svg" width="200">
  <br>
  <b>Dockercraft</b>
</h1>

<p align="center">Docker image for minecraft server
</p>

## Featured

✖️ Vanilla  
✔️ Forge  
✖️ Mohist  
✖️ Fabric  
✖️ Bedrock  
✖️ Environment for server properties

## Examples

CLI

```sh
docker run -d -p 25565:25565 b4shtirk1n/dockercraft
```

Compose

```yaml
version: "3.8"
services:
  server:
    image: b4shtirk1n/dockercraft
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
