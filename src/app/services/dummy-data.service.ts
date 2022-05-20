import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable()
export class DummyDataService {
  constructor() {}

  public getAllPosts(): Promise<Array<Post>> {
    let arr: Array<Post> = new Array();
    for (let i = 1; i < 40; i++)
      arr.push(
        new Post(
          'ID:' + i,
          'Title ' + i,
          i +
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
          'https://picsum.photos/200/300',
          new Date(),
          new Date()
        )
      );
    return new Promise<Array<Post>>((res, _rej) => {
      res(arr);
    });
  }
}
