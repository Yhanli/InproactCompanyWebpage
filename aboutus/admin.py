from django.contrib import admin
from .models import AboutUs,Story

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

class StoryInline(admin.StackedInline):
    model = Story
    field_sets = (field.name for field in Story._meta.fields if field.name != "id")


class PageAdmin(admin.ModelAdmin):
    inlines = [StoryInline]


admin.site.register(AboutUs, PageAdmin)
