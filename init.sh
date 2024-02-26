#!/bin/sh

cd /server

if [ -e installer.jar ]
then
    ./run.sh
else
    wget -O installer.jar https://maven.minecraftforge.net/net/minecraftforge/forge/$MC_VER-$FORGE_VER/forge-$MC_VER-$FORGE_VER-installer.jar
    java -jar installer.jar --installServer
    echo "eula=true" > eula.txt
    ./run.sh
fi