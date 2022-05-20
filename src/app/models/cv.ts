export class CV {
  public id:string;
  public title:string;
  public photoUrl:string;
  public description:string;
  public startDate:Date;
  public endDate:Date;

  constructor(id?:string,title?:string,photoUrl?:string,description?:string,startDate?:Date,endDate?:Date) {
      this.id=id||'';
      this.title=title||'';
      this.photoUrl=photoUrl||'';
      this.description=description||'';
      this.startDate=startDate||new Date();
      this.endDate=endDate||new Date();
  }
}
