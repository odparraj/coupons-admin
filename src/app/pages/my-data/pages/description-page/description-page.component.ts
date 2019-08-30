import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'description-page',
  templateUrl: './description-page.component.html',
  styleUrls: ['./description-page.component.scss']
})
export class DescriptionPageComponent implements OnInit {
  public Editor = ClassicEditor;
  constructor() { }

  ngOnInit() {
  }

  model = {
    items: {
      'tittle': {
        'xtype': 'TextField',
        'allowBlank': false,
        'defaultValue': '',
        'name': 'tittle',
        'value': '',
        'levelSecurity': 0,
      },
    },
  };

}
