from django.conf.urls import patterns, url
from django.views.generic import TemplateView

urlpatterns = patterns('',
    url(r'$^', TemplateView.as_view(template_name='main_site/index.html')),
    url(r'^p4e/$', TemplateView.as_view(template_name='main_site/p4e.html')),
    url(r'^p4o/$', TemplateView.as_view(template_name='main_site/p4o.html')),
)
