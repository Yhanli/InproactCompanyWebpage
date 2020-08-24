from .models import WebsitePages
from rest_framework import viewsets, permissions
from .serializers import WebsitePagesSerializer
from rest_framework import filters
from rest_framework.response import Response


class WebsitePagesViewSet(viewsets.ViewSet):
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = WebsitePagesSerializer



    def list(self, request):
        queryset = WebsitePages.objects.all()
        serializer = WebsitePagesSerializer(queryset.filter(active=True), many=True)
        if len(serializer.data) > 0:
            return Response(serializer.data[0])
        else:
            serializer = WebsitePagesSerializer(queryset, many=True)
            return Response(serializer.data[0])
