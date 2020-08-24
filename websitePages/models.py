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


class Services(models.Model):
    websitePages = models.OneToOneField(WebsitePages, on_delete=models.CASCADE)

    cover_image = models.FileField(upload_to="sidepages/aboutus/services", blank=True)
    button_name = models.CharField(max_length=1000, default=None, blank=True, null=True)

    # main_section_heading = models.CharField(max_length=1000, default=None, blank=True, null=True)
    # main_section_paragraph = models.TextField(default=None, blank=True, null=True)

    section_1_title = models.CharField(max_length=1000, blank=True)
    section_1_words = models.TextField(blank=True)
    section_1_picture = models.ImageField(upload_to="website_main/", blank=True)

    section_1_2_divider = models.CharField(max_length=1000, blank=True)
    section_2_picture = models.ImageField(upload_to="website_main/", blank=True)

    section_2_text_1_title = models.CharField(max_length=1000, blank=True)
    section_2_text_1_paragraph = models.TextField(blank=True)

    section_2_text_2_title = models.CharField(max_length=1000, blank=True)
    section_2_text_2_paragraph = models.TextField(blank=True)

    section_2_text_3_title = models.CharField(max_length=1000, blank=True)
    section_2_text_3_paragraph = models.TextField(blank=True)

    section_2_text_4_title = models.CharField(max_length=1000, blank=True)
    section_2_text_4_paragraph = models.TextField(blank=True)

    class Meta:
        verbose_name = "Service"
        verbose_name_plural = "Service"