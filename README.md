# Pseudo random generator
[![Run on Ainize](https://ainize.ai/static/images/run_on_ainize_button.svg)](https://ainize.web.app/redirect?git_repo=github.com/ainize-team/ainize-run-pseudo-random-generator)
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

## How to use it?
It generates pseudo random number based on given bits and form.
Bits can be 2^n (default 2048bits).
(output)Form can be either byte or hex.
Count gets how many numbers will be generated.
```
http://localhost/?bits=${BITS}&form=${FORM}&count=${HOW_MANY_NUMBERS}
```
