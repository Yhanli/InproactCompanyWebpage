from django.db import models

# Create your models here.


class AboutUs(models.Model):
    cover_image = models.FileField(upload_to="sidepages/aboutus", blank=True)
    button_name = models.CharField(max_length=1000, blank=True)

    section1_title = models.CharField(max_length=1000, blank=True)
    section1_paragraph = models.TextField(blank=True)

    famous_quote = models.TextField(blank=True)

    section2_title = models.CharField(max_length=1000, blank=True)
    section2_paragraph = models.TextField(blank=True)

    section3_title = models.CharField(max_length=1000, blank=True)
    section3_paragraph = models.TextField(blank=True)
    section3_image = models.FileField(upload_to="sidepages/aboutus", blank=True)

    section4_title = models.CharField(max_length=1000, blank=True)
    section4_paragraph = models.TextField(blank=True)
    section4_image = models.FileField(upload_to="sidepages/aboutus", blank=True)

    light_background_image = models.FileField(upload_to="sidepages/aboutus", blank=True)