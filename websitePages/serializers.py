from rest_framework import serializers
from websitePages.models import WebsitePages, Contact, Services


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = "__all__"

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
