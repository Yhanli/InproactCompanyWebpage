from rest_framework import routers
from .api import WebsiteMainViewSet

router = routers.DefaultRouter()
router.register('api/websitemain', WebsiteMainViewSet, 'websitemain')

urlpatterns = router.urls
