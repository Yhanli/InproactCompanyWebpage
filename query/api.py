from .models import Query
from rest_framework import viewsets, permissions
from .serializers import QuerySerializer


class QueryViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = QuerySerializer
    queryset = Query.objects.all()
    http_method_names = ['post']
