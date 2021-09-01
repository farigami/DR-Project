from channels.generic.websocket import AsyncJsonWebsocketConsumer
import json

class ChatRoomConsumer(AsyncJsonWebsocketConsumer):
    groups = ['chat']
    async def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'chat_%s' % self.room_name
        
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )
        await self.accept()
        print(f'Anon connect {self.room_name}')

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )
        print('disconnect')


    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message
            }
        )



    async def chat_message(self, event):
        message = event['message']
        print(event)
        await self.send_json({
            'message': message
        })