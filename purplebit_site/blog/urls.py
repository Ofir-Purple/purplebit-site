
from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()


urlpatterns = patterns('',

    url(r'^', include('zinnia.urls')),
    # url(r'^comments/', include('django.contrib.comments.urls')),
)
