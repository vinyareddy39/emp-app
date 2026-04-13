import {Schema,model} from 'mongoose' // imported from mongoose 
const EmpSchema = new Schema({
    name:{
        type:String,
        required:[true,"the name is imp"],
        maxLength:[20,"the max length of name is 10"]

    },email:{
    type:String,
    required:[true,"the email is must"],
    unique:true
    },mobile:{
        type:String,
        required :[true,"mobile is imp "]
    },designation:{
        type:String ,
         required:[true,"designation  is imp "]
    },companyName:{
        type:String,
         required:[true,"company name is imp "]
    },
});
export  const  EmpModel = model("Employeeeeeeeee",EmpSchema) // it is name of collection  in mangoDB (product)  and  productSchema is that struture apllied to the collection   



