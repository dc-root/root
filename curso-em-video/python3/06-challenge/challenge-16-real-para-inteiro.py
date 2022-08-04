# Crie um programa que leia um número Real qualquer pelo teclado e
# mostre na tela a sua porção inteira.

from math import ceil

real = float(input("Digite um número real: "))
print("O número {} tem parte inteira {}".format(real, ceil(real)))