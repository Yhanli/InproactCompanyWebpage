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


class Team(models.Model):
    aboutus = models.OneToOneField(AboutUs, on_delete=models.CASCADE, blank=True, null=True)

    cover_image = models.FileField(upload_to="sidepages/aboutus/team", blank=True)
    button_name = models.CharField(max_length=1000, default=None, blank=True, null=True)

    # main_section_heading = models.CharField(max_length=1000, default=None, blank=True, null=True)
    # main_section_paragraph = models.TextField(default=None, blank=True, null=True)

    section1_image = models.FileField(upload_to="sidepages/aboutus/team", blank=True)
    section1_heading_1 = models.CharField(max_length=1000, blank=True)
    section1_paragraph_1 = models.TextField(default=None, blank=True, null=True)
    section1_subparagraph_1 = models.TextField(default=None, blank=True, null=True)
    section1_subparagraph_2 = models.TextField(default=None, blank=True, null=True)
    section1_subparagraph_3 = models.TextField(default=None, blank=True, null=True)
    section1_quote_1 = models.TextField(default=None, blank=True, null=True)

    section2_image = models.FileField(upload_to="sidepages/aboutus/team", blank=True)
    section2_heading_1 = models.CharField(max_length=1000, blank=True)
    section2_paragraph_1 = models.TextField(default=None, blank=True, null=True)
    section2_subparagraph_1 = models.TextField(default=None, blank=True, null=True)
    section2_subparagraph_2 = models.TextField(default=None, blank=True, null=True)
    section2_subparagraph_3 = models.TextField(default=None, blank=True, null=True)
    section2_quote_1 = models.TextField(default=None, blank=True, null=True)


class Services(models.Model):
    aboutus = models.OneToOneField(AboutUs, on_delete=models.CASCADE, blank=True, null=True)

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

class WhyUs(models.Model):
    aboutus = models.OneToOneField(AboutUs, on_delete=models.CASCADE, blank=True, null=True)

    cover_image = models.FileField(upload_to="sidepages/aboutus/whyus", blank=True)
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