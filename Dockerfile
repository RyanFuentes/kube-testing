FROM --platform=linux/amd64 node:10-alpine
ADD app.js /app.js
ENTRYPOINT [ "node", "app.js" ]