from django.db import models


# Create your models here.


class Post(models.Model):
    active  = models.BooleanField(default=True)
    cover_image = models.FileField(upload_to="posts/", blank=True)
    title = models.CharField(max_length=1000)
    content = models.TextField(blank=True)
    end_note = models.TextField(blank=True)
    disclaimer = models.TextField(blank=True)

    post_type = models.CharField(
        max_length=1,
        choices=[
            ('Ftd', "Featured Post"),
            ('Suc', "Success Post"),
            ('Col', "Collaboration Post"),
            ('Sha', "Share Post"),
            ('Edu', "Educational Post"),
            ('Bus', "Business Post"),
            ('Oth', "Other Post"),
        ],
        default='Oth'
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
