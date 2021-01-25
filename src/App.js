import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './app/Header/Header';
import Sidebar from './app/Sidebar/Sidebar';
import EmailList from './app/EmailList/EmailList';
import Mail from './app/Mail/Mail';
import SendMail from './app/SendMail/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsSendMsgOpen } from './store/mailSlice';
import { login, selectUser } from './store/userSlice';
import Login from './app/Login/Login';
import { auth } from './firebase';

function App() {
  const isSendMsgOpen = useSelector(selectIsSendMsgOpen);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }else{

      }
    })
  }, []);
  
  return ( 
    <BrowserRouter>
    { !user ? (<Login />) : (
        <div className="App">
          <Header />
          <div className="app_body"> 
            <Sidebar />
            <Switch>
              <Route path="/" exact component={EmailList} />
              <Route path="/mail" component={Mail} />
            </Switch>
          </div>  
            {isSendMsgOpen && <SendMail /> } 
        </div>
      )
    }    
    </BrowserRouter>
  );
}

export default App;
