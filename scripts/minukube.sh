  kubectl delete service authen-api
  kubectl delete deployment authen-api
  kubectl run authen-api --image=authen-api:0.0.1 --port=3000
  kubectl config view
  kubectl expose deployment authen-api --type=LoadBalancer
  kubectl get services
  minikube service authen-api

#   minikube dashboard