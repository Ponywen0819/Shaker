import jwt

class json_web_token_generator:
    def __init__(self, secret_key) -> None:
        self.secret_key = secret_key
        pass

    def generate_token(self, values : dict) -> str:
        return jwt.encode(values, self.secret_key, algorithm='HS256')

    def get_token_detail(self, token : str) -> dict:
        return jwt.decode(token, self.secret_key, algorithms=['HS256'])