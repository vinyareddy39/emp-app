import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

function Employee() {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/list");
    }
  }, [state, navigate]);

  if (!state) return null;

  return (
    <div className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-sm border border-zinc-200 text-zinc-800">
      <h2 className="text-3xl font-light mb-8 text-center tracking-tight border-b border-zinc-100 pb-6">Employee Profile</h2>
      <div className="space-y-6 text-lg">
        <div className="flex justify-between"><span className="text-zinc-500">Name</span><span className="font-medium">{state.name}</span></div>
        <div className="flex justify-between"><span className="text-zinc-500">Email</span><span className="font-medium">{state.email}</span></div>
        <div className="flex justify-between"><span className="text-zinc-500">Mobile</span><span className="font-medium">{state.mobile}</span></div>
        <div className="flex justify-between"><span className="text-zinc-500">Designation</span><span className="font-medium">{state.designation}</span></div>
        <div className="flex justify-between"><span className="text-zinc-500">Company</span><span className="font-medium">{state.companyName}</span></div>
      </div>
      <div className="mt-10 text-center">
        <button onClick={() => navigate("/list")} className="px-6 py-2 border border-zinc-300 text-zinc-700 rounded-lg hover:bg-zinc-50 transition-colors">Back to List</button>
      </div>
    </div>
  );
}

export default Employee;