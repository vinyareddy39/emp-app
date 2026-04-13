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
      <h1 className="text-4xl text-center mb-10 font-serif">List of Employees</h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {emps.map((empObj) => (
          <div
            key={empObj._id}
            className="bg-violet-300 p-5 rounded-3xl text-center"
          >
            <p className="font-bold text-xl">{empObj.name}</p>
            <p>{empObj.email}</p>

            <div className="flex justify-around mt-4">
              <button
                className="bg-blue-400 p-3 rounded-2xl"
                onClick={() => gotoEmployee(empObj)}
              >
                View
              </button>

              <button
                className="bg-green-400 p-3 rounded-2xl"
                onClick={() => gotoEditEmployee(empObj)}
              >
                Edit
              </button>

              <button
                className="bg-red-400 p-3 rounded-2xl"
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