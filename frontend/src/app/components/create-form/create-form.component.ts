import { Component, OnInit, Renderer2,AfterViewInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ScriptService } from 'src/app/services/script.service';
import { ScriptStore } from 'src/store/script.store';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  iconUrl: string;
  bootstrapUrl:string;
  fontAwesomeUrl:string;
  iconDesignUrl:string;
  animateUrl:string;
  hamburgersUrl:string;
  animsitionUrl:string;
  select2Url:string;
  daterangepickerUrl:string;
  utilcssUrl:string;
  mainUrl:string;
  _renderer2: Renderer2;
  scripts;
  constructor(public sanitizer: DomSanitizer,
              public _scriptService:ScriptService) {
    this.iconUrl = '/assets/createForm/images/icons/favicon.ico',
    this.bootstrapUrl = '/assets/createForm/vendor/bootstrap/css/bootstrap.min.css',
    this.fontAwesomeUrl = '/assets/createForm/fonts/font-awesome-4.7.0/css/font-awesome.min.css',
    this.iconDesignUrl = '/assets/createForm/fonts/iconic/css/material-design-iconic-font.min.css',
    this.animateUrl = '/assets/createForm/vendor/animate/animate.css',
    this.hamburgersUrl = '/assets/createForm/vendor/css-hamburgers/hamburgers.min.css',
    this.animsitionUrl = '/assets/createForm/vendor/animsition/css/animsition.min.css',
    this.select2Url = '/assets/createForm/vendor/select2/select2.min.css',
    this.daterangepickerUrl = '/assets/createForm/vendor/daterangepicker/daterangepicker.css',
    this.utilcssUrl = '/assets/createForm/css/util.css',
    this.mainUrl = '/assets/createForm/css/main.css',
    this.scripts = ScriptStore
  }

  ngOnInit() {
    this._scriptService.LoadScripts(this.scripts)
  }

}
