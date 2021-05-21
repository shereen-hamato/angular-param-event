import {Component, Input, EventEmitter, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html'
})
export class Child1Component {
  @Input()
  books: string[];

  @Output()
  selectedBook = new EventEmitter();


  myControl = new FormControl();

  selection(event) {
    if (event)
      this.selectedBook.emit(event.option.value)
    else
      this.selectedBook.emit(null)


  }

  displayWithFn(event) {
    if (event)
      return event.title

  }

  opened(event){
    if(!event)
      this.selection(null)
  }


}
