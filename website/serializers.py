from rest_framework import serializers
from website.models import WebsiteMain


class WebsiteMainSerializer(serializers.ModelSerializer):
    class Meta:
        model = WebsiteMain
        fields = "__all__"
