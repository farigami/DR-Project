import React, { useCallback, useMemo, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import Market from "./Market"
import ChatList from "./ChatList";


const Switcher = () => {
  const market = useMemo(() => <Market />, []);
  const chatlist = useMemo(() => <ChatList />, []);
  const [content, setContent] = useState(null)

  const useSetContentOnClick = (view) => {
    return useCallback(() => {
      setContent(view)
    }, [view]);
  }
  return (
    <>
      <ButtonGroup className='mb-3'>
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
          disabled={content === chatlist}
          onClick={useSetContentOnClick(chatlist)}
          variant='outline-success'
        >
          Crypto
        </Button>
      </ButtonGroup>
      {content}
    </>
  )
}


export default Switcher;