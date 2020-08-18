# Generated by Django 2.2.13 on 2020-08-17 23:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('aboutus', '0017_auto_20200817_2315'),
    ]

    operations = [
        migrations.CreateModel(
            name='WhyUsSubItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('heading', models.CharField(blank=True, max_length=1000)),
                ('paragraph', models.TextField(blank=True)),
                ('whyusId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='landing_images', to='aboutus.WhyUs')),
            ],
        ),
        migrations.AddField(
            model_name='whyus',
            name='whyus_subitem',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='aboutus.WhyUsSubItem'),
        ),
    ]
