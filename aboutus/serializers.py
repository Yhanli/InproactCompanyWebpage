from rest_framework import serializers
from aboutus.models import AboutUs, Story, Team, Services, WhyUs, WhyUsSubItem


class WhyUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = WhyUs
        fields = "__all__"


class WhyUsSubItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = WhyUsSubItem
        fields = "__all__"


class StorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Story
        fields = "__all__"


class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = "__all__"


class ServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Services
        fields = "__all__"


class AboutUsSerializer(serializers.ModelSerializer):
    story = StorySerializer()
    team = TeamSerializer()
    services = ServicesSerializer()
    whyus = WhyUsSerializer()
    whyus_subitems = WhyUsSubItemsSerializer(many=True)

    class Meta:
        model = AboutUs
        fields = "__all__"
        extra_fields = ["story", "team", "services", "whyus", "whyus_subitems"]
