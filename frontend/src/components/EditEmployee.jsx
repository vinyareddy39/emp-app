import { useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";

function EditEmployee() {
  const [error, setError] = useState("");
  const { state } = useLocation();
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/list");
      return;
    }

    setValue("name", state.name);
    setValue("email", state.email);
    setValue("mobile", state.mobile);
    setValue("designation", state.designation);
    setValue("companyName", state.companyName);
  }, [state, setValue, navigate]);

  const saveModifiedEmp = async (modifiedEmp) => {
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/emp-api/emp/${state._id}`,
        modifiedEmp
      );

      if (res.status === 200) {
        navigate("/list");
      }
    } catch (err) {
      console.log("err in catch", err);
      setError(err.message);
    }
  };

  return (
    <div>
      <h1 className="text-center text-4xl mb-9">Edit Employee</h1>

      {error && <p className="text-red-600 text-center">{error}</p>}

      <form
        className="w-full max-w-md mx-auto"
        onSubmit={handleSubmit(saveModifiedEmp)}
      >
        <input
          type="text"
          placeholder="Enter the name"
          {...register("name")}
          className="mb-3 border p-3 w-full rounded-2xl"
        />
        <input
          type="email"
          placeholder="Enter the email"
          {...register("email")}
          className="mb-3 border p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter the mobile number"
          {...register("mobile")}
          className="mb-3 border p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter the designation"
          {...register("designation")}
          className="mb-3 border p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter the Company Name"
          {...register("companyName")}
          className="mb-3 border p-3 w-full rounded-2xl"
        />
        <button
          type="submit"
          className="block mx-auto p-4 bg-violet-300 rounded-3xl hover:bg-indigo-300"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default EditEmployee;






// import { useForm } from "react-hook-form";
// import { useLocation, useNavigate } from "react-router";
// import { useEffect } from "react";
// import axios from "axios"; 



// function EditEmployee() { 
//   const {register , handleSubmit , formState:{ errors },setValue,} = useForm()  ;

//   const {state} = useLocation() ;  
//   const navigate = useNavigate() ; 

//   useEffect(() =>{ 
//         if (!state) {
//       navigate("/list"); // redirect if no data
//       return;
//     }
//     setValue("name",state.name)
//     setValue("email",state.email)
//     setValue("mobile",state.mobile)
//     setValue("designation",state.designation)
//     setValue("companyName",state.companyName)
//   },[]) 

//  const saveModifiedEmp = async (modifiedEmp) => {
//     // console.log(modifiedEmp);
//     //make HTTP PUT req
//     const res = await axios.put(`http://localhost:3000/emp-api/emp/${state._id}`, modifiedEmp);
//     if (res.status === 200) {
//       //navigate to ListOfEMps
//       navigate("/list");
//     }
//   };
//   return (
//     <div>
//       <h1 className="text-5xl text-center text-yellow-600"> Edit  Employee</h1>
//       {/* form */}
//       <form className="   bg-gray-300 p-2.5 max-w-md mx-auto mt-10 rounded-2xl" >
//         <input
//           type="text"
//           placeholder="Enter name "
//           {...register("name")}
//           className="mb-3  border-2 p-3 w-full rounded-2xl"
//         />
//         <input
//           type="email"
//           placeholder="Enter Email "
//           {...register("email")}
//           className="mb-3  border-2 p-3 w-full rounded-2xl"
//           disabled
//         />

//         <input
//           type="number"
//           placeholder="Enter mobile number"
//           {...register("mobile")}
//           className="mb-3  border-2 p-3 w-full rounded-2xl"
//         />
//         <input
//           type="text"
//           placeholder="Enter designation"
//           {...register("designation")}
//           className="mb-3  border-2 p-3 w-full rounded-2xl"
//         />
//         <input
//           type="text"
//           placeholder="Enter name of the company"
//           {...register("companyName")}
//           className="mb-3  border-2 p-3 w-full rounded-2xl"
//         />

//         <button   type="submit" className="text-2xl rounded-2xl bg-green-600 text-white block mx-auto p-4">
//           Save 
//         </button>
//       </form>
//       </div>
//   )
// }

// export default EditEmployee