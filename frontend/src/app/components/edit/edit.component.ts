import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.services';
import { UploadService } from 'src/app/services/upload.services';
import { FormsModule } from '@angular/forms';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[ProjectService,UploadService]
})
export class EditComponent implements OnInit {

  public title:string;
  public project:Project;
  public status:string;
  public save_project;
  public filesToUpload:Array<File>;
  public url:string;


  constructor(
    private _projectService:ProjectService,
    private _uploadService:UploadService,
    private _router:Router,
    private _route:ActivatedRoute
  ) {
    this.title = "Editar proyecto";
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

  onSubmit(){
    this._projectService.updateProject(this.project).subscribe(
      response =>{
        if (response.project){
          // Subida de imagen
          if(this.filesToUpload){
            // Cuando se sube una imagen distina a la original
            this._uploadService.makeFileRequest(Global.url_node + '/upload-image/'+response.project._id,[],this.filesToUpload,'image')
            .then((result:any) => {
                this.save_project = result.project;
                this.status = "success";
            });
          } else{
            // Cuando la imagen original se queda
            this.save_project = response.project;
            this.status = 'success';
          }
        }else{
          this.status = "failed";
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  fileChangeEvent(fileInput:any){
    this.filesToUpload = <Array<File>> fileInput.target.files;
    //console.log(fileInput);
  }

}
