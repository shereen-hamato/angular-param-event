import {Component, OnInit} from '@angular/core';
import {Book} from './model/book';
import {ParentService} from "./parent.service";



@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})


export class ParentComponent implements OnInit{
  title = 'parentComponent';

  list = [];

  selectedBook;

  constructor(public parentService:ParentService) {
  }

  onBookSelection(event) {
    this.selectedBook = event;
  }

  ngOnInit(): void {

    this.list= this.parentService.getParentList();
  }
}
