from rest_framework import serializers
from subscriber.models import Subscriber





class SubscriberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscriber
        fields = "__all__"
