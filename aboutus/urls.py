from rest_framework import routers
from .api import AboutUsViewSet

router = routers.DefaultRouter()
router.register('api/aboutus', AboutUsViewSet, 'aboutus')

urlpatterns = router.urls
