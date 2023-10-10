import { Request, Response } from 'express';
import {infraDao} from '../dao/infraDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let infra = new infraDao();

export class infraService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into infraService.ts: GpDelete')
     let  infraId = req.params.id;
     infra.GpDelete(infraId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from infraService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into infraService.ts: GpSearch')
     let  infraData = req.query;
     infra.GpSearch(infraData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from infraService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into infraService.ts: GpSearchForUpdate')
     let  infraData = req.body;
     infra.GpSearchForUpdate(infraData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from infraService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into infraService.ts: GpUpdate')
     let  infraData = req.body;
     infra.GpUpdate(infraData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from infraService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into infraService.ts: GpGetEntityById')
     let  infraId = req.params.id;
     infra.GpGetEntityById(infraId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from infraService.ts: GpGetEntityById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into infraService.ts: GpGetAllValues')
     
     infra.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from infraService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into infraService.ts: GpCreate')
     let  infraData = req.body;
     infra.GpCreate(infraData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from infraService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into infraService.ts: GpGetNounCreatedBy')
     let  infraData = { created_by: req.query.createdby };
     infra.GpGetNounCreatedBy(infraData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from infraService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}