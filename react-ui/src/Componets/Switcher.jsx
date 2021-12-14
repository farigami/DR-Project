import React, { useCallback, useMemo, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

import Market from "./Market/Market"
import ChatList from "./Chat/ChatList";
import Converter from "./Converter/Converter";

import Home from "./Home";



const Switcher = () => {
  const market = useMemo(() => <Market />, []);
  const chatlist = useMemo(() => <ChatList />, []);
  const converter = useMemo(() => <Converter />, [])
  const [content, setContent] = useState(null)

  const useSetContentOnClick = (view) => {
    return useCallback(() => {
      setContent(view)
    }, [view]);
  }
  
  return (
    <>
    <div className="m-0" style={{ textAlign:'center' }}>
      <ButtonGroup className="mb-3">
        <Button
          disabled={content === market}
          onClick={useSetContentOnClick(market)}
          variant='outline-success'
        >
          Market
        </Button>
        <Button
          disabled={content === chatlist}
          onClick={useSetContentOnClick(chatlist)}
          variant='outline-success'
        >
          Chat
        </Button>
        <Button
          disabled={content === converter}
          onClick={useSetContentOnClick(converter)}
          variant='outline-success'
        >
          Currency
        </Button>
      </ButtonGroup>
      {content == null ? <Home /> : null}
      {content}
    </div>
    </>
  )
}


export default Switcher;