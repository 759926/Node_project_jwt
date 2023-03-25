import { constants } from "buffer";
import { basicModel } from "./../models/index";

// inserting data into collection:
// const dataInserted = async () => {
//     const data = new model({
//         title: "A" ,
//         price: 100 ,
//         catagory: "Top" ,
//         image: "png-",
//     });
//    await data.save();
    
// };
// dataInserted();

// here is the use hooks :
// async function postData (body: any){
//     try{
//         const val = new model1(body);
//         const result = await val.save();
//         return result;
//     }catch(err) {
//         console.log(err);
//     }
// }

// export {postData};

// add products into database :
async function addData(body: any) {
    try{
        const values = new basicModel(body);
        const res = await values.save();
        return res;
    }catch(err) {
        console.log(err);
    }

}

// getData :
const getData = async () => {
    try{
        const val = await basicModel.find();
        return val;
    }catch(err) {
        console.log(err);
    }
  
};
//getdataby by
const getData1 = async (ids: String) => {
    try{
        const val = await basicModel.findById({ _id: ids });
         return val;
    }catch(err) {
        console.log(err)
    }
  
};

//delete data by id :

const deleteDoc = async (ids: String) => {
    try{
        const value = await basicModel.findByIdAndDelete({ _id: ids });
        return value;
    }catch(err) {
        console.log(err)
    }
  
};

// updateData by id
const updateData = async (ids: String, body: Object) => {
    try{
        const value = await basicModel.findByIdAndUpdate(
            { _id: ids },
            { $set: body },
            { upsert: true, new: true }
          );
          return value;
    }
    catch(err) {
        console.log(err);
    }
  
};

export { getData, getData1, deleteDoc, updateData, addData};
