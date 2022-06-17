import React, { useEffect } from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preview from './Preview';
import Chats from './Chats';
import ChatView from './ChatView';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/appSlice';
import Login from './Login';
import { auth } from './firebase';
import ghostlogo from "./ghostlogo.png";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          username: authUser.displayName,
          profilePic: authUser.photoURL,
          id: authUser.uid,
        }));
      } else {
        dispatch(logout());
      }
    })
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <React.Fragment>
            <img src={ghostlogo} alt="" className="app__logo" />
            <div className="app__body">
              <div className="app__bodyBackground">
                <Routes>
                  <Route path="/" exact element={<WebcamCapture />} />
                  <Route path="/preview" element={<Preview />} />
                  <Route path="/chats" element={<Chats />} />
                  <Route path="/chats/view" element={<ChatView />} />
                </Routes>
              </div>
            </div>
          </React.Fragment>
        )}
      </Router>
    </div>
  );
}

export default App;
