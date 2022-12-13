import jwt
from module.configs import configure_collection

class json_web_token_generator:
    def __init__(self, config: configure_collection) -> None:
        self.secret_key = config['JWT_secret']
        pass

    def generate_token(self, values: dict) -> str:
        # print()
        return jwt.encode(values, self.secret_key, algorithm='HS256')

    def get_token_detail(self, token: str) -> dict:
        return jwt.decode(token, self.secret_key, algorithms=['HS256'])