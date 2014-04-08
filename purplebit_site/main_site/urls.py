from django.conf.urls import patterns, url
from django.views.generic import TemplateView

urlpatterns = patterns('',
    url(r'$^', TemplateView.as_view(template_name='main_site/index.html')),
    url(r'^p2014e/$', TemplateView.as_view(template_name='main_site/p2014e.html')),
)
