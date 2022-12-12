import json
import pymysql
import os
from enum import Enum
from module.configs import configure_collection


class database_utils:
    def __init__(self, config: configure_collection):
        self.database_host = config["SQL"]["Host"]
        self.database_User = config["SQL"]["User"]
        self.database_Password = config["SQL"]["Password"]
        self.database_Database = config["SQL"]["Database"]
        self.conn = pymysql.connect(host=self.database_host, user=self.database_User, password=self.database_Password,
                                    database=self.database_Database)

    def command_excute(self, command: str, param: tuple) -> dict:
        '''
            這個函數可以讓你使用 MySQL 的指令，並將回傳結果轉成一個 dict 回傳。
                param:
                    command: MySQL 的指令，需要可以正常運作。
                    param: 參數化的參數。
                return:
                    一個包含結果的 dict。
            '''
        with self.conn.cursor() as cursor:
            cursor.execute(command, param)
            self.conn.commit()
            if cursor.description != None:
                field_name = [name[0] for name in cursor.description]
                result = cursor.fetchall()
                result_list = []
                for data in result:
                    result_list.append(dict(zip(field_name, list(data))))
                return result_list
            else:
                return {}

    def commit_change(self) -> None:
        '''
        這個函數可以變更資料庫，如果你前面的command下了update或者delete就必須要用到這個方法
        '''

        self.conn.commit()
