APP=ts-backend-template
COMMIT=$(shell git rev-parse HEAD)
IMAGE=$(APP):$(COMMIT)
LATEST=$(APP):latest

local: build local-docker

deploy: build upload-to-repository

build:
	docker build -t $(IMAGE) -t $(LATEST) .

local-docker:
	docker run -t -i -p8000:8000 $(IMAGE)

upload-to-repository:
	echo "Uploading to repository"