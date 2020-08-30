from django.db import models


# Create your models here.

class Subscriber(models.Model):
    active = models.BooleanField(default=True)
    email_opt_out = models.BooleanField(default=False)
    receive_feeds = models.BooleanField(default=False)
    name = models.CharField(max_length=250, blank=True)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=250, blank=True)
    requested_contact = models.BooleanField(default=False)
    preferred_contact_method = models.CharField(
        max_length=3,
        choices=[('ph', "phone"), ('E', "email"), ],
        default='E'
    )
    source_subscribed = models.CharField(
        max_length=3,
        choices=[('Web', "Website footer"), ('Con', "Contact us"), ('Inv', "Invitation")],
        default='Web'
    )
    contacted = models.BooleanField(default=False)
    note_internal_use = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
