import { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";


const ChatRoom = () => {
    const params = useParams()

    const [messages, setMessages] = useState([])

    const [text, setText] = useState('')

    const CRSocket = useRef(null)

    const sendMessage = () => {
        if (!text) {
            return;
        }
        CRSocket.current.send(JSON.stringify({ message: text }));
    };

    useEffect(() => {
        CRSocket.current = new WebSocket('ws://127.0.0.1:8000/ws/chat/' + params.name)
        CRSocket.current.onmessage = (message) => {
            setMessages(messages.concat(JSON.parse(message.data)))
        };
        return () => CRSocket.current.close()
    }, [params, messages])

    return (
        <>
            <br />
            <Card className='mx-auto' style={{ height: '750px', width: '500px' }}>
                <Card.Header>#{params.name}</Card.Header>
                <Card.Body style={{ overflowY: 'scroll' }}>
                    {messages.length > 0 ?
                        messages.map((message, index) => {
                            return (
                                <p key={index}>
                                    <div style={{ display: 'inline-block' }}>
                                        <div className="circle" style={{ float: 'left' }} />
                                        <h4 style={{ float: 'right' }}>{message.message}</h4>
                                    </div>
                                </p>
                            )
                        })
                        : <h5 className="text-muted" >Будь первым</h5>}
                </Card.Body>
                <Card.Footer>
                    <textarea
                        id='message-input'
                        style={{ fontSize: '15px', height: '120px', width: '460px', resize: 'none' }}
                        onChange={(e) => setText(e.target.value)}
                    >
                    </textarea>
                    <Button
                        id='message-submit'
                        variant="outline-primary"
                        size='lg'
                        onClick={() => sendMessage()}
                        block>
                        Отправить сообщение
                    </Button>
                </Card.Footer>
            </Card>
        </>
    )
};

export default ChatRoom