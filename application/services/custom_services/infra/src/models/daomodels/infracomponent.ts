
import * as mongoose from 'mongoose';
import { Provider } from '../entitymodels/ticket';

const Schema = mongoose.Schema;

export const infracomponentSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   provider: { type: String, enum: Provider },
   name: { type: String },
   scriptid: { type: String },
   scriptlocation: { type: String },
   imagename: { type: String }
})

const infracomponentModel = mongoose.model('infracomponent', infracomponentSchema, 'infracomponent');
export default infracomponentModel;
