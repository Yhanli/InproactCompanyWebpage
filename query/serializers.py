from rest_framework import serializers
from query.models import Query





class QuerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Query
        fields = "__all__"

    def create(self, validated_data):
        if (
                (validated_data["name"] == "" and validated_data["company_name"] == "") or
                (validated_data["email"] == "" and validated_data["phone"] == "")
        ):
            error = {'message': "too many empty fields"}
            raise serializers.ValidationError(error)

        obj = Query.objects.create(**validated_data)
        return obj