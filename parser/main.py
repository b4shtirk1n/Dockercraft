import requests

find = "https://piston-data.mojang.com"
server_find = "jar"

r = requests.get("https://mcversions.net/download/1.18.2").text
index = r.find(find)
last = r.find(server_find)+len(server_find)

print(r[index:last])