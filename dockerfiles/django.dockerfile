FROM python:3.8.15


RUN mkdir code
WORKDIR /code
RUN pip install django
RUN pip install mysqlclient

CMD ["python", "manage.py","runserver","0.0.0.0:8000"]