# Documentation

## init project

- Install modules
> npm i

## Run project

- Run server
> npm start

## Tests

### url routes

- Get data from external link for video example
> http://localhost:3000/api/test/video

- Get data from external link for photo example
> http://localhost:3000/api/test/photo

- Video links
  - url :
    > http://localhost:3000/api/videos
  - Post new video link
    > Request : POST
    >
    > key: url
    > 
    > value: https://www.flickr.com/photos/feuilllu/45771361701/
  - Get list of videos
    > request : GET

- Photo links
  - url :
    > http://localhost:3000/api/photos
  - Post new photo link
    > request : POST
    >
    > key: url
    > 
    > value: https://www.flickr.com/photos/feuilllu/45771361701/
  - Get list of photos
    > request : GET
