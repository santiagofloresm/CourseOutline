# Generated by Django 3.1.4 on 2020-12-09 21:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('restapi', '0002_echo_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='echo',
            name='name',
        ),
    ]
