import * as mongoose from 'mongoose';
import { infraSchema } from './models/daomodels/infra';

const infraModel = mongoose.model('infra', infraSchema);

export class Seed {

    constructor() {

    }

    

}
