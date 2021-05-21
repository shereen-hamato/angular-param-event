import {Injectable} from '@angular/core';
import {Book} from "./model/book";
const description = "Among going manor who did. Do ye is celebrated it sympathize considered. May ecstatic did surprise elegance the ignorant age. Own her miss cold last. It so numerous if he outlived disposal. How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved resolution."
const dataList: Book[] = [
  {
    id: 1,
    title: 'Title One',
    description: description,
    img: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'
  },
  {
    id: 2,
    title: 'Title Two',
    description: description,
    img: 'https://homepages.cae.wisc.edu/~ece533/images/mountain.png'
  },
  {
    id: 3,
    title: 'Title Three',
    description: description,
    img: 'https://homepages.cae.wisc.edu/~ece533/images/barbara.bmp'
  }
];

@Injectable()
export class ParentService {
    public getParentList() {
        return dataList;
    }

}
