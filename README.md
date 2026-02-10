# TODO APP
**NOTE!** Instructions tested only with MAC OS

## Setup local database
Open terminal and run command

```
docker-compose up
```

- Starts postgresql database
- Runs init script (init.sql) to initialize

Shutdown database docker container with
```
docker-compose down
```

## Start Server
1. Do the following steps inside  `/server` folder
2. Create .env file (or copy and rename .env.example file) and type these following values to file:
```
APP_PORT=4000
API_KEY=mysecretapikey123
DB_USER=admin
DB_PASSWORD=secret
DB_HOST=localhost
DB_PORT=5432
DB_NAME=todo_app_local
```

3. Open new terminal window and install dependencies. Run:
```
npm install
```

4. Open new terminal window and run:
```
npm run dev
```

5. Shutdown app with `control+c`

## Start Client
1. Do the following steps inside  `/client` folder
2. Create .env file (or copy and rename .env.example file) and type these following values to file:
```
VITE_TODO_API_URL=http://localhost:4000/todo
VITE_TODO_API_KEY=mysecretapikey123
```

3. Open new terminal window and install dependencies. Run:
```
npm install
```

4. Open new terminal window and run:
```
npm run dev
```

5. Open browser and type URL:
```
http://localhost:5173/
```

6. Shutdown app with `control+c`


