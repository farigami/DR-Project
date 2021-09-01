from django.urls import re_path

from flux_websocket.consumers.ChatList import ChatListConsumer
from flux_websocket.consumers.ChatRoom import ChatRoomConsumer

websocket_urlpatterns = [
    re_path(r'/chat_list', ChatListConsumer.as_asgi()),
    re_path(r'/chat/(?P<room_name>\w+)', ChatRoomConsumer.as_asgi()),
]
