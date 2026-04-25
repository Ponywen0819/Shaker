from module.configs import configure_collection
from module.crypto_utils import crypto_utils

config = configure_collection()
crypt = crypto_utils(config)
print(crypt.encrypt(input()))