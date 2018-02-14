import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  public editorContent: string = '<p><strong><span style="font-family: Georgia, serif; font-size: 24px;">Welcome to Angular2 Test Edior!!</span></strong></p><p>Type an @ to display the autocomplete list.</p>';
  public datasource = ["Jacob", "Isabella", "Ethan", "Emma", "Michael", "Olivia" ];

      // Build data to be used in At.JS config.
  public names = $.map(this.datasource, function (value, i) {
    return {
      'id': i, 'name': value, 'email': value + "@email.com"
    };
  });
  public config = {
        at: "@",
        data: this.names,
        displayTpl: '<li>${name} <small>${email}</small></li>',
        limit: 200
      }
  public froalaOptions = {
  events: {
      "froalaEditor.initialized": (e, froalaEditor) => {
        froalaEditor.$el.atwho(this.config);
        froalaEditor.events.on('keydown', function (e) {
          if (e.which == 13 && froalaEditor.$el.atwho('isSelecting')) {
            return false;
          }
        }, true);
    }
  }
};

  constructor() {
  }

  ngOnInit() {
  }

}
