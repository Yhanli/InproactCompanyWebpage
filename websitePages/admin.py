from django.contrib import admin
from .models import WebsitePages, Contact, Services
# Register your models here.



class ContactInline(admin.StackedInline):
    model = Contact
    classes = ["collapse"]

class ServicesInline(admin.StackedInline):
    model = Services
    classes = ["collapse"]

class PageAdmin(admin.ModelAdmin):
    inlines = [ContactInline,ServicesInline]


admin.site.register(WebsitePages, PageAdmin)