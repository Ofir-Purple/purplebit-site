# from .models import 

from django.views.decorators.http import require_POST
from django.http.response import HttpResponse

@require_POST
def contact(request):
	"""
	Sends a contact email to the admin and saves the contact info
	in the DB.
	"""
	pass
