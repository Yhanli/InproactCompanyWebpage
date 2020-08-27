# Generated by Django 2.2.13 on 2020-08-27 10:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0002_post_active'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='post_type',
            field=models.CharField(choices=[('Ftd', 'Featured Post'), ('Suc', 'Success Post'), ('Col', 'Collaboration Post'), ('Sha', 'Share Post'), ('Edu', 'Educational Post'), ('Bus', 'Business Post'), ('Oth', 'Other Post')], default='Oth', max_length=3),
        ),
    ]
