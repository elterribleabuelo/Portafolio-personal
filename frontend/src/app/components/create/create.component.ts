import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.services';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[ProjectService],
  exportAs:'ngForm'
})
export class CreateComponent implements OnInit {

  public title:string;
  public project:Project;


  constructor(private _projectService:ProjectService,
  ) {
    this.title = "Crear proyecto",
    this.project = new Project("","","","",2022,"","")
  }

  ngOnInit() {
  }

  onSubmit(){

    console.log(this.project);
    this._projectService.saveProject(this.project).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(<any>error);
      }
    )

  }

}
