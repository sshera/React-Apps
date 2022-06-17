import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function Login() {
    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithPopup(provider).catch((error) => {
            alert(error.message);
        });
    }  

    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src="https://assets.brandfolder.com/pl546j-7le8zk-afym5u/v/3033396/original/Slack_Mark_Web.png" alt="" />
                <h1>Sign in to the Cat Job Slack</h1>
                <p>catjob.slack.com</p>

                <Button onClick={signIn}>
                    Sign in with Google
                </Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`;

const LoginInnerContainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }

    > button {
        margin-top: 50px;
        text-transform: inherit !important;
        color: white;
        background-color: #0a8d48 !important;
    }
`;

export default Login;