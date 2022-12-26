import os
import base64
from module.configs import configure_collection
from Crypto.Hash import SHA1
from Crypto.PublicKey import RSA
from Crypto.Signature import pss
from Crypto.Cipher import PKCS1_OAEP
from Crypto.Hash import SHA256


class crypto_utils:
    def __init__(self, config: configure_collection):
        self.public_key_path = config['Encrypt']['PublicKeyPath']
        self.private_key_path = config['Encrypt']['PrivateKeyPath']
        if not os.path.exists(self.public_key_path) or not os.path.exists(self.private_key_path):
            key = RSA.generate(2048)

            privateKey = key.export_key()
            with open(self.private_key_path, "wb") as f:
                f.write(privateKey)

            publicKey = key.public_key().export_key()
            with open(self.public_key_path, "wb") as f:
                f.write(publicKey)

        with open(self.public_key_path, "rb") as f:
            self.public_key = RSA.import_key(f.read())


        with open(self.private_key_path, "rb") as f:
            self.private_key = RSA.import_key(f.read())

    def get_pubkey(self):
        return self.public_key.export_key()
    def decrypt(self, cipher: str):
        cipher = base64.b64decode(cipher)
        decryptor = PKCS1_OAEP.new(self.private_key, SHA256, lambda x, y: pss.MGF1(x, y, SHA1))
        data = decryptor.decrypt(cipher).decode('utf-8')
        return data

    def encrypt(self, plain: str):
        encryptor = PKCS1_OAEP.new(self.public_key, SHA256, lambda x, y: pss.MGF1(x, y, SHA1))
        encrypted = encryptor.encrypt(plain.encode())
        return base64.b64encode(encrypted).decode('utf-8')
