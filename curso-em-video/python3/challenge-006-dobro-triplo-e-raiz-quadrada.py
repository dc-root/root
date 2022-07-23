# Crie um algoritimo que leia um número e mostre o seu dobro, triplo e a raiz quadrada

number = int(input('Digite um numero: '))

print('O dobro do numero digitado e {}\no triplo do número digitado e igual a {}\na raiz quadrada do numero digitado e igual a {:.3f}'.format(number*2, number*3, number**(1/2)))