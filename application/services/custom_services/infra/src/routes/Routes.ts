import { Request, Response, NextFunction } from "express";
import { infraController } from '../controller/infraController';


export class Routes {
    private infra: infraController = new infraController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/infra/:id').delete(this.infra.GpDelete);
app.route('/infra/get/search').get(this.infra.GpSearch);
app.route('/infra/get/update').put(this.infra.GpSearchForUpdate);
app.route('/infra').put(this.infra.GpUpdate);
app.route('/infra/:id').get(this.infra.GpGetEntityById);
app.route('/infra').get(this.infra.GpGetAllValues);
app.route('/infra').post(this.infra.GpCreate);
app.route('/infra/userid/created_by').get(this.infra.GpGetNounCreatedBy);
     }

}