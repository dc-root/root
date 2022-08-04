# Faça um programa que leia o comprimento do cateto oposto e
# do catetp adjacente de um  triângulo retângulo, calcule e mostre
# o comprimento da hpotenusa.
from math import hypot

catetoOposto = float(input("Digite o valor do cateto oposto: "))
catetoAdjacente = float(input("Digite o valor do cateto adjacente: "))

print("o valor da hipotenusa com cateto oposto igual a {} e adjacente igual a {} e de {:.2f}".format(catetoOposto, catetoAdjacente, hypot(catetoOposto, catetoAdjacente)))