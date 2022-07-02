import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./Main.css";
import { useNavigate } from "react-router-dom";

const Main = () => {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        getAllStudents();
    }, [])

        async function getAllStudents() {
            const result = await axios.get("http://localhost:3000/Students");
            setData(result.data);
            console.log(result.data);
        }

    function deleteStudent(id) {
        axios.delete(`http://localhost:3000/Students/${id}`)
            .then(() => {
                setStatus("Deleted Succesfully");
                console.log(status);
                alert("Student Deleted SuccessFully");
                window.location.reload();
            })
    }

    function details(item) {
        return (
            <tr className="table-light" key={item.id}>
                <td>{item.id}</td>
                <td>{item.Name}</td>
                <td>{item.Company}</td>
                <td>{item.Designation}</td>
                <td>{item.Package}</td>
                <td><button type="button" className="btn btn-danger mx-1 btnSize" onClick={() => { deleteStudent(item.id) }}>Delete</button>
                    <button type="button" className="btn btn-primary btnSize" onClick={()=>{navigate(`/update/${item.id}`)}}>
                        Update
                    </button>
                </td>
            </tr>
        )
    }

    return (
        <>
            <div className="container-fluid" style={{ height: "575px", backgroundColor: "#282A35" }}>
                <div className="row">
                    <h1 className="box5">Student Management System</h1>
                    <div className="mt-4 box4">
                        <table className="table table-striped table-hover">
                            <thead className="table-light">
                                <tr>
                                    <th>SNo</th>
                                    <th>Name</th>
                                    <th>Company</th>
                                    <th>Designation</th>
                                    <th>Package</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(details)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main