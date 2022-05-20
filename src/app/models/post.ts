export class Post {
  public id: String;
  public title: String;
  public content: String;
  public poster: String;
  public createDate: Date;
  public publishDate: Date;

  constructor(
    id?: String,
    title?: String,
    content?: String,
    poster?: String,
    createDate?: Date,
    publishDate?: Date
  ) {
    this.id = id || '';
    this.title = title || '';
    this.content = content || '';
    this.poster = poster || '';
    this.createDate = createDate || new Date();
    this.publishDate = publishDate || new Date();
  }
}
