import React, { useEffect, useState } from "react";
import "./Update.css";
import {useParams} from "react-router-dom";
import axios from "axios";


const Update = () => {
    const [Data, setData] = useState({
        Name: "",
        Company: "",
        Designation: "",
        Package: ""
    })
    const  {id} = useParams();
    function handleInput(event) {
        const name = event.target.name;
        const value = event.target.value;
        setData({ ...Data, [name]: value })
    }

    useEffect(()=>{
        getStudentDetail(id);
    },[id]);

    async function getStudentDetail(id){
        const result = await axios.get(`http://localhost:3000/Students/${id}`);
        setData(result.data);
    }

    function UpdateDetails(){
        axios.put(`http://localhost:3000/Students/${id}`, Data)
            .then((res) => {
                alert("Student Updated Successfully");
                window.location.replace("http://localhost:3001/");
            })
    }

    return (
        <>
            <div className="container-fluid" style={{backgroundColor:"#198754",height:"575px"}}>
                <div className="row">
                    <h1 style={{textAlign:"center"}}>Student Management System</h1>
                    <h1 style={{textAlign:"center"}}>Update Details</h1>
                    <div className="col-5 mx-auto">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="Name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="Name" name="Name" value={Data?.Name} onChange={(event) => { handleInput(event) }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Company" className="form-label">Company</label>
                                <input type="text" className="form-control" id="Company" name="Company"  value={Data?.Company} onChange={(event) => { handleInput(event) }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Designation" className="form-label">Designation</label>
                                <input type="text" className="form-control" id="Designation" name="Designation" value={Data?.Designation} onChange={(event) => { handleInput(event) }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Package" className="form-label">Package</label>
                                <input type="text" className="form-control" id="Package" name="Package" value={Data?.Package} onChange={(event) => { handleInput(event) }} />
                            </div>
                            <div className="col-1 mx-auto">
                            <button type="button" className="btn btn-primary" onClick={UpdateDetails}>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>);
}

export default Update;