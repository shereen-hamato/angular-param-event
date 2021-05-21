import {Component, Input} from '@angular/core';
import {Book} from '../model/book';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html'
})
export class Child2Component {
  title = 'parentComponent';

  @Input()
  book: Book;
}
