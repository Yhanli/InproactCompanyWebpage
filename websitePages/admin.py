from django.contrib import admin
from .models import *
# from super_inlines.admin import SuperInlineModelAdmin, SuperModelAdmin
# Register your models here.

import nested_admin


class ContactUsTickBoxItemsInline(nested_admin.NestedTabularInline):
    model = ContactUsTickBoxItems


class ContactInline(nested_admin.NestedStackedInline):
    model = Contact
    inlines = [ContactUsTickBoxItemsInline]
    classes = ["collapse"]


class ServicesInline(nested_admin.NestedStackedInline):
    model = Services
    classes = ["collapse"]


class OurBrandInline(nested_admin.NestedStackedInline):
    model = OurBrand
    classes = ["collapse"]


class PageAdmin(nested_admin.NestedModelAdmin):
    inlines = [ContactInline, ServicesInline, OurBrandInline]


admin.site.register(WebsitePages, PageAdmin)
