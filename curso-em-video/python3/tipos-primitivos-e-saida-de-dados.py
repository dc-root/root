## Tipos primitivos básicos
# - int 7 -4 0 10000
# - float 4.5 0.075 -15.223 7.0
# - bool True False
# - str 'Olá' '7.5'

#### Testando em desafio 03
# numero1 = input('Primeiro número ')
# numero2 = input('Segundo número ')

# int() transoforma uma expreção em um numero inteiro
numero1 = int(input('Primeiro número '))
numero2 = int(input('Segundo número '))

# resultado da soma dos dois numeros e armazenado na variavel 'resultado'
resultado =  numero1 + numero2

print('A soma dos numeros e igual a', resultado)
print('O tipo de "reusultado" e igual a', type(resultado))

# Concatenação funciona somente entre duas strings
# print('A soma entre '+numero1+' e '+numero2+' é igual a', resultado)
# print('A soma entre {} e {} é igual a {}'.format(numero1, numero2, resultado))

# Forma simplificada com o metodo format() para strings
print('A soma entre {} e {} é igual a {}'.format(numero1, numero2, int(numero1)+int(numero2)))
string = 'Você acredita em alienígena{}'
print(string.format('?'))

# Metodos de conversão
string1 = bool('1')   # verifica se a string não e vazia, para o caso retorna 'False', caso contrario retorna 'True'
string2 = int('20')   # Transforma a string '20' em um numero inteiro 20 onde e atribuida a variavel string2
string3 = float('25') # Transforma a string '25' em um numero float 25.0 onde e atribuida a variavel string2
string4 = str(10)     # Transforma o numero 10 em uma string '10' que e atribuida a variavel string4
