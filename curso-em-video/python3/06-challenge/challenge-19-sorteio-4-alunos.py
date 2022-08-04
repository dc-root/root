# um professor quer sortear um dos seus quatro alunos para apagar o quadro.
# Faça um programa que ajud ele, lendo o nome deles e escrevendo o nom escolhido

from random import choice

nome1 = str(input("Digite o nome do 1° aluno: "))
nome2 = str(input("Digite o nome do 2° aluno: "))
nome3 = str(input("Digite o nome do 3° aluno: "))
nome4 = str(input("Digite o nome do 4° aluno: "))

nomeSorteado = choice([nome1, nome2, nome3, nome4])
print("O aluno sorteado e o {}".format(nomeSorteado))