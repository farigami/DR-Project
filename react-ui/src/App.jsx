import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './Componets/Home'
import Header from "./Componets/Header";
import Footer from "./Componets/Footer";
import NotFound from "./Componets/NotFound";
import ChatRoom from "./Componets/ChatRoom";
import Switcher from "./Componets/Switcher";


const App = () => {

  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/apps" component={Switcher} />
        <Route path='/chat/:name/' component={ChatRoom} />
        <Route component={NotFound} />
      </Switch>

      <Footer />
    </>
  )
}

export default App