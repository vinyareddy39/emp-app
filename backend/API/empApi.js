import exp from 'express'
import {EmpModel} from '../Model/empModel.js'
export const EmpApp = exp.Router() 

EmpApp.post("/emp",async(req,res)=>
{ 
const newemp = req.body ; 
const newproductDocument = new EmpModel(newemp)
const result = await newproductDocument.save()
console.log(result)
res.status(201).json({message: "user created "}) ;
});  

 
EmpApp.get("/emp",async(req,res)=>{
   
    const  productList = await  EmpModel.find()  
    res.status(200).json({message:"created",payLoad:productList})
}); 


EmpApp.get("/emp/:id",async(req,res)=>{ 
  
   let id = req.params.id;
  const data = await EmpModel.findById(id) 
    if(data){
      res.status(200).json({message:"the data is ",payLoad:data})
    } else{
    res.status(200).json({message:"not found"})
    }
})


EmpApp.put("/emp/:id",async(req,res)=>  
{
   const modifiedemp = req.body;
const uid = req.params.id;

const updatedemp = await EmpModel.findByIdAndUpdate(
  uid,
  { $set: { ...modifiedemp } },
  {
    returnDocument: "after",
    runValidators: true
  }
);

res.status(200).json({
  message: "emp modified",
  payLoad: updatedemp
});
})


EmpApp.delete("/emp/:id", async (req,res)=>{
        const deletedemp = await EmpModel.findByIdAndDelete(req.params.id)

 res.json({
   message:"emp deleted successfully"})

})
