from rest_framework import serializers
from websitePages.models import *


class ContactUsTickBoxItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUsTickBoxItems
        fields = "__all__"


class ContactSerializer(serializers.ModelSerializer):
    tickboxs = ContactUsTickBoxItemsSerializer(many=True)

    class Meta:
        model = Contact
        fields = "__all__"
        extra_fields = ["tickboxs"]

class ICareSerializer(serializers.ModelSerializer):
    class Meta:
        model = ICare
        fields = "__all__"

class InSightSerializer(serializers.ModelSerializer):
    class Meta:
        model = InSight
        fields = "__all__"

class OurBrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = OurBrand
        fields = "__all__"


class ServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Services
        fields = "__all__"


class WebsitePagesSerializer(serializers.ModelSerializer):
    contact = ContactSerializer()
    services = ServicesSerializer()
    ourbrand = OurBrandSerializer()
    insight = InSightSerializer()
    icare = ICareSerializer()

    class Meta:
        model = WebsitePages
        fields = "__all__"
        extra_fields = ["contact", "services", "ourbrand","insight","icare"]
