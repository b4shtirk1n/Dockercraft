from main import parse

class TestParse:
    def test_parse_VANILLA(self):
        actual: str = ("https://piston-data.mojang.com/v1/objects/"
            + "c8f83c5655308435b3dcf03c06d9fe8740a77469/server.jar")

        expect: str = parse(
            "https://mcversions.net/download/1.18.2",
            "https://piston-data.mojang.com",
            "jar"
        )
        assert actual == expect
