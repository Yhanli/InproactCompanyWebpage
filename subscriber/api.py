from .models import Subscriber
from rest_framework import viewsets, permissions
from .serializers import SubscriberSerializer


class SubscriberViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SubscriberSerializer
    queryset = Subscriber.objects.all()
    http_method_names = ['post']