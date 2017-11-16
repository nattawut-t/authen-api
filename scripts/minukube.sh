# delete docker image
docker rm -f authen-api
docker rmi -f authen-api:1.0.0
# build docker image
docker build -t authen-api:1.0.0 .  
#
kubectl delete service authen-api
kubectl delete deployment authen-api
kubectl run authen-api --image=authen-api:1.0.0 --port=3000
kubectl config view
kubectl expose deployment authen-api --type=LoadBalancer
kubectl get services
minikube service authen-api
#   minikube dashboard