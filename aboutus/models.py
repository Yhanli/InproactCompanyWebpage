from django.db import models

# Create your models here.


class AboutUs(models.Model):
    name = models.CharField(max_length=100)
    logo = models.FileField(upload_to="aboutus/")

