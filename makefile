build:
# docker build -t matchWorking-user-microservice .
	docker build -t matchWorking-user-microservice .

testBuild:
	docker run -p 8080:80 matchWorking-user-microservice 
# docker run -p 3000:3000 matchWorking-ms-user:latest


# logs: 
# 	docker logs <container_id>
