# Pseudo random generator
It provides crypto-secure pseudo-random number.

## Docker build
```
docker build -t ${YOUR_DOCKER_HUB_ID}/png .
```

## Docker run
```
docker run -p 80:80 -d ${YOUR_DOCKER_HUB_ID}/png
```
Now the server is available at http://localhost.

## How
bits can be 2^n (default 2048bits).
form can be byte, hex, and number.
```
localhost/?bits=${BITS}&form=${FORM}
```