import os
import django

from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter

import flux_websocket.routing

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'DjangoRoll.settings')
os.environ["DJANGO_ALLOW_ASYNC_UNSAFE"] = "true"
django.setup()

application = ProtocolTypeRouter({
    'websocket': AuthMiddlewareStack(
        URLRouter(flux_websocket.routing.websocket_urlpatterns)
    ),
})