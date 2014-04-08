import json

from django.views.decorators.http import require_POST
from django.http.response import HttpResponse
from django.conf import settings
from django.core.mail import send_mail

from .models import ContactFormSubmission


@require_POST
def contact(request):
    """
    Sends a contact email to the admin and saves the contact info
    in the DB.
    """
    email_subject = 'A Contact Us request from purplebit.com'

    # change email subject if this contact related to PyCon
    if request.path.find('pycon'):
        email_subject = 'A friend from PyCon contacted us via purplebit.com!'

    params = json.loads(request.body)

    name = params.get('name', '')
    email = params.get('email', '')
    message = params.get('message', '')

    contact = ContactFormSubmission(
        name=name,
        email=email,
        message=message
    )
    contact.save()

    send_mail(
        email_subject,
        """We received a contact us request on purplebit.com:

Name: %(name)s
Email: %(email)s
Message: %(message)s
        """ % dict({
            'name' : name,
            'email' : email,
            'message' : message,
            }),
        settings.FROM_EMAIL_ADDRESS,
        [settings.ADMIN_EMAIL_ADDRESS,], fail_silently=False)

    return HttpResponse('Okay')
