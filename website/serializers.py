from rest_framework import serializers
from website.models import WebsiteMain
from website.models import LandingPictures


class LandingPicturesSerializer(serializers.ModelSerializer):
    class Meta:
        model = LandingPictures
        fields = "__all__"


class WebsiteMainSerializer(serializers.ModelSerializer):
    landing_images = LandingPicturesSerializer(many=True)

    class Meta:
        model = WebsiteMain
        fields = "__all__"
        extra_fields = ["landing_images"]
