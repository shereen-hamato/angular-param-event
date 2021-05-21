import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {ParentComponent} from './parent.component';
import {Child1Component} from './child1/child1.component';
import {Child2Component} from './child2/child2.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ParentService} from './parent.service';


@NgModule({
  declarations: [
    ParentComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    FlexLayoutModule

  ],
  providers: [ParentService],
  exports: [
    ParentComponent,
    Child1Component,
    Child2Component
  ],
  bootstrap: [ParentComponent]
})
export class ParentModule {
}
