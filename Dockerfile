# Usa o Nginx como servidor web
FROM nginx:alpine

# Copia os arquivos HTML para o diretório padrão do Nginx
COPY ./sobre-mim /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80
