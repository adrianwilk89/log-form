


# ```Application was created for purposes of the recruitment process.```

## Software requirements 
To run this project localy you have to install
 - Docker - for ```API```
 - Node >=14.17 - for ```CLIENT```

## Technologies 
I used the following technologies to create this project
<code><img height="30" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript" /></code>
<code><img height="30" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React" /></code>
<code><img height="30" src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" alt="npm" title="npm" /></code>
<code><img height="30" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js" /></code>
<code><img height="30" src="https://user-images.githubusercontent.com/25181517/187896150-cc1dcb12-d490-445c-8e4d-1275cd2388d6.png" alt="Redux" title="Redux" /></code>
<code><img height="30" src="https://user-images.githubusercontent.com/25181517/187955005-f4ca6f1a-e727-497b-b81b-93fb9726268e.png" alt="Jest" title="Jest" /></code>
<code><img height="30" src="https://user-images.githubusercontent.com/25181517/187955008-981340e6-b4cc-441b-80cf-7a5e94d29e7e.png" alt="webpack" title="webpack" /></code>
<code><img height="30" src="https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png" alt="PostgreSQL" title="PostgreSQL" /></code>
<code><img height="30" src="https://user-images.githubusercontent.com/25181517/117207330-263ba280-adf4-11eb-9b97-0ac5b40bc3be.png" alt="Docker" title="Docker" /></code>

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
next, connect to database ```logs``` running following command
```
\c logs
```

and select records from table by following example command
```sql
SELECT * FROM "Log" LIMIT 2;
```

## Testing
To run client app tests go to ```/client``` folder and run following command
```bash
npm run test
```
