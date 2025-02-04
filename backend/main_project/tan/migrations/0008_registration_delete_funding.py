# Generated by Django 5.1.4 on 2025-01-21 09:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tan', '0007_rename_company_city_funding_city_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Registration',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=255)),
                ('company', models.CharField(max_length=255)),
                ('website', models.URLField()),
                ('logo', models.URLField()),
                ('company_linkedin_url', models.URLField()),
                ('twitter_url', models.URLField()),
                ('country', models.CharField(max_length=255)),
                ('city', models.CharField(max_length=255)),
                ('ticket_size', models.CharField(max_length=255)),
                ('current_fund_corpus', models.CharField(max_length=255)),
                ('total_fund_corpus', models.CharField(max_length=255)),
                ('stage', models.CharField(max_length=255)),
                ('sector', models.CharField(max_length=255)),
                ('company_overview', models.TextField()),
            ],
        ),
        migrations.DeleteModel(
            name='funding',
        ),
    ]
