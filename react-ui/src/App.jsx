import React from "react";
import { Switch, Route } from "react-router-dom";


import Header from "./Componets/Header";
import Footer from "./Componets/Footer";
import NotFound from "./Componets/NotFound";
import ChatRoom from "./Componets/Chat/ChatRoom";
import Switcher from "./Componets/Switcher";



const App = () => {

  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Switcher} />
        <Route path='/chat/:name/' component={ChatRoom} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  )
}



export default App