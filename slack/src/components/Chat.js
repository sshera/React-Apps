import React, { useEffect } from "react";
import styled from "styled-components";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ChatInput from "./ChatInput";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import { useDocument, useCollection } from "react-firebase-hooks/firestore";
import {db} from "../firebase";
import Message from "./Message";
import { useRef } from "react";

function Chat() {
    const roomId = useSelector(selectRoomId);
    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    );
    const [roomMessages, loading] = useCollection(
        roomId && db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc')
    );
    const chatRef = useRef(null);

    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [roomId, loading]);

    return (
        <ChatContainer>
            {roomDetails && (
                <React.Fragment>
                    <Header>
                        <HeaderLeft>
                            <h4><strong>#{roomDetails?.data().name}</strong></h4>
                            <StarBorderOutlinedIcon />
                        </HeaderLeft>

                        <HeaderRight>
                            <p>
                                <InfoOutlinedIcon /> Details
                            </p>
                        </HeaderRight>
                    </Header>

                    <ChatMessages>
                        {roomMessages?.docs.map(doc => {
                            const { message, timestamp, user, userImage } = doc.data();

                            return (
                                <Message
                                    key={doc.id}
                                    message={message}
                                    timestamp={timestamp}
                                    user={user}
                                    userImage={userImage}
                                />
                            )
                        })}
                        <ChatBottom ref={chatRef} />
                    </ChatMessages>

                    <ChatInput
                        chatRef={chatRef}
                        channelName={roomDetails?.data().name}
                        channelId={roomId}
                    />
                </React.Fragment>
            )}
        </ChatContainer>
    )
}

const ChatMessages = styled.div`

`;

const ChatBottom = styled.div`
    padding-bottom: 200px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;

    > h4 {
        display: flex;
        text-transform: lowercase;
    }

    > .MuiSvgIcon-root {
        margin-left: 10px;
        font-size: 18px;
    }
`;

const HeaderRight = styled.div`
    > p {
        display: flex;
        align-items: center;
        font-size: 14px;
    }

    > p > .MuiSvgIcon-root {
        margin-right: 5px !important;
        font-size: 16px;
    }
`;

const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
`;

export default Chat;