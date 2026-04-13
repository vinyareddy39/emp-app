import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const navigate = useNavigate();

  const gotoEmployee = (empObj) => {
    navigate("/employee", { state: empObj });
  };

  const gotoEditEmployee = (empObj) => {
    navigate("/edit-emp", { state: empObj });
  };

  async function getEmps() {
    try {
      let res = await axios.get(`${import.meta.env.VITE_API_URL}/emp-api/emp`);

      if (res.status === 200) {
        let resObj = res.data;
        setEmps(resObj.payLoad || []);
      }
    } catch (error) {
      console.log("Error fetching employees:", error);
    }
  }

  const deleteEmpById = async (id) => {
    try {
      let res = await axios.delete(`${import.meta.env.VITE_API_URL}/emp-api/emp/${id}`);

      if (res.status === 200) {
        getEmps();
      }
    } catch (error) {
      console.log("Error deleting employee:", error);
    }
  };

  useEffect(() => {
    getEmps();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-light text-zinc-900 mb-10 text-center tracking-tight">List of Employees</h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {emps.map((empObj) => (
          <div
            key={empObj._id}
            className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
          >
            <div className="mb-6">
              <p className="font-medium text-xl text-zinc-900 mb-1">{empObj.name}</p>
              <p className="text-zinc-500 text-sm">{empObj.email}</p>
            </div>

            <div className="flex justify-between gap-2 border-t border-zinc-100 pt-4 cursor-auto">
              <button
                className="flex-1 py-2 text-sm font-medium border border-zinc-300 text-zinc-700 rounded-lg hover:bg-zinc-50 hover:text-zinc-900 transition-colors"
                onClick={() => gotoEmployee(empObj)}
              >
                View
              </button>

              <button
                className="flex-1 py-2 text-sm font-medium border border-zinc-300 text-zinc-700 rounded-lg hover:bg-zinc-50 hover:text-zinc-900 transition-colors"
                onClick={() => gotoEditEmployee(empObj)}
              >
                Edit
              </button>

              <button
                className="flex-1 py-2 text-sm font-medium border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                onClick={() => deleteEmpById(empObj._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;