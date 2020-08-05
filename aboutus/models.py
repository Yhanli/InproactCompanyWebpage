from django.db import models


# Create your models here.


class AboutUs(models.Model):
    active_content = models.BooleanField(default=False)
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


class Story(models.Model):
    aboutus = models.OneToOneField(AboutUs, on_delete=models.CASCADE, blank=True, null=True)
    cover_image = models.FileField(upload_to="sidepages/aboutus/story", blank=True)
    button_name = models.CharField(max_length=1000, default=None, blank=True, null=True)

    main_section_heading = models.CharField(max_length=1000, default=None, blank=True, null=True)
    main_section_paragraph = models.TextField(default=None, blank=True, null=True)

    section1_image = models.FileField(upload_to="sidepages/aboutus/story", blank=True)
    section1_heading_1 = models.CharField(max_length=1000, blank=True)
    section1_paragraph_1 = models.TextField(default=None, blank=True, null=True)
    section1_subparagraph_1 = models.TextField(default=None, blank=True, null=True)
    section1_subparagraph_2 = models.TextField(default=None, blank=True, null=True)
    section1_subparagraph_3 = models.TextField(default=None, blank=True, null=True)
    section1_quote_1 = models.TextField(default=None, blank=True, null=True)


    section2_image = models.FileField(upload_to="sidepages/aboutus/story", blank=True)
    section2_heading_1 = models.CharField(max_length=1000, blank=True)
    section2_paragraph_1 = models.TextField(default=None, blank=True, null=True)
    section2_subparagraph_1 = models.TextField(default=None, blank=True, null=True)
    section2_subparagraph_2 = models.TextField(default=None, blank=True, null=True)
    section2_subparagraph_3 = models.TextField(default=None, blank=True, null=True)
    section2_quote_1 = models.TextField(default=None, blank=True, null=True)