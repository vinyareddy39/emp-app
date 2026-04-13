import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateEmp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onFormSubmit = async (newEmpObj) => {
    try {
      setLoading(true);

      let res = await fetch(`${import.meta.env.VITE_API_URL}/emp-api/emp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEmpObj),
      });

      let data = await res.json();

      if (res.status === 201 || res.status === 200) {
        navigate("/list");
      } else {
        console.log("error response is ", data);
        throw new Error(data.reason || data.message || "Failed to create employee");
      }
    } catch (err) {
      console.log("err in catch", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-sm border border-zinc-200">
      <h1 className="text-center text-3xl font-light text-zinc-900 mb-8 tracking-tight">Create Employee</h1>

      {error && <p className="text-red-500 text-center mb-6">{error}</p>}

      <form
        className="w-full"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <input
          type="text"
          placeholder="Enter the name"
          {...register("name")}
          className="mb-4 bg-zinc-50 border border-zinc-200 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all"
        />
        <input
          type="email"
          placeholder="Enter the email"
          {...register("email")}
          className="mb-4 bg-zinc-50 border border-zinc-200 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all"
        />
        <input
          type="text"
          placeholder="Enter the mobile number"
          {...register("mobile")}
          className="mb-4 bg-zinc-50 border border-zinc-200 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all"
        />
        <input
          type="text"
          placeholder="Enter the designation"
          {...register("designation")}
          className="mb-4 bg-zinc-50 border border-zinc-200 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all"
        />
        <input
          type="text"
          placeholder="Enter the Company Name"
          {...register("companyName")}
          className="mb-6 bg-zinc-50 border border-zinc-200 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all"
        />
        <button
          type="submit"
          className="w-full py-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 hover:-translate-y-0.5 active:translate-y-0 transition-all font-medium shadow-sm"
        >
          Create Employee
        </button>

        {loading && <p className="text-center mt-4 text-zinc-500">Loading...</p>}
      </form>
    </div>
  );
}

export default CreateEmp;













// import { useForm } from "react-hook-form";
// import { useState , useContext } from "react";
// import { useNavigate } from "react-router";

// function CreateEmp() {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   //form submit
//   const onFormSubmit = async (newEmpObj) => {
//     try {
//       setLoading(true);
//       //make HTTP POST req
//       let res = await fetch("http://localhost:3000/emp-api/emp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(newEmpObj),
//       });

//       if (res.status === 201) {
//         //navigate to employees component programatically
//         navigate("/list");
//       } else {
//         let errorRes = await res.json();
//         console.log("error responce is ", errorRes);
//         throw new Error(errorRes.reason);
//       }
//     } catch (err) {
//       console.log("err in catch", err);
//       //deal with err
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   console.log(error);

//   if (loading) {
//     return <p className="text-center text-4xl">Loading....</p>;
//   }
//   if (error) {
//     return <p className="text-red-500 text-center  text-3xl">{error}</p>;
//   }

//   return (
//     <div>
//       <h1 className="text-5xl text-center text-gray-600">Create New Employee</h1>
//       {/* form */}
//       <form className=" max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
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

//         <button type="submit" className="text-2xl rounded-2xl bg-gray-600 text-white block mx-auto p-4">
//           Add Emp
//         </button>
//       </form>
//     </div>
//   );
// }

// export default CreateEmp;