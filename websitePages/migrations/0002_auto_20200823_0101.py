# Generated by Django 2.2.13 on 2020-08-23 01:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('websitePages', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='websitePages',
            field=models.OneToOneField(default=1, on_delete=django.db.models.deletion.CASCADE, to='websitePages.WebsitePages'),
            preserve_default=False,
        ),
    ]