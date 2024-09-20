export class Ad {
  constructor(data){
this.title = data.title
this.linkURL = data.linkURL
this.tall = data.tall
this.square = data.square
this.banner = data.banner
  }
}

const data={
  "title": "Zoo Keeper",
  "linkURL": "boisecodeworks.com",
  "tall": "https://codeworks.blob.core.windows.net/public/assets/ads/zookeeper.gif",
  "square": "https://codeworks.blob.core.windows.net/public/assets/ads/zookeeper2.gif",
  "banner": "https://codeworks.blob.core.windows.net/public/assets/ads/zookeeper3.gif"
}