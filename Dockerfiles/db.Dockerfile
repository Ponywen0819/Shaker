FROM mariadb
RUN mkdir shaker
WORKDIR /shaker
ADD shaker.sql /shaker

EXPOSE 3306