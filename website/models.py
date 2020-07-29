from django.db import models


# Create your models here.
class WebsiteMain(models.Model):
    backgroundImg = models.FileField(upload_to="website_main/")
