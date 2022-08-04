# Faça um algoritimo que leia o salário de um funcionário calcule e mostre
# o novo salario com 15% de aumento

salario = float(input('Salario do funcionario: '))
novoSalario = salario + (salario*0.15)

print('O funcionario com 15% de acrescimo a seu salario agora recebe R${:.2f}'.format(novoSalario))