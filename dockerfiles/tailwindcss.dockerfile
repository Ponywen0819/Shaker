FROM node

RUN mkdir -p run
WORKDIR /run
RUN mkdir -p src
RUN mkdir -p result

RUN npm init -y
RUN npm install -D tailwindcss
ADD ./tailwind.config.js /run

CMD [ "npx","tailwindcss","-i", "/run/result/input.css", "-o", "/run/result/output.css", "--watch"]

