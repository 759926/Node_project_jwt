// create an api and called the functions :

import express from 'express';
import passport from '../config/index';

import { getData,addData, deleteDoc, updateData,getData1} from './../services/index';
const app = express();

app.use(express.json());

const collroute = express.Router();
//writing routes :
//Get a single product by ID

collroute.get('/profile', passport.authenticate('jwt', {session : false}), (req, res) => {
   res.send('done..')
})

collroute.get('/', async(req , res ) => {
   try{
      const data = await getData();
      res.json({
         status: true,
         data: data
      })
   }catch(err){
      console.log(err);
   }

})
collroute.get('/:id', async(req , res) => {

   try{
      const ids = req.params.id;

      const data = await getData1(ids);

      res.json({
         status: true,
         data : data
      })

      
   }catch(err :any){
      res.send({
         err: err.message,
         data: "Not found"
      })
   }

});

collroute.post('/', async (req , res) => {
 
   try{
      const reqData = req.body;
      const insertData = await addData(reqData);
      res.json({
             status: true,
             data : insertData
         })
     }catch (err){
         console.log(err);
    }
   
})
//updateData :

collroute.put('/:id', async (req , res) => {
  
   try{
      const ids = req.params.id;
      const data = await updateData(ids, req.body);
       res.send(data);

   }catch (err){
      res.json({
         status: false,
         message : err
      })
   }
   
})
//deletebyId:

collroute.delete('/:id', async (req , res) => {
   
   try{
      const data = await deleteDoc(req.params.id);
      res.json({
         status : true,
         data : data
      })

   }catch(err){
      res.json({
         status: false,
         message : err
      })
   }
  
})

export {collroute};

