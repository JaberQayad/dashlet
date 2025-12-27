FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY app .


RUN npx sass css/main.scss:css/main.css --no-source-map --style compressed

COPY entrypoint.sh .
RUN chmod +x entrypoint.sh

EXPOSE 8989

# Check if config exists in the mounted volume; if not, restore from backup
ENTRYPOINT ["./entrypoint.sh"]
