import './App.css'
import logo from '../logo.svg'

import Header from './Header'
import AppContent from './AppContent';

import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { googleLogout } from '@react-oauth/google';
import { useState, useEffect } from 'react';

import { request } from '../axios_helper';
import axios from 'axios';


function App() {

    const [ profile, setProfile ] = useState([]);
    const [resumeUrl, setResumeUrl] = useState('');

    const login = useGoogleLogin({
        onSuccess: async tokenResponse => { console.log(tokenResponse.access_token)
            const userInfo = await axios
            .get('https://www.googleapis.com/oauth2/v3/userinfo', {
              headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
            })
            .then(res => res.data);
    
          console.log(userInfo);
          setProfile(userInfo);
        },
      });
      
    const logOut = () => {
      googleLogout();
      setProfile(null);
      console.log('Logged out');
    };

    return(
        <div>
            <Header pageTitle="Authentication page using JWT" logoSrc={logo} />
            <div className="row justify-content-md-center">
                <div className="col-4">
                    <button onClick={() => login()}>Sign in with Google 🚀</button>
                    <br/>
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                        const decoded = jwtDecode(credentialResponse?.credential);
                        setProfile(decoded);
                        console.log(decoded);
                        }}
                        onError={() => {
                        console.log('Login Failed');
                        }}
                    />
                </div>
            </div>
            {profile ? (
                <div>
                  { profile.email !== undefined &&  profile.email !== null? (<div>
                    <p>
                        User Logged in
                        <img className="img-fluid" src={profile.picture} referrerPolicy="no-referrer"/> |  
                        {profile.name} | {profile.email}| <button onClick={logOut}>Log out</button>
                    </p>
                    <br />   
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <AppContent email={profile.email} />
                            </div>
                        </div>
                    </div>
                    
                    </div>): (<br/>)}
                </div>
            ) : (
                <div>

                <br/>
                </div>
            )}

        </div>
    );
}

export default App;