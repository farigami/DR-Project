from channels.generic.websocket import AsyncJsonWebsocketConsumer

channelsArray = [
    {'title':'Global', 'author': 'Admin', 'href': '/Global/'},
]

class ChatListConsumer(AsyncJsonWebsocketConsumer):


    async def connect(self):
        await self.accept()
        print('connect')
        await self.send_json(channelsArray)

    async def receive(self, event):
        print(event)

    async def disconnect(self, close_code):
        print('disconnect')