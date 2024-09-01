from django.views import View
from django.http import JsonResponse
from django.contrib.auth.models import User
from .models import Subject, Module, UserProgress
import json

class SubjectListView(View):
    def get(self, request):
        subjects = Subject.objects.all()
        data = [{"id": subject.id, "name": subject.name} for subject in subjects]
        return JsonResponse(data, safe=False)

class ModuleListView(View):
    def get(self, request, subject_id):
        modules = Module.objects.filter(subject_id=subject_id)
        data = [
            {
                "id": module.id,
                "title": module.title,
                "description": module.description,
                "progress": self.get_user_progress(request.user, module)
            } 
            for module in modules
        ]
        return JsonResponse(data, safe=False)
    
    def get_user_progress(self, user, module):
        progress = UserProgress.objects.filter(user=user, module=module).first()
        return progress.completed_percentage if progress else 0

class UpdateProgressView(View):
    def post(self, request, module_id):
        module = Module.objects.get(id=module_id)
        data = json.loads(request.body)
        new_progress = data.get('progress')

        user_progress, created = UserProgress.objects.get_or_create(
            user=request.user, module=module,
            defaults={'completed_percentage': new_progress}
        )
        if not created:
            user_progress.completed_percentage = new_progress
            user_progress.save()

        return JsonResponse({"success": True})
