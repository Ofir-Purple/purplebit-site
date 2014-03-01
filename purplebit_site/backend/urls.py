from django.conf.urls import patterns, url, include
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('backend.views',)

# JSON API
urlpatterns += format_suffix_patterns(patterns('',
	url(r'contact/', views.contact, name="contact"),
))