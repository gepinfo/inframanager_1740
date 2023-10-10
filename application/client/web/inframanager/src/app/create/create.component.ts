import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateService } from './create.service';



    export enum providertype {
        LOCAL = 'local',
        CLOUD = 'cloud',
    }
    export enum provider {
        AZURE = 'azure',
        GCP = 'gcp',
        AWS = 'aws',
        IBM = 'ibm',
    }
    export enum iacframeworks {
        TF = 'tf',
        GITACTIONS = 'gitactions',
    }
    export enum provider {
        AWS = 'aws',
        GCP = 'gcp',
        AZURE = 'azure',
        IBM = 'ibm',
    }


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})

export class CreateComponent implements OnInit {
    public infra:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        providertype: '',
        istemplate: '',
        provider: '',
        projectid: '',
        iacframeworks: '',
        iacversions: '',
        components: '',
    }
    public infracomponent:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        provider: '',
        name: '',
        scriptid: '',
        scriptlocation: '',
        imagename: '',
    }




    constructor (
        private createService: CreateService,
    ) { }

    ngOnInit() {
        this.infra.created_by = sessionStorage.getItem('email') || ''; 
        this.infracomponent.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }
    GpCreate() {
        this.createService.GpCreate(this.infra).subscribe((data:any) => {
            this.infra.providertype = ''
 	 	this.infra.istemplate = ''
 	 	this.infra.provider = ''
 	 	this.infra.projectid = ''
 	 	this.infra.iacframeworks = ''
 	 	this.infra.iacversions = ''
 	 	this.infra.components = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }


}