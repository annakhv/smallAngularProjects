export interface IResponce {
  status : string,
  totalResults : number,
  articles : IArticles []
}


export interface IArticles  {
  source : IArticleSource,
  author: string,
  title : string,
  description :string,
  url : string,
  urlToImage : string,
  publishedAt : string,
  content: string


}


export interface IArticleSource {
  id : string,
  name : string
}