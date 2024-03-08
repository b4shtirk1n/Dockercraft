#!/bin/sh

function start {
    case $TYPE in
        VAINLLA | MOHIST | FABRIC)
            java -jar installer.jar --nogui
            ;;
        *)
            ./run.sh
            ;;
    esac
}

cd server/

if [ -e !installer.jar ]
then
    if [ $URL == NULL ]
    then
        exho "Invalid env"
        exit
    fi
    wget -O installer.jar $URL

    if [ $TYPE == FORGE | FABRIC ]
    then
        java -jar installer.jar --installServer
    fi
    echo "eula=true" > eula.txt
    start
else
    start
fi
