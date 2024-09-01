from django.views import View
from django.http import JsonResponse
from .models import Subject, Module

class SubjectListView(View):
    def get(self, request):
        subjects = Subject.objects.all()
        data = [{"id": subject.id, "name": subject.name} for subject in subjects]
        return JsonResponse(data, safe=False)

class ModuleListView(View):
    def get(self, request, subject_id):
        modules = Module.objects.filter(subject_id=subject_id)
        data = [{"id": module.id, "title": module.title, "description": module.description, "progress": module.progress} for module in modules]
        return JsonResponse(data, safe=False)

class UpdateProgressView(View):
    def post(self, request, module_id):
        module = Module.objects.get(id=module_id)
        data = json.loads(request.body)
        module.progress = data.get('progress', module.progress)
        module.save()
        return JsonResponse({"success": True})
