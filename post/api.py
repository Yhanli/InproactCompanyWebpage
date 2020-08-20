from .models import Post
from rest_framework import viewsets, permissions
from .serializers import PostSerializer
from rest_framework import filters
from django.shortcuts import get_object_or_404
from rest_framework.response import Response

class PostViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PostSerializer
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['created_at']

    def get_queryset(self):
        queryset = Post.objects.all()
        postType = self.request.query_params.get('post_type')

        if postType:
            queryset = queryset.filter(post_type=postType)


        return queryset.order_by('-created_at')

    def retrieve(self, request, pk=None):
        queryset = Post.objects.all()
        post = get_object_or_404(queryset, pk=pk)
        serializer = PostSerializer(post)
        return Response(serializer.data)
