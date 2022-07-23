# Crie um programa que leia quanto dinheiro uma pessoa tem na carteira
# e mostre quantos Dólares ela pode comprar.

real = float(input('Quanto dinheiro você tem(R$)? '))
print('Com isso hoje você consegue comprar ${:.3f}'.format(real / 5.48))