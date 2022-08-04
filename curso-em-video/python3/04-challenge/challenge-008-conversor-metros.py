# Escreva um programa que leia um valor em metros e o exiba convertido em centimetros e milímetros

metros = float(input('Digite um valor em emtros(m): '))

centimetros = metros * 100
milimetros = metros * 1000

print('{:.3f}m são iguais a {:.3f}cm e {:.3f}mm'.format(metros, centimetros, milimetros))
