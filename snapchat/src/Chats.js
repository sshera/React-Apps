import React, { useState, useEffect } from "react";
import "./Chats.css";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { db, auth } from "./firebase";
import Chat from "./Chat";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/appSlice";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { useNavigate } from "react-router-dom";
import { resetCameraImage } from "./features/cameraSlice";

function Chats() {
    const [posts, setPosts] = useState([]);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const takeSnap = () => {
        dispatch(resetCameraImage());
        navigate('/');
    }

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            })))
        })
    }, []);

    return (
        <div className="chats">
            <div className="chats__header">
                <Avatar src={user.profilePic} onClick={() => auth.signOut()} className="chats__avatar" />
                <div className="chats__search">
                    <SearchIcon className="chats__searchIcon" />
                    <input placeholder='Friends' type='text' />
                </div>
                <ChatBubbleIcon className="chats__chatIcon" />
            </div>

            <div className="chats__posts">
                {posts.map(({ id, data: { profilePic, username, timestamp, imageUrl, read }}) => (
                    <Chat
                        key={id}
                        id={id}
                        username={username}
                        timestamp={timestamp}
                        profilePic={profilePic}
                        imageUrl={imageUrl}
                        read={read}
                    />
                ))}
            </div>

            <RadioButtonUncheckedIcon className="chats__takePicIcon" onClick={takeSnap} fontSize='large' />
        </div>
    )
}

export default Chats;