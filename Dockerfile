FROM node:16

# Create app directory
WORKDIR /usr/src/app
ENV PATH /app/node_modules/.bin:$PATH
# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
