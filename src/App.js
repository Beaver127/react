import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom"

function App(props) {
  return (
      //для работы роутов нужно обвернуть в этот тег
      <BrowserRouter>
          <div className="container">
              <Header/>
              <div className="content-wrap">
                  <Navbar />
                  {/*
                  у тега Route есть параметр exact  который откликается только по данному пути:
                   <Route exact path="/profile" />
                  /profile - true
                  /profile/1 - false

                  render - перерисовывает компонент
                  state - передаем нужный параметр через пропсы
                  */}

                  <Route  path="/profile" render={() => {
                      return (
                          <Profile state={props.state.profilePage} />
                      )
                  }} />
                  <Route path="/messages" render={Dialogs} />
              </div>
          </div>
      </BrowserRouter>

  );
}

export default App;
