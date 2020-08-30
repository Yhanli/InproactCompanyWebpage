from django.contrib import admin
from .models import Subscriber
# Register your models here.


def make_active(modeladmin, request, queryset):
    queryset.update(active=True)
make_active.short_description = "Mark queries as active"

def make_contacted(modeladmin, request, queryset):
    queryset.update(contacted=True)
make_active.short_description = "Mark queries as contacted"

class PageAdmin(admin.ModelAdmin):
    list_display = ["id",
                    "active",
                    'email',
                    'name',
                    'phone',
                    'requested_contact',
                    'receive_feeds',
                    'preferred_contact_method',
                    "source_subscribed",
                    "contacted",
                    'created_at',
                    'updated_at'
                    ]
    list_display_links = ("id", "email", "name", "phone")
    list_filter = [
        "contacted",
        "email_opt_out",
        "receive_feeds",
        "active",
    ]
    search_fields = [
        "name",
        "email",
        "phone",
    ]
    actions = [make_active,make_contacted]

admin.site.register(Subscriber,PageAdmin)