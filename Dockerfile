FROM node:lts-alpine

# Create app directory
WORKDIR /usr/src/app

# install cnpm
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org

# install simple http server for serving static content
RUN cnpm install -g http-server

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN cnpm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN cnpm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]
