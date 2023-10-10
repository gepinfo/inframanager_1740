
export interface infra 
{
   created_date: { type: Date },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date },
   providertype: { type: Providertype },
   istemplate: { type: Boolean },
   provider: { type: Provider },
   projectid: { type: String },
   iacframeworks: { type: Iacframeworks },
   iacversions: { type: String },
   components: { type: ObjectId, ref: 'infracomponent' }
}


export enum Providertype {
   LOCAL = 'local',
   CLOUD = 'cloud'
}



export enum Provider {
   AZURE = 'azure',
   GCP = 'gcp',
   AWS = 'aws',
   IBM = 'ibm'
}



export enum Iacframeworks {
   TF = 'tf',
   GITACTIONS = 'gitactions'
}



