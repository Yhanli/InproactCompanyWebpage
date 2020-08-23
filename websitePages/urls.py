from rest_framework import routers
from .api import WebsitePagesViewSet

router = routers.DefaultRouter()
router.register('api/websitepages', WebsitePagesViewSet, 'websitepages')

urlpatterns = router.urls
