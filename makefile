build:
# docker build -t paralelo-user-microservice .
	docker build -t matchWorking-user-microservice .
testBuild:
	docker run -p 8080:80 matchWorking-user-microservice 

