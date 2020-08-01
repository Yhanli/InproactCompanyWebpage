from django.db import models


# Create your models here.


class WebsiteMain(models.Model):
    # backgroundImg = models.FileField(upload_to="website_main/")
    site_name = models.CharField(max_length=1000, blank=True)
    logo = models.FileField(upload_to="website_main/")
    footer_title = models.CharField(max_length=1000)
    footer_phrase = models.TextField()
    favicon = models.FileField(upload_to="website_main/")
    facebook = models.CharField(max_length=1000, blank=True)
    instagram = models.CharField(max_length=1000, blank=True)
    twitter = models.CharField(max_length=1000, blank=True)
    youtube = models.CharField(max_length=1000, blank=True)
    linkedin = models.CharField(max_length=1000, blank=True)
    # landing_images = models.ForeignKey("LandingPictures", on_delete=models.CASCADE, blank=True)


class LandingPictures(models.Model):
    picture = models.ImageField(upload_to="website_main/landing_corousel/", blank=True)
    pageId = models.ForeignKey('WebsiteMain', on_delete=models.CASCADE, related_name="landing_images")
