docker rm -f authen-api
docker rmi -f authen-api:0.0.1
docker build -t authen-api:0.0.1 .
docker run -d --name=authen-api -p 3000:3000 -v $(pwd):/src authen-api:0.0.1