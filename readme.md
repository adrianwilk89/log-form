# Brainhub logs form

Application was created for purposes of the recruitment process.

## Requirements

 - Docker - for ```API```
 - Node - for ```CLIENT```

## Installation & run client app

Use the package manager [npm](https://docs.npmjs.com/try-the-latest-stable-version-of-npm) to install node_modules required for this app.
Run in ```/client``` folder following commands

```bash
npm install 
```
then 
```bash
npm start
```
to start webpack dev server. Application will be running on ```http://localhost:8080```

## Run API server
Go to ```/api``` folder and run following command
```bash
docker-compose up
```
If you want to check records in database run following commands


> Note: Before you start you have to get database container_id to do this run ```docker ps``` and grab container_id for "postgres:11.5-alpine" image from displayed table, next paste it instead {container_id} in command bellow.

```bash
docker exec -it {container_id} psql -U postgres
```
next, connect to database logs running following command
```
\c logs
```

and select records from table by following example command
```sql
SELET * FROM "Log" LIMIT 2;
```

## Testing
To run client app tests go to ```/client``` folder and run following command
```bash
npm run test
```

