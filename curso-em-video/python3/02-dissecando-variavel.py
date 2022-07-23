# Faça um programa que leia algo pelo teclado e mostre na tela o seu tipo primitivo
# e todas as informações possíveis sobre ele.

valor = input('Digite qualquer coisa: ')

print('Tipo: ', type(valor))
print('Faz parte da tabela ASCII? {}'.format(("SIM" if valor.isascii() else "NÃO")))
print('Esta somente no conjunto de letras alfabeticas? {}'.format(("SIM" if valor.isalpha() else "NÃO")))
print('Contem somente alfanumericos(Letra e numeros)? {}'.format(("SIM" if valor.isalnum() else "NÃO")))
print('E um algum tipo de espaço? {}'.format(("SIM" if valor.isspace() else "NÃO")))
print('E um digito de 0-9? {}'.format(("SIM" if valor.isdigit() else "NÃO")))
print('E somente um numero decimal? {}'.format(("SIM" if valor.isdecimal() else "NÃO")))
print('E somente um numero? {}'.format(("SIM" if valor.isnumeric() else "NÃO")))
print('Esta somente em caixa alta? {}'.format(("SIM" if valor.isupper() else "NÃO")))
print('Esta somente em caixa baixa? {}'.format(("SIM" if valor.islower() else "NÃO")))
print('Pode ser apresentado na tela? {}'.format(("SIM" if valor.isprintable() else "NÃO")))
print('Esta captalizada(primeira letra em caixa alta e o restante em caixa baixa)? {}'.format(("SIM" if valor.istitle() else "NÃO")))