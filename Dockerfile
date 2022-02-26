FROM nginx

# copy all files to container
COPY . /usr/share/nginx/html

# port number for container
EXPOSE 5000