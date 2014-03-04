from django.conf.urls import patterns, url, include
from . import views

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('backend.views',)

# JSON API
urlpatterns += patterns('',
	url(r'contact/', views.contact, name="contact"),
)