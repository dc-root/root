# Crie um programa que leia quanto dinheiro uma pessoa tem na carteira
# e mostre quantos Dólares ela pode comprar.

real = float(input('Quanto dinheiro você tem(R$)? '))
print('Com isso hoje você consegue comprar: \n\nUS${:.3f}\n€{:.3}\n¥{:.3}'.format((real/5.48), (real/5.37), (real/25.33)))