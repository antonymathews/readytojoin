import React, { useState } from "react";
import { request } from '../axios_helper';

function Form(props)  {

    const [file, setFile] = useState(null);
    const [data, setData] = useState({
        name:props.name,
        skill:props.skill,
        availability:props.availability,
        dob:props.dob,
        email:props.email,
        experience:props.experience,
        designation:props.designation,
        salary:props.salary,
        location:props.location,
        url:props.url
    })
   
    const submit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        console.log(data.name);
        formData.append('name', data.name);
        formData.append('skill', data.skill);
        formData.append('availability', data.availability);
        console.log(data.email);
        formData.append('email', data.email);
        console.log(data.dob);
        formData.append('dob', data.dob);
        console.log(data.experience);
        formData.append('experience', data.experience);
        formData.append('designation', data.designation);
        formData.append('salary', data.salary);
        formData.append('location', data.location);
        //request(
        //    "POST",
        //    "/testupload2",
        //    formData
        //).then((response) => {
        //    console.log(response.data);
        //});
        console.log('##'+process.env.REACT_APP_BACKEND_URL);
        const response = await fetch(process.env.REACT_APP_BACKEND_URL, {
            method: 'POST',
            body: formData,
        });
        alert("saved");
        console.log('**'+response);
        console.log(data.name, data.dob, data.email, data.experience);
    }

//TODO fix the file upload 

    function handle(e) {
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata);
    }

    function handleFile(e) {
        setFile(e.target.files[0]);
    };

    return(
        <div className="row justify-content-md-center">
                <div className="col-4">
                    <div className="card" style={{ width: "18em"}}>
                        <div className="card-body">
                            <div className="card-title">
                                <h5>Your information</h5>
                                <form onSubmit={(e) => submit(e)}>
                                    Name: <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder="name" type="text"></input>
                                    Skills: <input onChange={(e)=>handle(e)} id="skill" value={data.skill} placeholder="skill" type="text"></input>
                                    Availablily date: <input onChange={(e)=>handle(e)} id="availability" value={data.availability} placeholder="availability" type="date"></input>
                                    Dob: <input onChange={(e)=>handle(e)} id="dob" value={data.dob} placeholder="dob" type="date"></input>
                                    Experience in years: <input onChange={(e)=>handle(e)} id="experience" value={data.experience} placeholder="experience" type="number"></input>
                                    Designation: <input onChange={(e)=>handle(e)} id="designation" value={data.designation} placeholder="designation" type="text"></input>
                                    Current CTC: <input onChange={(e)=>handle(e)} id="salary" value={data.salary} placeholder="salary" type="number"></input>
                                    Location: <input onChange={(e)=>handle(e)} id="location" value={data.location} placeholder="location" type="text"></input>
                                    Resume: <input onChange={(e)=>handleFile(e)} id="file" value={data.file} 
                                    placeholder="file" type="file" className="form-control" /> 
                                    {data.url} view resume
                                    <div>
<embed
    src={data.url}
    type="application/pdf"
    frameBorder="0"
    scrolling="auto"
    height="100%"
    width="100%"
></embed></div>
                                    <button>{data.email?(<div>Save</div>):(<div>Register</div>)}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Form;