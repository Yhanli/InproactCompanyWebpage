from django.db import models


# Create your models here.

class WebsitePages(models.Model):
    active = models.BooleanField(default=False)
    class Meta:
        verbose_name = "WebsitePages"
        verbose_name_plural = "WebsitePages"


class Contact(models.Model):
    websitePages = models.OneToOneField(WebsitePages, on_delete=models.CASCADE)

    cover_image = models.FileField(upload_to="websitepages/contact", blank=True)
    button_name = models.CharField(max_length=1000, default=None, blank=True, null=True)

    class Meta:
        verbose_name = "Contact"
        verbose_name_plural = "Contact"
