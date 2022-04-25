import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.services';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers:[ProjectService]
})
export class ProjectsComponent implements OnInit {

  public projects:Project[];
  public url:string;

  constructor(
    private _http:HttpClient,
    private _projectService:ProjectService
  ) {
    this.url = Global.url_node;
   }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(){
    return this._projectService.getProjects().subscribe(
      response=>{
        if (response.projects){
          this.projects = response.projects;
        }
      },error=>{
        console.log(error);
      }
    )
  }


}
