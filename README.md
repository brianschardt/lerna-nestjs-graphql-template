# Iris Lerna Structure

### Getting Starting

#### Setup Env file

copy .env.example and name it .env in the root directory of the service

#### Install Node Modules

```
yarn
```

#### Bootstrap

```
yarn bootstrap
```

#### Docker Setup

In order to get started you must have docker installed on your machine

```
docker-compose build
docker-compose up -d
```

If you are editting an @iris package, and you want the changes to be live in the services code run

```
yarn iris:build:watch
```

Go to localhost:4000/graphql

### Db migrations

In order to run the migrations cd into the @iris/common package. Copy the .env.example and name it .env in the root directory of the package, and place appropriate values

```
cd @iris/common
yarn typeorm migrations:run
```
