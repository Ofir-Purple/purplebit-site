# from .models import 

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

    params = request.POST

    name = params.get('contactName', '')
    email = params.get('email', '')
    message = params.get('comments', '')

    contact = ContactFormSubmission(
        name=name,
        email=email,
        message=message
    )

    contact.save()

    send_mail(
        'A Contact Us request from purplebit.com',
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
