import React, { useState, useEffect } from 'react';
import WelcomeContent from './WelcomeContent';
import Form from './Form';
import SearchJobs from './SearchJobs';
import { request } from '../axios_helper';

//export default class AppContent extends React.Component {
function AppContent(props)  {

    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [skill, setSkill] = useState('');
    const [availability, setAvailability] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [experience, setExperience] = useState('');
    const [designation, setDesignation] = useState('');
    const [salary, setSalary] = useState('');
    const [location, setLocation] = useState('');
    const [url, setUrl] = useState('');
    const [data, setData] = useState({
        name:"",
        skill:"",
        availability:"",
        dob:"",
        email:"",
        experience:"",
        designation:"",
        salary:"",
        location:"",
        url:props.url
    })
    const [resumeUrl, setResumeUrl] = useState('');

    useEffect(()=> {
        console.log(">>"+props.email)
        console.log(props.url);
        request(
            "GET",
            "/"+props.email,
            {}
        ).then((response) => {
            console.log(response.data);
            //setData(response.data);
            setName(response.data.name);
            setSkill(response.data.skill);
            setAvailability(response.data.availability);
            setDob(response.data.dob);
            setEmail(response.data.email);
            setExperience(response.data.experience);
            setDesignation(response.data.designation);
            setSalary(response.data.salary);
            setLocation(response.data.location);
            setUrl(response.data.url);
            console.log(data.url);
            console.log(response.data.location);

        })
        .catch((error) => {
            console.error(error);
            setError("error");
            data.email=props.email;
            console.log("data"+data.email);
            console.log("props"+props.email);
        });
        request(
            "GET",
            "/url/"+props.email,
            {}
        ).then((response) => {
            setResumeUrl(response.data);
            console.log(response.data);
        });
    }, [props.email])

    
    return(
        <div>
            <WelcomeContent/>
            <SearchJobs/>
            {email?(
                <Form name={name} skill={skill} availability={availability} email={props.email} dob={dob} 
                experience={experience} designation={designation} salary={salary} location={location} 
                url={url} />
            ):(
            <div>
                {error?(<br/>):(<h3>Loading...</h3>)}
                <Form email={props.email} />
            </div>
            )}

        </div>
    )
}

export default AppContent;