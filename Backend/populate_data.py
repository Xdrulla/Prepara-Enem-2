import os
import django

# Configure o ambiente Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Backend.settings')
django.setup()

from progessapp.models import Subject, Module

def populate_data():
    # Defina as matérias e seus módulos
    subjects_and_modules = {
    'Matemática': [
        {'title': 'Números e Operações', 'description': 'Números naturais, inteiros, racionais, irracionais e reais. Operações básicas, potenciação e radiciação.'},
        {'title': 'Conjuntos Numéricos', 'description': 'Operações com conjuntos e propriedades dos conjuntos numéricos.'},
        {'title': 'Funções', 'description': 'Estudo de funções: linear, afim, quadrática, exponencial e logarítmica.'},
        {'title': 'Progressões', 'description': 'Progressão aritmética e geométrica.'},
        {'title': 'Geometria Plana', 'description': 'Cálculo de áreas, perímetros e ângulos em figuras planas.'},
        {'title': 'Geometria Espacial', 'description': 'Volume e área superficial de sólidos geométricos.'},
        {'title': 'Trigonometria', 'description': 'Razões trigonométricas e aplicações em triângulos.'},
        {'title': 'Matemática Financeira', 'description': 'Juros simples e compostos, e cálculos financeiros.'},
        {'title': 'Análise Combinatória e Probabilidade', 'description': 'Princípios de contagem e probabilidade básica.'},
        {'title': 'Estatística', 'description': 'Análise de dados, medidas de tendência central e dispersão.'},
        {'title': 'Logaritmos', 'description': 'Propriedades e aplicações dos logaritmos.'},
        {'title': 'Matrizes, Determinantes e Sistemas Lineares', 'description': 'Operações com matrizes e resolução de sistemas lineares.'},
        {'title': 'Números Complexos', 'description': 'Operações com números complexos e suas representações.'},
    ],
  }

    # Loop através das matérias e módulos para adicionar ao banco de dados
    for subject_name, modules in subjects_and_modules.items():
        # Crie ou obtenha a matéria
        subject, created = Subject.objects.get_or_create(name=subject_name)
        
        # Adicione os módulos à matéria
        for module_data in modules:
            Module.objects.get_or_create(subject=subject, title=module_data['title'], description=module_data['description'])

    print("Dados inseridos com sucesso!")

# Executa a função de inserção de dados
if __name__ == '__main__':
    populate_data()
