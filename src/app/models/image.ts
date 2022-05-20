export class Image {
  public id: String;
  public URL: String;
  public altText: String;
  public description: String;
  public uploadDate: Date;
  public publishDate: Date;

  constructor(id?: String, URL?: String, altText?: String, description?: String, uploadDate?: Date, publishDate?: Date) {
      this.id = id || '';
      this.URL = URL || '';
      this.altText = altText || '';
      this.description = description || '';
      this.uploadDate = uploadDate || new Date();
      this.publishDate = publishDate || new Date();
  }
}
