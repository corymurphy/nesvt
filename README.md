# NeSvt.vNext
2nd generation ne-svt.org website.

#Visit the Site
www.ne-svt.org

## Development

```shell
# run static website
docker run -it --rm -p 8080:80 --name web -v `pwd`/webcontent:/usr/share/nginx/html nginx

# run react app
docker run -it --rm -p 3000:3000 -v `pwd`/results:/app -w /app -u 1000 node npm install
docker run -it --rm -p 3000:3000 -v `pwd`/results:/app -w /app -u 1000 node npm start

# build site - build directory is deployed to prod
docker run -it --rm -v `pwd`/results:/app -w /app -u 1000 node npm run build
```
