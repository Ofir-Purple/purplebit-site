from django.db import models

from utils_app.models import TimestampedModel, DeleteStatusModel

class ContactFormSubmission(TimestampedModel, DeleteStatusModel):

    name = models.CharField(help_text='Submitter name', max_length=300)
    email = models.CharField(help_text='Email to return to', max_length=300)
    message = models.TextField(help_text='The message text')
