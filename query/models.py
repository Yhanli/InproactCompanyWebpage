from django.db import models


# Create your models here.
class Query(models.Model):
    handled = models.BooleanField(default=False)
    company_name = models.CharField(max_length=250, blank=True)
    name = models.CharField(max_length=250, blank=True)
    email = models.EmailField(blank=True)
    phone = models.CharField(max_length=250, blank=True)
    preferred_contact = models.CharField(max_length=250, blank=True)
    subject = models.CharField(max_length=250, blank=True)
    message = models.TextField(blank=True)
    checked_content = models.TextField(blank=True)
    query_type = models.CharField(
        max_length=4,
        choices=[('bus', "Business"), ('ind', "Individual"), ('cont', "General Contact")],
        default='cont'
    )
    note_internal_use = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Query"
        verbose_name_plural = "Queries"
