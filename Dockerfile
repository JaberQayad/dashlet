FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY app .

# Backup the default config so we can restore it if the volume is empty
RUN cp user/config.yaml user/config.yaml.default

RUN npx sass css/main.scss:css/main.css --no-source-map --style compressed

EXPOSE 3000

# Check if config exists in the mounted volume; if not, copy the default one. Then start.
CMD ["/bin/sh", "-c", "if [ ! -f user/config.yaml ]; then cp user/config.yaml.default user/config.yaml; fi && exec npx serve . -l tcp://0.0.0.0:3000"]
