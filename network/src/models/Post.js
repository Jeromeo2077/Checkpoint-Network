export class Post {
  constructor(data){
    this.id = data.id
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.creatorId = data.creatorId
    this.likeIds = data.likeIds
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.creator = data.creator
    this.likes = data.likes
  }
}

const data={
  "_id": "66d0cedfe1d4d9718e5b4a82",
  "body": "It has been a hot minute...",
  "imgUrl": "https://m.media-amazon.com/images/I/61DK+ex803L.jpg",
  "creatorId": "660c62737e0e703a170397c7",
  "likeIds": [],
  "createdAt": "2024-08-29T19:41:19.214Z",
  "updatedAt": "2024-08-29T19:41:19.214Z",
  "__v": 0,
  "creator": {
      "_id": "660c62737e0e703a170397c7",
      "subs": [
          "auth0|660c6272bd7637c079c735e6"
      ],
      "email": "kylerliscinski@gmail.com",
      "name": "Ruff & Buff Stuff",
      "picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbP_XickB2GLIhoq9Q2fkFh6XsO50u5Qoe8JVWuapS-A&s",
      "bio": "Just a dog going through life dreaming of tennis balls",
      "coverImg": "https://t3.ftcdn.net/jpg/00/07/62/58/360_F_7625864_beFf8x6JVmawALTM79a97fpOKq12LC0m.jpg",
      "github": "https://github.com/Kylerliscinski",
      "linkedin": "https://www.linkedin.com/in/kyler-liscinski-1168332b9/",
      "resume": "",
      "class": "Spring 2025",
      "graduated": true,
      "createdAt": "2024-04-02T19:54:37.601Z",
      "updatedAt": "2024-04-22T22:13:13.094Z",
      "__v": 0,
      "id": "660c62737e0e703a170397c7"
  },
  "likes": [],
  "id": "66d0cedfe1d4d9718e5b4a82"
}