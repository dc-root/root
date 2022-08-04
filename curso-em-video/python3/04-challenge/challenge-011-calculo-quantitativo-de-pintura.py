# Faça um programa que leia qual o tamanho e a largura de uma parede em metros,
# calcule e mostre a sua área e a quantidade de tinta necessária para pintá-la,
# sabendo que cada litro de tinta, pinta uma área de 2m²

altura = float(input('Altura da parede: '))
largura = float(input('Largura da parede: '))

area = largura * altura
Litros = area/2

print('Para pintar uma parede de {}m² são necessários {}L de tinta'.format(area,Litros))