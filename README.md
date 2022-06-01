# Documentation

## Description

Api for manage bookmarks. Add new bookmark type photo or video saved on mongoDB database and get list from videos or photos links.

## init project

- Install modules
  > npm i

## Run project

- Run server
  > npm start

## Tests

### Unit tests

- Run tests
  > npm test

### url routes to test on postman

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
    > key : url
    >
    > value : https://www.flickr.com/photos/feuilllu/45771361701/
  - Get list of videos
    > request : GET
  - Get one video
    > Get \_id value of one document saved and pass in params
    >
    > example : localhost:3000/api/videos/6284f5aec97d824f1fd60934
  - Update video
    > Get \_id value of one document saved and pass in params
    >
    > example : localhost:3000/api/videos/6284f5aec97d824f1fd60934
    >
    > Set values title, author, creationDate, publishDate, thumbnail, type, width, height and duration on body
  - Delete video
    > Get \_id value of one document saved and pass in params
    >
    > example : localhost:3000/api/videos/6284f5aec97d824f1fd60934

- Photo links
  - url :
    > http://localhost:3000/api/photos
  - Post new photo link
    > request : POST
    >
    > key : url
    >
    > value : https://www.flickr.com/photos/feuilllu/45771361701/
  - Get list of photos
    > request : GET
  - Get one photo
    > Get \_id value of one document saved and pass in params
    >
    > example : localhost:3000/api/photos/6284f5aec97d824f1fd60934
  - Update photo
    > Get \_id value of one document saved and pass in params
    >
    > example : localhost:3000/api/photos/6284f5aec97d824f1fd60934
    >
    > Set values title, author, creationDate, publishDate, thumbnail, type, width, height on body
  - Delete photo
    > Get \_id value of one document saved and pass in params
    >
    > example : localhost:3000/api/photos/6284f5aec97d824f1fd60934

### Unit tests

- Run unit tests
  > npm test
