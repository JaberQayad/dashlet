FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY app .

# Backup the default config to root (outside the volume mount) so it persists
RUN cp user/config.yaml config.default.yaml

RUN npx sass css/main.scss:css/main.css --no-source-map --style compressed

EXPOSE 3000

# Check if config exists in the mounted volume; if not, restore from backup
CMD ["/bin/sh", "-c", "if [ ! -f user/config.yaml ]; then cp config.default.yaml user/config.yaml; fi && exec npx serve . -l tcp://0.0.0.0:3000"]
