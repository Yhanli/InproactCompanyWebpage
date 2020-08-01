from .models import WebsiteMain
from rest_framework import viewsets, permissions
from .serializers import WebsiteMainSerializer


class WebsiteMainViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = WebsiteMainSerializer
    queryset = WebsiteMain.objects.all()

    # serializer_class = LandingPicturesSerializer
    # queryset = LandingPicturesSerializer.objects.all()
