import React, { useState } from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase.js";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

function SendMail() {
    const { register, handleSubmit, watch, errors } = useForm();
    const [to, setTo] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        db.collection("emails").add({
            to: to,
            subject: subject,
            message: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        dispatch(closeSendMessage());
    }

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon className="sendMail__close"
                onClick={() => dispatch(closeSendMessage())} />
            </div>

            <form>
                <input 
                    value={to}
                    onChange={e => setTo(e.target.value)}
                    name="to"
                    placeholder="To"
                    type="email"
                    ref={register('email', { required: true })} />
                {/* {errors.to && <p className="sendMail__error">*Required field</p>} */}
                <input
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    name="subject"
                    placeholder="Subject"
                    type="text"
                    ref={register('text', { required: true })} />
                {/* {errors.subject && <p className="sendMail__error">*Required field</p>} */}
                <input
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    name="message"
                    className="sendMail__message"
                    type="text"
                    ref={register('text', { required: true })} />
                {/* {errors.message && <p className="sendMail__error">*Required field</p>} */}

                <div className="sendMail__options">
                    <Button 
                        className="sendMail__send"
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={onSubmit}>Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail;