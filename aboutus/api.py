from .models import AboutUs
from rest_framework import viewsets, permissions
from .serializers import AboutUsSerializer


class AboutUsViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = AboutUsSerializer
    queryset = AboutUs.objects.all()

    # def get_queryset(self):
    #     return self.objects.filter()
