from rest_framework import routers
from .api import SubscriberViewSet

router = routers.DefaultRouter()
router.register('api/subscriber', SubscriberViewSet, 'subscriber')

urlpatterns = router.urls
