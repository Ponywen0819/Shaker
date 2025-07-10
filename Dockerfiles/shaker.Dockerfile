FROM python
RUN mkdir shaker
WORKDIR /shaker
RUN yes "Shaker8787" | passwd root 
RUN apt-get update
RUN apt-get install mariadb-client -y 
RUN cd /shaker
RUN pip3 install flask mysqlclient flasgger PyMySQL PyJWT pycryptodome flask-cors
EXPOSE 5000
CMD ["python","ShakerService.py"]