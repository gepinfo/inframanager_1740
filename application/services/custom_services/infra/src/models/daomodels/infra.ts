
import * as mongoose from 'mongoose';
import { Providertype,Provider,Iacframeworks } from '../entitymodels/ticket';

const Schema = mongoose.Schema;

export const infraSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   providertype: { type: String, enum: Providertype },
   istemplate: { type: Boolean },
   provider: { type: String, enum: Provider },
   projectid: { type: String },
   iacframeworks: { type: String, enum: Iacframeworks },
   iacversions: { type: String },
   components: { type: Schema.Types.ObjectId, ref: 'infracomponent' }
})

const infraModel = mongoose.model('infra', infraSchema, 'infra');
export default infraModel;
