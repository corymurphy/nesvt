# NeSvt.vNext
2nd generation ne-svt.org website.

#Visit the Site
www.ne-svt.org

## Development

```shell
# run website
docker run -it --rm -d -p 8080:80 --name web -v `pwd`/webcontent:/usr/share/nginx/html nginx

# run react app
docker run -it --rm -p 3000:3000 -v `pwd`:/app -w /app/webcontent/nesvt -u 1000 node npm start

# build site - build directory is deployed to prod
docker run -it --rm -v `pwd`:/app -w /app/webcontent/nesvt -u 1000 node npm run build

# run mock json server
# db.json is the sample data
# docker build . -t dev-server
# docker run -it --rm -p 5000:5000 -v `pwd`:/app -w /app/webcontent/nesvt -u 1000 dev-server
# # docker run --rm -p 5000:80 -v `pwd`/webcontent/nesvt/db.json:/data/db.json clue/json-server
```

