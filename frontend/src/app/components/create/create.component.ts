import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.services';
import { UploadService } from 'src/app/services/upload.services';
import { FormsModule } from '@angular/forms';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[ProjectService,UploadService],
  exportAs:'ngForm'
})
export class CreateComponent implements OnInit {

  public title:string;
  public project:Project;
  public status:string;
  public filesToUpload:Array<File>;



  constructor(
    private _projectService:ProjectService,
    private _uploadService:UploadService
  ) {
    this.title = "Crear proyecto",
    this.project = new Project("","","","",2022,"","")

  }

  ngOnInit() {
  }

  onSubmit(form){

    //console.log(this.project);
    // Guardar datos básicos
    this._projectService.saveProject(this.project).subscribe(
      response => {
        //console.log(response);
        if (response.project){
          // Subida de imagen
          console.log("123");

          this._uploadService.makeFileRequest(Global.url_node + '/upload-image/'+response.project._id,[],this.filesToUpload,'image')
          .then((result:any) => {
            try {
              this.status = "success";
              console.log("Upload service:",result);
              form.reset();
            }catch(e){
              console.log("Error:",e)
            }
          });
        }else{
          console.log("456");
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
