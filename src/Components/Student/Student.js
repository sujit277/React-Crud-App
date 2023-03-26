import React from "react";
import Main from "../Main/Main";
import "./Student.css";
import { useState } from "react";
import axios from "axios";

const Student = () => {
    const [Data, setData] = useState({
        Name: "",
        Email: "",
        Designation: "",
        Package: ""
    })

    function handleInput(event) {
        const name = event.target.name;
        const value = event.target.value;
        setData({ ...Data, [name]: value })
    }

    function register() {
        axios.post("http://localhost:3000/Students", Data)
            .then((res) => {
                alert("Student Registered Successfully");
                window.location.reload();
            })
    }

    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-success" style={{ padding: "0px 0px" }}>
                    <div className="container-fluid" style={{ padding: "0px 0px" }}>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link navitem" href="/"><strong>Home</strong></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link navitem" href="/"><strong>All Student</strong></a>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="nav-link addbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <strong>Add Student</strong>
                                    </button>
                                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">Register Student</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="mb-3">
                                                        <label htmlFor="Name" className="form-label">Name</label>
                                                        <input type="text" className="form-control" id="Name" name="Name" onChange={(event) => { handleInput(event) }} />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="Company" className="form-label">Company</label>
                                                        <input type="text" className="form-control" id="Company" name="Company" onChange={(event) => { handleInput(event) }} />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="Designation" className="form-label">Designation</label>
                                                        <input type="text" className="form-control" id="Designation" name="Designation" onChange={(event) => { handleInput(event) }} />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="Package" className="form-label">Package</label>
                                                        <input type="text" className="form-control" id="Package" name="Package" onChange={(event) => { handleInput(event) }} />
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" className="btn btn-primary" onClick={register}>Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Main />
            </div>
        </>
    );
}

export default Student;