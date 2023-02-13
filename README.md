# NeSvt

Website for `ne-svt.org` and live timing.

## Development

```shell
# start the site up locally
# main site: http://localhost:8080
# live timing site: http://localhost:3000
docker-compose up

# build site (builds the prod version)
docker run -it --rm -v `pwd`/results:/app -w /app -u 1000 node:16 npm run build
```
