import requests
import os

class Type:
    def __init__(self, name: str, url: str):
        self.name = name
        self.url = url

TYPE: str = os.getenv("TYPE")
MC_VER: str = os.getenv("MC_VER")
FORGE_VER: str = os.getenv("FORGE_VER")
NEOFORGE_VER: str = os.getenv("NEOFORGE_VER")
FABRIC_LOADER_VER: str = os.getenv("FABRIC_LOADER_VER")
FABRIC_VER: str = os.getenv("FABRIC_VER")

types: list[Type] = [
    Type("VANILLA", f"https://mcversions.net/download/{MC_VER}"),
    Type("FORGE", f"https://maven.minecraftforge.net/net/minecraftforge/forge/$MC_VER-$FORGE_VER/forge-{MC_VER}-{FORGE_VER}-installer.jar"),
    Type("NEO_FORGE", f"https://maven.neoforged.net/releases/net/neoforged/neoforge/{NEOFORGE_VER}/neoforge-{NEOFORGE_VER}-installer.jar"),
    Type("FABRIC", f"https://meta.fabricmc.net/v2/versions/loader/{MC_VER}/{FABRIC_LOADER_VER}/{FABRIC_VER}/server/jar")
]

def get_url() -> str:
    url: str = "NULL"
    if (TYPE != None):
        url = types[__name__ == TYPE].url
        if (TYPE == "FORGE"):
            return parse(url)
        return url
    return url

def parse(
    url: str,
    find: str = "https://piston-data.mojang.com",
    find_last: str = "jar"
) -> str:
    r: str = requests.get(url).text
    index: int = r.find(find)
    last: int = r.find(find_last)+len(find_last)
    return r[index:last]

os.environ["URL"] = get_url()
