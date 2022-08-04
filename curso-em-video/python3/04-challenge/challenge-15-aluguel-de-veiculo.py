# Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado
# e a quantidade de dias pelos quais ele foi alugado. Calcule o preço a pagar sabendo
# que o carro custa R$60 por dia e R$0.15 por km rodado.

dias = int(input("Por quantos dias o carro ficou alugado: "))
km = float(input("Digite a quantidade de km/h percorrido: "))

precoAPagar = float((dias*60) + (km*0.15))

print("O cliente ira pagar R${:.2f} de aluguel".format(precoAPagar))