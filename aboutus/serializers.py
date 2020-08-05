from rest_framework import serializers
from aboutus.models import AboutUs, Story

class StorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Story
        fields = "__all__"


class AboutUsSerializer(serializers.ModelSerializer):
    story = StorySerializer()
    class Meta:
        model = AboutUs
        fields = "__all__"
        extra_fields = ["story"]