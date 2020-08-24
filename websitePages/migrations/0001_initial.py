# Generated by Django 2.2.13 on 2020-08-23 00:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='WebsitePages',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'verbose_name': 'WebsitePages',
                'verbose_name_plural': 'WebsitePages',
            },
        ),
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cover_image', models.FileField(blank=True, upload_to='sidepages/aboutus/services')),
                ('button_name', models.CharField(blank=True, default=None, max_length=1000, null=True)),
                ('websitePages', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='websitePages.WebsitePages')),
            ],
            options={
                'verbose_name': 'Contact',
                'verbose_name_plural': 'Contact',
            },
        ),
    ]