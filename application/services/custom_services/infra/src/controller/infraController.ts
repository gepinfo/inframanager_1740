import { Request, Response } from 'express';
import { infraService } from '../service/infraService';
import { CustomLogger } from '../config/Logger'
let infra = new infraService();

export class infraController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    infra.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into infraController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from infraController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    infra.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into infraController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from infraController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    infra.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into infraController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from infraController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    infra.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into infraController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from infraController.ts: GpUpdate');
    })}
public GpGetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    infra.GpGetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into infraController.ts: GpGetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from infraController.ts: GpGetEntityById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    infra.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into infraController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from infraController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    infra.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into infraController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from infraController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    infra.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into infraController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from infraController.ts: GpGetNounCreatedBy');
    })}


}