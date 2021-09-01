import { useEffect, useState, useRef } from "react";
import { Button, Card, InputGroup, FormControl } from "react-bootstrap";


const ChatList = () => {
    const [channels, setCannels] = useState([]);

    const CLSocket = useRef(null);
    
    useEffect(() => {
        CLSocket.current = new WebSocket('ws://127.0.0.1:8000/ws/chat_list/');
        CLSocket.current.onmessage = (e) => {
            setCannels(JSON.parse(e.data))
        }
        return () => CLSocket.current.close();
    }, [])

    return (
        <>
            <Card className='ml-auto mr-auto' border="info" style={{ width: '360px', height: '500px' }}>
                <Card.Header>
                    <h2>Список каналов</h2>
                </Card.Header>
                <Card.Body style={{ overflowY: 'scroll' }}>
                    {channels.length > 0 ?
                        channels.map((channel, index) => {
                            return (
                                <p key={index}>
                                    <h5>{channel.title}</h5>
                                    <h6 className='text-muted'>Cоздатель: {channel.author}</h6>
                                    <Button variant="info" href={'/chat' + channel.href} block>Присоединиться</Button>
                                </p>
                            )
                        })
                        : <h5 className="text-muted" >Активных каналов нет</h5>}
                </Card.Body>
                <Card.Footer>
                    <InputGroup className='mb-2'>
                        <InputGroup.Text id="inputGroup-Title">Название канала</InputGroup.Text>
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                    <Button variant="outline-warning" size='lg' block>Создать канал</Button>
                </Card.Footer>
            </Card>
        </>
    )
}

export default ChatList