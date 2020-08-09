from django.contrib import admin
from .models import AboutUs, Story, Team, Services, WhyUs


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
class WhyUsInline(admin.StackedInline):
    model = WhyUs
    classes = ["collapse"]
    field_sets = (field.name for field in Story._meta.fields if field.name != "id")

class StoryInline(admin.StackedInline):
    model = Story
    classes = ["collapse"]
    field_sets = (field.name for field in Story._meta.fields if field.name != "id")

class TeamInline(admin.StackedInline):
    model = Team
    classes = ["collapse"]
    field_sets = (field.name for field in Team._meta.fields if field.name != "id")

class ServicesInline(admin.StackedInline):
    model = Services
    classes = ["collapse"]
    field_sets = (field.name for field in Services._meta.fields if field.name != "id")

class PageAdmin(admin.ModelAdmin):
    inlines = [StoryInline, TeamInline, ServicesInline, WhyUsInline]


admin.site.register(AboutUs, PageAdmin)
