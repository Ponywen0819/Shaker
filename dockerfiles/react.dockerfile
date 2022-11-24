FROM node

RUN mkdir -p run
WORKDIR /run
RUN mkdir -p src
RUN mkdir -p result

RUN npm init -y
RUN npm install babel-cli@6 babel-preset-react-app@3

CMD [ "npx","babel","--watch","/run/src","--out-dir","/run/result","--presets","react-app/prod"]

