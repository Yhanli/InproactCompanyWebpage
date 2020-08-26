from rest_framework import serializers
from websitePages.models import WebsitePages, Contact, Services, ContactUsTickBoxItems


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

class ServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Services
        fields = "__all__"


class WebsitePagesSerializer(serializers.ModelSerializer):
    contact = ContactSerializer()
    services = ServicesSerializer()
    class Meta:
        model = WebsitePages
        fields = "__all__"
        extra_fields = ["contact","services"]
