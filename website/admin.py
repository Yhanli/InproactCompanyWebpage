from django.contrib import admin
from .models import WebsiteMain
from .models import LandingPictures


# Register your models here.

class LandingPicturesInline(admin.TabularInline):
    model = LandingPictures
    fields = ['picture']


class PageAdmin(admin.ModelAdmin):
    inlines = [LandingPicturesInline]


admin.site.register(WebsiteMain, PageAdmin)
