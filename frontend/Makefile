CONTAINER_REPO:=gcr.io/guadaltech-193909
CONTAINER_NAME:=node-frontend-tallerus
CONTAINER_VERSION:=latest

build:
			docker build -f Dockerfile  -t ${CONTAINER_REPO}/${CONTAINER_NAME}:${CONTAINER_VERSION} .
run:
			docker run -p 8080:8080 -t ${CONTAINER_REPO}/${CONTAINER_NAME}:${CONTAINER_VERSION}

push:
			gcloud docker -- push ${CONTAINER_REPO}/${CONTAINER_NAME}:${CONTAINER_VERSION}


build-test:
			docker build -f Dockerfile  -t ${CONTAINER_REPO_TEST}/${CONTAINER_NAME}:${CONTAINER_VERSION} .
run-test:
			docker run -p 8080:8080 -t ${CONTAINER_REPO_TEST}/${CONTAINER_NAME}:${CONTAINER_VERSION}

push-test:
			gcloud docker -- push ${CONTAINER_REPO_TEST}/${CONTAINER_NAME}:${CONTAINER_VERSION}
