# Generated by Django 2.2.13 on 2020-08-26 00:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('websitePages', '0011_auto_20200826_0056'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contactustickboxitems',
            name='question',
            field=models.TextField(),
        ),
    ]