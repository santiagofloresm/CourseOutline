# Generated by Django 3.1.5 on 2021-01-08 04:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('restapi', '0002_remove_learningoutcome_courseid'),
    ]

    operations = [
        migrations.AddField(
            model_name='learningoutcome',
            name='courseId',
            field=models.ForeignKey(default=123, on_delete=django.db.models.deletion.CASCADE, to='restapi.courseoutline'),
            preserve_default=False,
        ),
    ]