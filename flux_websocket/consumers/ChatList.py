from channels.generic.websocket import AsyncJsonWebsocketConsumer
import json


channelsArray = [
    {'title':'Global', 'author': 'Admin', 'href': '/Global/'},
]

class ChatListConsumer(AsyncJsonWebsocketConsumer):

    async def connect(self):
        self.room_name = 'chat_list'
        self.room_group_name = 'chat_%s' % self.room_name
        
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )
        await self.accept()
        await self.send_json(channelsArray)


    async def disconnect(self, close_code):
      await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )
    print('disconnect')

    async def receive(self, text_data):
        text_data_json =  json.loads(text_data)
        channelsArray.append(text_data_json)
        await self.channel_layer.group_send(
                self.room_group_name,
                {
                    'type': 'room_list_message',
                    'channel': channelsArray
                }
            )

 

    async def room_list_message(self, event):
        await self.send_json(event['channel'])