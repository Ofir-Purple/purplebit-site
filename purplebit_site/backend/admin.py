from django.contrib import admin
from .models import *

class ContactFormSubmissionAdmin(admin.ModelAdmin):

	list_display = ['name', 'email', 'added', 'message_snippet']

	def message_snippet(self, obj):
		return obj.message[:200]
	message_snippet.short_description = 'Message'

admin.site.register(ContactFormSubmission, ContactFormSubmissionAdmin)
