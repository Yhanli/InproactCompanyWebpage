from django.contrib import admin
from .models import WebsitePages, Contact
# Register your models here.



class ContactInline(admin.TabularInline):
    model = Contact
    classes = ["collapse"]



class PageAdmin(admin.ModelAdmin):
    inlines = [ContactInline]


admin.site.register(WebsitePages, PageAdmin)