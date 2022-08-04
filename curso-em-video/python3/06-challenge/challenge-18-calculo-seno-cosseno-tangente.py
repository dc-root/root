# Faça um programa que leia um ângulo qualquer e mostre na tela
# o valor de seno, cosseno e tangente desse ângulo
from math import cos, sin, tan

angulo = int(input("Digite o valor de um ângulo: "))

print("O valor do seno desse angulo e de: {:.2f}".format(sin(angulo)))
print("O valor do cosseno desse angulo e de: {:.2f}".format(cos(angulo)))
print("O valor da tangente desse angulo e de: {:.2f}".format(tan(angulo)))