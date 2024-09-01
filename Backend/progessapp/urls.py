from django.urls import path
from . import views

urlpatterns = [
    path('subjects/', views.SubjectListView.as_view(), name='subject-list'),
    path('subjects/<int:subject_id>/modules/', views.ModuleListView.as_view(), name='module-list'),
    path('modules/<int:module_id>/progress/', views.UpdateProgressView.as_view(), name='update-progress'),
]
