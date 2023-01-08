FROM mariadb
RUN mkdir shaker
WORKDIR /shaker
RUN pip3 install -r requirements.txt
EXPOSE 5000
CMD ["python","ShakerService.py"]