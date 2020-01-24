from django.contrib import admin
from .models import Student

# Register your models here.

class StudentAdmin(admin.ModelAdmin):
    list_display = ('firstName', 'lastName', 'list_skillSet')
    ordering=('firstName',)
    search_fields = ['firstName', 'lastName' , 'skillSet']
    
    
admin.site.register(Student, StudentAdmin)