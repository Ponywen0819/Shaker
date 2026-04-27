FROM mariadb
RUN mkdir shaker
WORKDIR /shaker
ADD backend-python/sql/shaker.sql /shaker/shaker.sql

EXPOSE 3306
