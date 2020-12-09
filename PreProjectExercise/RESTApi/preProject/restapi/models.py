from django.db import models


# Create your models here.

class Echo(models.Model):
    message = models.CharField(max_length=60)

    def __str__(self):
        return self.message
