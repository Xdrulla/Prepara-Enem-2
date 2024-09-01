import os
import django

# Configura o ambiente Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Backend.settings')
django.setup()

from progessapp.models import Module, Content

def populate_number_operations_content():
    # Primeiro, localize o módulo correspondente
    module_title = 'Números e Operações'
    module = Module.objects.get(title=module_title)

    # Conteúdo relacionado ao módulo "Números e Operações"
    contents = [
        {
            'title': 'Introdução aos Tipos de Números',
            'text': '''
              Em matemática, os números são agrupados em diferentes categorias, chamadas de conjuntos numéricos. 
              Cada conjunto tem suas próprias características e propriedades, e entender essas diferenças é fundamental para resolver problemas matemáticos. 
              Vamos explorar cada um desses conjuntos:
            '''
        },
        {
            'title': 'Números Naturais (ℕ)',
            'text': '''
              Os números naturais são os primeiros números que aprendemos quando começamos a contar. 
              Eles começam a partir do zero e seguem infinitamente. 
              Esses números são usados para contar objetos, pessoas, e qualquer coisa que possamos quantificar.
              
              Exemplo: Imagine que você tem 3 maçãs. O número 3, que representa a quantidade de maçãs, é um número natural.
              Exemplos de números naturais: 0, 1, 2, 3, 4, 5, ...
              
              É importante notar que, embora alguns matemáticos considerem o zero como um número natural, em alguns contextos, o conjunto dos números naturais começa a partir de 1. 
              No entanto, para o ENEM, consideramos que os números naturais começam do zero.
            '''
        },
        {
            'title': 'Números Inteiros (ℤ)',
            'text': '''
              Os números inteiros expandem o conjunto dos números naturais para incluir números negativos. 
              Assim, além de poder contar para frente (como fazemos com os números naturais), também podemos contar para trás.

              Exemplo: Se você tem uma dívida de 3 reais, podemos representar isso como -3. Esse número negativo indica que você deve 3 reais.
              Exemplos de números inteiros: -3, -2, -1, 0, 1, 2, 3, ...

              Os números inteiros são úteis para representar situações onde há ganhos ou perdas, como temperaturas acima e abaixo de zero, ou saldos positivos e negativos em uma conta bancária.
            '''
        },
        {
            'title': 'Números Racionais (ℚ)',
            'text': '''
              Os números racionais incluem todos os números que podem ser expressos como a razão (fração) de dois números inteiros, onde o denominador (a parte de baixo da fração) não pode ser zero. 
              Esses números podem representar partes de um todo, como meio, um terço, etc.

              Exemplo: Se você comer metade de uma pizza, a fração que representa a parte que você comeu é 1/2.
              Exemplos de números racionais: 1/2, -3/4, 5, 0.75, 2/3...

              Os números racionais incluem tanto frações quanto números inteiros (pois qualquer número inteiro pode ser escrito como uma fração com denominador 1, por exemplo, 5 = 5/1). 
              Além disso, as casas decimais dos números racionais podem ser finitas (como 0.5) ou infinitas e periódicas (como 0.333...).
            '''
        },
        {
            'title': 'Números Irracionais',
            'text': '''
              Os números irracionais são aqueles que não podem ser expressos como uma fração simples de dois inteiros. 
              Eles têm uma representação decimal infinita, mas, ao contrário dos números racionais, essas casas decimais não formam um padrão repetitivo.

              Exemplo: O número π (pi), que é aproximadamente 3.14159..., é um exemplo de número irracional. 
              Não importa quantas casas decimais você escreva, nunca haverá um padrão que se repete indefinidamente.
              Exemplos de números irracionais: √2, π (pi), e (número de Euler), ...

              Os números irracionais aparecem frequentemente em situações que envolvem proporções geométricas, como o cálculo de circunferências e áreas de círculos.
            '''
        },
        {
            'title': 'Números Reais (ℝ)',
            'text': '''
              O conjunto dos números reais engloba todos os números que podem ser representados em uma reta numérica, combinando tanto os números racionais quanto os irracionais. 
              Essencialmente, qualquer número que pode ser localizado em uma reta numérica é um número real.

              Exemplo: Se você desenhar uma linha reta e marcar os números 1, 2, 3, -1, -2, 0.5, e π, todos esses números são reais e têm uma posição específica na linha.
              Exemplos de números reais: 0.75, -1.25, √2, π, ...

              Os números reais são fundamentais para a matemática, pois permitem trabalhar com medidas contínuas, como distâncias, áreas, e volumes.
            '''
        },
        {
            'title': 'Potenciação e Radiciação',
            'text': '''
              Além das operações básicas, existem operações mais avançadas que também são muito importantes: a potenciação e a radiciação.
              
              3.1 Potenciação

              Potenciação é a operação de elevar um número a uma potência, ou seja, multiplicá-lo por si mesmo um certo número de vezes. 
              O número que será multiplicado é chamado de base, e o número de vezes que ele será multiplicado é chamado de expoente.

              Exemplo: Se você tem 2³, isso significa que você multiplicará 2 por si mesmo 3 vezes: 2 × 2 × 2 = 8.

              Potenciação é uma ferramenta poderosa que nos permite lidar com grandes números de forma simplificada, especialmente em áreas como física, química e economia.
              
              3.2 Radiciação

              Radiciação é o processo inverso da potenciação. Ela envolve encontrar a raiz de um número, que é o valor que, quando multiplicado por si mesmo um certo número de vezes, resulta no número original.

              Exemplo: A raiz quadrada de 16 é 4, porque 4 × 4 = 16. Escrevemos isso como √16 = 4.

              A radiciação é amplamente usada em geometria, álgebra e em cálculos que envolvem proporções e escalas.
            '''
        },
        {
            'title': 'Exemplos Práticos e Exercícios',
            'text': '''
              Exemplo 1: Classificando Números

              Vamos praticar a classificação de números em seus respectivos conjuntos:

              a) O número 7 é um número natural (porque é usado para contar), inteiro (porque pode ser negativo, zero ou positivo), racional (porque pode ser expresso como 7/1), e real (porque pode ser localizado na reta numérica).
              b) O número -3 é um número inteiro (é negativo e não tem parte fracionária), racional (pode ser expresso como -3/1), e real.
              c) O número 0.25 é um número racional (pode ser escrito como a fração 1/4), e real.
              d) O número √2 é um número irracional (não pode ser escrito como uma fração simples), e real.

              Exemplo 2: Operações com Números

              Agora, vamos resolver algumas operações para praticar:

              Adição: 5+9=145+9=14
                Exemplo prático: Se você tem 5 canetas e ganha mais 9, ao todo você terá 14 canetas.

              Subtração: 10−4=610−4=6
                Exemplo prático: Se você tem 10 laranjas e come 4, restam 6 laranjas.

              Multiplicação: 6×7=426×7=42
                Exemplo prático: Se uma caixa contém 6 pacotes de biscoitos, e cada pacote tem 7 biscoitos, então ao todo você terá 42 biscoitos.

              Divisão: 20÷5=420÷5=4
                Exemplo prático: Se você tem 20 balas e quer dividir igualmente entre 5 amigos, cada amigo receberá 4 balas.

              Potenciação: 32=932=9
                Exemplo prático: 3232 significa 3 multiplicado por si mesmo duas vezes, resultando em 9.

              Radiciação: 25=525​=5

                Exemplo prático: A raiz quadrada de 25 é 5 porque 5×5=255×5=25.
            ''',
        },
    ]

    # Inserir cada conteúdo no banco de dados
    for content_data in contents:
        content, created = Content.objects.get_or_create(
            module=module, 
            title=content_data['title'], 
            text=content_data['text']
        )
        print(f"Content '{content.title}' inserted with text length: {len(content.text)}")

    print("Conteúdo de 'Números e Operações' inserido com sucesso!")

# Executa a função de inserção de conteúdo
if __name__ == '__main__':
    populate_number_operations_content()
