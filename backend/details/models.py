from django.db import models

# Create your models here.

class Student(models.Model):
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    skillSet = models.CharField(max_length=200)
    
    def __str__(self):
        return self.firstName + ' '+ self.lastName
    
    
    def list_skillSet(self):
        return [x for x in self.skillSet.split(',')] 