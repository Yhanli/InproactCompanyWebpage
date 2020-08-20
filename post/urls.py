from rest_framework import routers
from .api import PostViewSet
from django.conf.urls import url

router = routers.DefaultRouter()
router.register('api/post', PostViewSet, 'post')

urlpatterns = router.urls
# urlpatterns.append(
#     url(r'^category/$', PostViewSet, 'postdetail')
# )