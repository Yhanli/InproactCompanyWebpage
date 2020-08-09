from django.contrib import admin
from .models import WebsiteMain
from .models import LandingPictures

admin.site.site_header = "Admin"
admin.site.site_title = "Admin Portal"
admin.site.index_title = "Welcome"
# Register your models here.

class LandingPicturesInline(admin.TabularInline):
    model = LandingPictures
    fields = ['picture']


class PageAdmin(admin.ModelAdmin):
    inlines = [LandingPicturesInline]


admin.site.register(WebsiteMain, PageAdmin)
