from django.contrib import admin
from .models import Post


# Register your models here.

def make_active(modeladmin, request, queryset):
    queryset.update(active=True)
make_active.short_description = "Mark posts as active"

def make_inactive(modeladmin, request, queryset):
    queryset.update(active=False)
make_inactive.short_description = "Mark posts as inactive"

class PageAdmin(admin.ModelAdmin):
    list_display = ['title',
                    'post_type',
                    'active',
                    'created_at',
                    'updated_at'
                    ]

    list_filter = [
        "post_type",
        "active"
    ]
    search_fields = [
        "title",
        "content"
    ]
    actions = [make_active, make_inactive]


admin.site.register(Post, PageAdmin)
