from django.contrib import admin
from .models import AboutUs

admin.site.site_header = "Admin"
admin.site.site_title = "Admin Portal"
admin.site.index_title = "Welcome"

# from django import forms
#
# # Register your models here.
#
# class AboutUsAdmin(forms.ModelForm):
#     class Meta:
#         model = AboutUs
#         exclude = []
#         field_classes = {
#             ''
#         }

admin.site.register(AboutUs)
