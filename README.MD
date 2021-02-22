# ceria complane handling
## how to start
- copy env file  ``` cp .env .env.example``` from .env.example
  
```env
TZ=Asia/Jakarta
SERVICE_HOST= localhost
SERVICE_PORT=bebas || 8080
NODE_ENV=development

DB_DRIVER=postgres
DB_NAME=bebas
DB_USER=bebas
DB_PASSWORD=bebas
DB_HOST=localhost
DB_PORT=5432
DB_DIALECT=postgres
DB_SCHEMA=bebas
DB_MAX_POOL=5
DB_MIN_POOL=0
DB_ACQUIRE=30000
DB_IDLE=10000
DB_SYNC=true
DISABLE_LOG=1
FILE_SIZE_LIMIT=10
FILE_UPLOAD_COUNT=10
FILE_UPLOAD_PATH=upload/users
```


## installation 
- install node module ```npm install``` or using yarn ```yarn install```
- setting database 
    - database host
    - database name
    - password database 
    - port database
    - schema database
- documentation swagger
    http://localhost:8080/documentation
- monitoring server process 
    http://localhost:8080/status

