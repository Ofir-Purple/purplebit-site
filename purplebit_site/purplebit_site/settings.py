# Django settings for purplebit_site project.

import os, dj_database_url

DEBUG = (os.environ['PURPLEBIT_SITE_ENV_DEBUG'] == 'TRUE')
TEMPLATE_DEBUG = DEBUG

ADMINS = (
    ('Ofir Ovadia', 'ofir@purplebit.com'),
)

MANAGERS = ADMINS


SITE_ROOT = os.path.dirname(os.path.realpath(__file__))
SITE_NAME = "Purple Bit"


DATABASES = {'default': dj_database_url.config()}

# Hosts/domain names that are valid for this site; required if DEBUG is False
# See https://docs.djangoproject.com/en/1.5/ref/settings/#allowed-hosts
ALLOWED_HOSTS = [
    'purplebit-website-prod.herokuapp.com',
    'purplebit.com',
    'www.purplebit.com',
]

# Local time zone for this installation. Choices can be found here:
# http://en.wikipedia.org/wiki/List_of_tz_zones_by_name
# although not all choices may be available on all operating systems.
# In a Windows environment this must be set to your system time zone.
TIME_ZONE = 'UTC'

# Language code for this installation. All choices can be found here:
# http://www.i18nguy.com/unicode/language-identifiers.html
LANGUAGE_CODE = 'en-us'

SITE_ID = 1

# If you set this to False, Django will make some optimizations so as not
# to load the internationalization machinery.
USE_I18N = True

# If you set this to False, Django will not format dates, numbers and
# calendars according to the current locale.
USE_L10N = True

# If you set this to False, Django will not use timezone-aware datetimes.
USE_TZ = True

# Absolute filesystem path to the directory that will hold user-uploaded files.
# Example: "/var/www/example.com/media/"
MEDIA_ROOT = ''

# URL that handles the media served from MEDIA_ROOT. Make sure to use a
# trailing slash.
# Examples: "http://example.com/media/", "http://media.example.com/"
MEDIA_URL = '/uploads/'

# Absolute path to the directory static files should be collected to.
# Don't put anything in this directory yourself; store your static files
# in apps' "static/" subdirectories and in STATICFILES_DIRS.
# Example: "/var/www/example.com/static/"
STATIC_ROOT = ''

# URL prefix for static files.
# Example: "http://example.com/static/", "http://static.example.com/"
STATIC_URL = os.environ['PURPLEBIT_SITE_ENV_STATIC_URL']
ADMIN_MEDIA_PREFIX = STATIC_URL + 'admin/'


# Additional locations of static files
STATICFILES_DIRS = (
    # Put strings here, like "/home/html/static" or "C:/www/django/static".
    # Always use forward slashes, even on Windows.
    # Don't forget to use absolute paths, not relative paths.
)

# List of finder classes that know how to find static files in
# various locations.
STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
#    'django.contrib.staticfiles.finders.DefaultStorageFinder',
)

# Make this unique, and don't share it with anybody.
SECRET_KEY = os.environ['PURPLEBIT_SITE_ENV_SECRET_KEY']

# List of callables that know how to import templates from various sources.
TEMPLATE_LOADERS = (
    'django.template.loaders.filesystem.Loader',
    'django.template.loaders.app_directories.Loader',
    'app_namespace.Loader',
#     'django.template.loaders.eggs.Loader',
)

TEMPLATE_CONTEXT_PROCESSORS = (
    'django.contrib.auth.context_processors.auth',
    'django.core.context_processors.debug',
    'django.core.context_processors.i18n',
    'django.core.context_processors.media',
    'django.core.context_processors.request',
    'django.core.context_processors.static',

    'zinnia.context_processors.version', # Optional
)


MIDDLEWARE_CLASSES = (
    'django.middleware.common.CommonMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    # Uncomment the next line for simple clickjacking protection:
    # 'django.middleware.clickjacking.XFrameOptionsMiddleware',
)

ROOT_URLCONF = 'purplebit_site.urls'

# Python dotted path to the WSGI application used by Django's runserver.
WSGI_APPLICATION = 'purplebit_site.wsgi.application'

TEMPLATE_DIRS = (
    # Put strings here, like "/home/html/django_templates" or "C:/www/django/templates".
    # Always use forward slashes, even on Windows.
    # Don't forget to use absolute paths, not relative paths.

    os.path.join(os.path.dirname(__file__), 'purplebit_site_app/templates').replace('\\','/'),
)

INSTALLED_APPS = (
    'grappelli',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.sites',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # Uncomment the next line to enable the admin:
    'django.contrib.admin',
    # Uncomment the next line to enable admin documentation:
    # 'django.contrib.admindocs',

    'south',
    'gunicorn',


    'blog',

    # Zinnia
    'django.contrib.comments',
    'tagging',
    'mptt',
    'zinnia',


    'backend',
    'main_site',
)

ips = ["10.0.0.%d" %i for i in range(1, 256)]
ips.append('127.0.0.1')
ips.append('fitblok-local.com')
ips.append('192.168.56.101')
ips.append('192.168.56.1')
ips.append('fitblok-local.com')
INTERNAL_IPS = tuple(ips)

# A sample logging configuration. The only tangible logging
# performed by this configuration is to send an email to
# the site admins on every HTTP 500 error when DEBUG=False.
# See http://docs.djangoproject.com/en/dev/topics/logging for
# more details on how to customize your logging configuration.
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'filters': {
        'require_debug_false': {
            '()': 'django.utils.log.RequireDebugFalse'
        }
    },
    'handlers': {
        'mail_admins': {
            'level': 'ERROR',
            'filters': ['require_debug_false'],
            'class': 'django.utils.log.AdminEmailHandler'
        }
    },
    'loggers': {
        'django.request': {
            'handlers': ['mail_admins'],
            'level': 'ERROR',
            'propagate': True,
        },
    }
}

# P3P (for cross domain cookies in IE)
P3P_COMPACT = 'CP="NON DSP COR CURa TIA"'

SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')


# S3
# ##

DEFAULT_FILE_STORAGE = os.environ['PURPLEBIT_SITE_ENV_DEFAULT_FILE_STORAGE']
STATICFILES_STORAGE = os.environ['PURPLEBIT_SITE_ENV_STATICFILES_STORAGE']
AWS_ACCESS_KEY_ID = os.environ['PURPLEBIT_SITE_ENV_AWS_ACCESS_KEY_ID']
AWS_SECRET_ACCESS_KEY = os.environ['PURPLEBIT_SITE_ENV_AWS_SECRET_ACCESS_KEY']
AWS_STORAGE_BUCKET_NAME = os.environ['PURPLEBIT_SITE_ENV_AWS_STORAGE_BUCKET_NAME']
AWS_QUERYSTRING_AUTH = False

# Email
# #####

try:
    EMAIL_HOST = 'smtp.sendgrid.net'
    EMAIL_HOST_USER = 'app22642519@heroku.com' #os.environ['SENDGRID_USERNAME']
    EMAIL_HOST_PASSWORD = 'gp0yubcz' #os.environ['SENDGRID_PASSWORD']
    EMAIL_PORT = 587
    EMAIL_USE_TLS = True
except:
    pass

ADMIN_EMAIL_ADDRESS = 'contact@purplebit.com'
FROM_EMAIL_ADDRESS = 'website@purplebit.com'

# Blog
# ####

ZINNIA_AUTO_CLOSE_COMMENTS_AFTER = 0


# LANGUAGES = [
#     ('en', 'English'),
# ]
