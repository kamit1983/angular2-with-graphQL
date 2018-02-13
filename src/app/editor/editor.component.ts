import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  public editorContent: string = '<p><strong><span style="font-family: Georgia, serif; font-size: 24px;">Welcome to Angular2 Test Edior!!</span></strong></p><p><strong><span style="font-family: Georgia, serif; font-size: 24px;"><img src="https://i.froala.com/download/a584452d962fbd7c123757c99cf2daaa17d02d52.jpeg?1518427212" style="width: 73px;" class="fr-fic fr-dib"></span></strong><br></p>';

  constructor() {
  }

  ngOnInit() {
  }

}
