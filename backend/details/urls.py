from django.urls import path

from .views import student_details_all, particular_student_detail, create_student_form,delete_student_detail


urlpatterns = [
    path('students', student_details_all, name='student'),
    path('students/<int:id>', particular_student_detail, name='student-object'),
    path('students/create', create_student_form, name="student-creation"),
    path('students/delete/<int:id>', delete_student_detail, name="delete-student"),
    
]
