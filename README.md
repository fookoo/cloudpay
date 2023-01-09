# CloudPay

# Structure

This is monorepo, we have 3 packages:
- client
- server
- types

client is React app based on vite

server is node + express 

types is typescript package for shared types

# Development

```
yarn install
yarn dev
```

client is running on: http://localhost:5173

backend is running on: http://localhost:8080


# Test

I have introduced simple test to server package

to run them:

```
cd packages/server
yarn run test
```
