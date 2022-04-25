import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.services';
import { Global } from 'src/app/services/global';
import { Router,ActivatedRoute,Params } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[ProjectService]
})
export class DetailComponent implements OnInit {

  public project:Project;
  public url:string;

  constructor(
    private _projectService:ProjectService,
    private _router:Router,
    private _route:ActivatedRoute
  ) {
    this.url = Global.url_node;
   }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params.id;
      this.getProject(id);

    });
  }

  getProject(id){
    this._projectService.getProject(id).subscribe(
      response=>{

        this.project = response.project;

      },error => {
        console.log(error);
      }
    )
  }

}
