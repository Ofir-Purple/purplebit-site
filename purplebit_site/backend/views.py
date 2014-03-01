# from .models import 

from django.views.decorators.http import require_POST
from django.http.response import HttpResponse

from .models import ContactFormSubmission

@require_POST
def contact(request):
	"""
	Sends a contact email to the admin and saves the contact info
	in the DB.
	"""

	params = request.POST

	contact = ContactFormSubmission(
		name=params.get('contactName', ''),
		email=params.get('email', ''),
		message=params.get('comments', '')
	)

	contact.save()

	return HttpResponse('Okay')
