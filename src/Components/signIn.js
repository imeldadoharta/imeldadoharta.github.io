import React, { useState } from 'react'
import axios from 'axios';
import config from '../Config/config'
import { useNavigate } from "react-router-dom"

export default function SignIn() {
    const [errrorMessage, setErrorMessage] = useState('')
    const [dataApi, setData] = useState({
        username: '',
        password: ''
    })

    let navigate = useNavigate();

    const handleSubmit = async (event) => {

        event.preventDefault();
        let option = {
            url: config.base_url + '/auth',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                username: dataApi.username,
                password: dataApi.password
            }
        }
        const { data } = await axios(option)

        if (data.message === 'You have logged in') {
            localStorage.setItem('token', data.token);
            //setIsLoggedIn(true)  
            setErrorMessage('')
            navigate('/home')

        } else {

            setErrorMessage(data)

        }
    }

    const handleUserInputChange = (event) => {
        event.persist();
        setData((previousState) => ({
            ...previousState,
            username: event.target.value,
        }));
    }

    const handlePasswordInputChange = (event) => {
        event.persist();
        setData((previousState) => ({
            ...previousState,
            password: event.target.value,
        }));
    }

    return (
        <main id="main" class="main">



            <section class="section dashboard">
                <div class="row">

                    <center>
                        <div class="col-lg-5">
                            <div class="row">


                                <div class="card mb-3">

                                    <div class="card-body">

                                        <div class="pt-4 pb-2">
                                            <p class="text-center small" style={{ color: "red" }}>{errrorMessage}</p>
                                            <h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                            <p class="text-center small">Enter your username & password to login</p>
                                        </div>

                                        <form >

                                            <div class="col-12">
                                                <label for="yourUsername" class="form-label">Username</label>
                                                <div >

                                                    <input type="text" name="username" class="form-control" id="yourUsername" value={dataApi.username} onChange={handleUserInputChange} />
                                                    <div class="invalid-feedback">Please enter your username.</div>
                                                </div>
                                            </div>

                                            <div class="col-12">
                                                <label for="yourPassword" class="form-label">Password</label>
                                                <input type="password" name="password" class="form-control" id="yourPassword" value={dataApi.password} onChange={handlePasswordInputChange} />
                                                <div class="invalid-feedback">Please enter your password!</div>
                                            </div>
                                            <br />
                                            <div class="col-12">
                                                <button class="btn btn-primary w-100" onClick={handleSubmit}>Sign in</button>

                                            </div>

                                        </form>

                                    </div>
                                </div>



                            </div>
                        </div>


                    </center>
                </div>

            </section>

        </main>
    )
};