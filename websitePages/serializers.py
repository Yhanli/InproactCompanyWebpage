from rest_framework import serializers
from websitePages.models import WebsitePages, Contact


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = "__all__"


class WebsitePagesSerializer(serializers.ModelSerializer):
    contact = ContactSerializer()

    class Meta:
        model = WebsitePages
        fields = "__all__"
        extra_fields = ["contact"]
