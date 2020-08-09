from django.db import models


# Create your models here.


class WebsiteMain(models.Model):
    cover_image = models.FileField(upload_to="website_main/", blank=True)

    active_content = models.BooleanField(default=False)
    site_name = models.CharField(max_length=1000, blank=True)
    logo = models.FileField(upload_to="website_main/")
    footer_title = models.CharField(max_length=1000)
    footer_phrase = models.TextField(blank=True)
    favicon = models.FileField(upload_to="website_main/")
    facebook = models.CharField(max_length=1000, blank=True)
    instagram = models.CharField(max_length=1000, blank=True)
    twitter = models.CharField(max_length=1000, blank=True)
    youtube = models.CharField(max_length=1000, blank=True)
    linkedin = models.CharField(max_length=1000, blank=True)
    # landing_images = models.ForeignKey("LandingPictures", on_delete=models.CASCADE, blank=True)



    section_1_activate = models.BooleanField(default=True)
    section_1_heading1 = models.CharField(max_length=1000, blank=True)
    section_1_subheading1 = models.TextField(blank=True)
    section_1_paragraph1 = models.TextField(blank=True)
    section_1_heading2 = models.CharField(max_length=1000, blank=True)
    section_1_subheading2 = models.TextField(blank=True)
    section_1_paragraph2 = models.TextField(blank=True)
    section_1_picture = models.ImageField(upload_to="website_main/", blank=True)

    section_1_stat_title1 = models.CharField(max_length=1000, blank=True)
    section_1_stat_number1 = models.IntegerField(blank=True, default=0)
    section_1_stat_caption1 = models.TextField(blank=True)
    section_1_stat_title2 = models.CharField(max_length=1000, blank=True)
    section_1_stat_number2 = models.IntegerField(blank=True, default=0)
    section_1_stat_caption2 = models.CharField(max_length=1000, blank=True)
    section_1_stat_title3 = models.CharField(max_length=1000, blank=True)
    section_1_stat_number3 = models.IntegerField(blank=True, default=0)
    section_1_stat_caption3 = models.CharField(max_length=1000, blank=True)


    section_2_activate = models.BooleanField(default=True)
    section_2_heading1 = models.CharField(max_length=1000, blank=True)
    section_2_subheading1 = models.TextField(blank=True)
    section_2_paragraph1 = models.TextField(blank=True)
    section_2_heading2 = models.CharField(max_length=1000, blank=True)
    section_2_subheading2 = models.TextField(blank=True)
    section_2_paragraph2 = models.TextField(blank=True)
    section_2_picture = models.ImageField(upload_to="website_main/", blank=True)

    section_3_activate = models.BooleanField(default=True)
    section_3_heading1 = models.CharField(max_length=1000, blank=True)
    section_3_subheading1 = models.TextField(blank=True)
    section_3_paragraph1 = models.TextField(blank=True)
    section_3_heading2 = models.CharField(max_length=1000, blank=True)
    section_3_subheading2 = models.TextField(blank=True)
    section_3_paragraph2 = models.TextField(blank=True)
    section_3_picture = models.ImageField(upload_to="website_main/", blank=True)

    #
    # section_1_2_divider = models.CharField(max_length=1000, blank=True)
    #
    # section_2_picture = models.ImageField(upload_to="website_main/", blank=True)
    #
    # section_2_text_1_title = models.CharField(max_length=1000, blank=True)
    # section_2_text_1_paragraph = models.TextField(blank=True)
    #
    # section_2_text_2_title = models.CharField(max_length=1000, blank=True)
    # section_2_text_2_paragraph = models.TextField(blank=True)
    #
    # section_2_text_3_title = models.CharField(max_length=1000, blank=True)
    # section_2_text_3_paragraph = models.TextField(blank=True)
    #
    # section_2_text_4_title = models.CharField(max_length=1000, blank=True)
    # section_2_text_4_paragraph = models.TextField(blank=True)

class LandingPictures(models.Model):
    picture = models.ImageField(upload_to="website_main/landing_corousel/", blank=True)
    pageId = models.ForeignKey('WebsiteMain', on_delete=models.CASCADE, related_name="landing_images")
