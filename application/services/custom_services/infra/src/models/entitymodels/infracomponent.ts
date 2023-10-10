
export interface infracomponent 
{
   created_date: { type: Date },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date },
   provider: { type: Provider },
   name: { type: String },
   scriptid: { type: String },
   scriptlocation: { type: String },
   imagename: { type: String }
}


export enum Provider {
   AWS = 'aws',
   GCP = 'gcp',
   AZURE = 'azure',
   IBM = 'ibm'
}



