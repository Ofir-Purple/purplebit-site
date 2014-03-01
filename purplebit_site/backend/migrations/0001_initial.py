# -*- coding: utf-8 -*-
from south.utils import datetime_utils as datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'ContactFormSubmission'
        db.create_table(u'backend_contactformsubmission', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('added', self.gf('django.db.models.fields.DateTimeField')(default=datetime.datetime.now, db_index=True)),
            ('updated', self.gf('django.db.models.fields.DateTimeField')(default=datetime.datetime.now, db_index=True)),
            ('is_deleted', self.gf('django.db.models.fields.BooleanField')(default=False, db_index=True)),
            ('name', self.gf('django.db.models.fields.CharField')(max_length=300)),
            ('email', self.gf('django.db.models.fields.CharField')(max_length=300)),
            ('message', self.gf('django.db.models.fields.TextField')()),
        ))
        db.send_create_signal(u'backend', ['ContactFormSubmission'])


    def backwards(self, orm):
        # Deleting model 'ContactFormSubmission'
        db.delete_table(u'backend_contactformsubmission')


    models = {
        u'backend.contactformsubmission': {
            'Meta': {'object_name': 'ContactFormSubmission'},
            'added': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime.now', 'db_index': 'True'}),
            'email': ('django.db.models.fields.CharField', [], {'max_length': '300'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'is_deleted': ('django.db.models.fields.BooleanField', [], {'default': 'False', 'db_index': 'True'}),
            'message': ('django.db.models.fields.TextField', [], {}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '300'}),
            'updated': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime.now', 'db_index': 'True'})
        }
    }

    complete_apps = ['backend']