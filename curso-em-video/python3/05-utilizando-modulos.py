# import math #importando o modulo 'math' para cálculo matemático
from math import sqrt, floor # importa de dentro do modulo math o metodo sqrt

num = int(input("Digite um número inteiro: "))
# raiz = math.sqrt(num)
raiz = sqrt(num)

# print("A raiz de {} é {}".format(num, math.floor(raiz)))
print("A raiz de {} é {:.2f}".format(num, floor(raiz)))

import random # importando o modulo 'random' para trabalhar com numeros aleatórios

print(random.random()) # numero  aleatório
print(random.randint(1, 10)) # numero inteiro de 1 a 10