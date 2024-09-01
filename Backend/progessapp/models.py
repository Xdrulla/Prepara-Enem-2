from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Subject(models.Model):
  name = models.CharField(max_length=100)
  
  def __str__(self):
    return self.name
  
class Module(models.Model):
  subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name='modules')
  title = models.CharField(max_length=200)
  description = models.TextField()
  order = models.PositiveIntegerField()
  
  def __str__(self):
    return f"{self.title} - {self.subject.name}"
  
class UserProgress(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  module = models.ForeignKey(Module, on_delete=models.CASCADE)
  completed_percentage = models.DecimalField(max_digits=5, decimal_places=2, default=0.00)
  last_accessed = models.DateTimeField(auto_now=True)
  
  def __str__(self):
    return f"{self.user.username} - {self.module.title} ({self.completed_percentage}%)"