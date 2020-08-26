from rest_framework import routers
from .api import QueryViewSet

router = routers.DefaultRouter()
router.register('api/query', QueryViewSet, 'query')

urlpatterns = router.urls
