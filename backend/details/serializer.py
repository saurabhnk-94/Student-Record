from rest_framework import serializers
from .models import Student

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('id','firstName', 'lastName', 'list_skillSet')
        
class StudentFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('firstName', 'lastName', 'skillSet')