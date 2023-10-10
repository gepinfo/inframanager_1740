import * as mongoose from 'mongoose';
import infraModel from '../models/daomodels/infra';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class infraDao {
    private infra = infraModel;
    constructor() { }
    
    public async GpDelete(infraId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into infraDao.ts: GpDelete');

    

    
    
    
    this.infra.findByIdAndRemove(infraId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from infraDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(infraData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into infraDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(infraData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.infra.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from infraDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(infraData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into infraDao.ts: GpSearchForUpdate');

    

    
    
    
    this.infra.findOneAndUpdate({ _id: infraData._id }, infraData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from infraDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(infraData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into infraDao.ts: GpUpdate');

    

    
    
    
    this.infra.findOneAndUpdate({ _id: infraData._id }, infraData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from infraDao.ts: GpUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetEntityById(infraId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into infraDao.ts: GpGetEntityById');

    

    
    
    
    this.infra.findById(infraId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from infraDao.ts: GpGetEntityById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into infraDao.ts: GpGetAllValues');

    

    
    
    
    this.infra.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from infraDao.ts: GpGetAllValues');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(infraData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into infraDao.ts: GpCreate');

    let temp = new infraModel(infraData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from infraDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(infraData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into infraDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.infra.aggregate(([
                        { $match: { $and: [{ created_by: infraData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from infraDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}