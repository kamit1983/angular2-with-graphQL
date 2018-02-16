import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  public editorContent: string = '<p><strong><span style="font-family: Georgia, serif; font-size: 24px;">Angular Text Editor!!</span></strong></p><p>Type an @ to mention a predefined username.</p>';
  public datasource = ["Jacob", "Isabella", "Ethan", "Emma", "Michael", "Olivia"];
  // for Text
  public textContent: string = '<ol><li><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, (Bold)</strong></li><li><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, (Italic)</em></li><li><u>Lorem ipsum dolor sit amet, consectetur adipiscing elit, (Under Line)</u></li><li><s>Lorem ipsum dolor sit amet, consectetur adipiscing elit, (Strike)</s></li><li>Lorem <sub>ipsum</sub> dolor <sup>sit</sup> amet, consectetur adipiscing elit,(Subscript and Superscript)</li><li><span style="font-family: Georgia, serif; font-size: 18px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit,(Font Family, size)</span></li></ol>'
  public textOptions: Object = {
    placeholder: "Edit Me",
    events: {
      'froalaEditor.focus': function (e, editor) {
        console.log(editor.selection.get());
      }
    }

  }

  // for Image
  public imgContent: string = '<img src="http://via.placeholder.com/250x250">'
  public imgOptions: Object = {
    placeholder: "Edit Me",
    events: {
      'froalaEditor.focus': function (e, editor) {
        console.log(editor.selection.get());
      }
    }

  }
  // for Video
  public videoContent: string = '<span class="fr-video fr-fvc fr-dvb fr-draggable fr-active fr-fvr" contenteditable="false" draggable="true"><iframe src="https://www.youtube.com/embed/C8KcW1Nj3Mw?wmode=opaque" frameborder="0" allowfullscreen="" style="width: 640px; height: 360px;"></iframe></span>'
  public videoOptions: Object = {
    placeholder: "Edit Me",
    events: {
      'froalaEditor.focus': function (e, editor) {
        console.log(editor.selection.get());
      }
    }

  }

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
