from django.contrib import admin
from .models import Query


# Register your models here.


def make_active(modeladmin, request, queryset):
    queryset.update(handled=True)


make_active.short_description = "Mark queries as handled"


class PageAdmin(admin.ModelAdmin):
    list_display = ["id",
                    'handled',
                    'query_type',
                    'name',
                    'company_name',
                    'email',
                    'phone',
                    "subject",
                    'created_at',
                    'updated_at'
                    ]
    list_display_links = ("id", "handled", "company_name", "subject")
    list_filter = [
        "query_type",
        "handled"
    ]
    search_fields = [
        "name",
        "company_name",
        "email",
        "phone",
    ]
    actions = [make_active]


admin.site.register(Query, PageAdmin)
