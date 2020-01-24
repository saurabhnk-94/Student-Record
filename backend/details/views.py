from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Student
from .serializer import StudentSerializer, StudentFormSerializer


@api_view(['GET'])
def student_details_all(request):
    student = Student.objects.all()
    if request.method == 'GET':
        serializer = StudentSerializer(student, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def particular_student_detail(request, id):
    try:
        student = Student.objects.get(id=id)
    except Student.DoesNotExist:
        return Response(status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = StudentSerializer(student)
        return Response(serializer.data)


@api_view(['POST'])
def create_student_form(request):
    """
    To create a new student record
    """
    if request.method == 'POST':
        serializer = StudentFormSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)


@api_view(['DELETE'])
def delete_student_detail(request, id):
    """
    To delete the student
    """
    try:
        student = Student.objects.get(id=id)
    except Student.DoesNotExist:
        return Response(status.HTTP_404_NOT_FOUND)
    if request.method == 'DELETE':
        student.delete()
        return Response(status.HTTP_200_OK)
        
        
        