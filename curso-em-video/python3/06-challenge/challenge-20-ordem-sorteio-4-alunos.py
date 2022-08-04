# Um professor quer sortear a ordem de apresentação de trabalhos de 4 alunos.
# Faça um programa que leia o nome dos quatro alunos e mostre a ordem sorteada.

from random import shuffle

nome1 = str(input("Digite o nome do 1° aluno: "))
nome2 = str(input("Digite o nome do 2° aluno: "))
nome3 = str(input("Digite o nome do 3° aluno: "))
nome4 = str(input("Digite o nome do 4° aluno: "))

lista = [nome1, nome2, nome3, nome4]
shuffle(lista)

print("a ordem de apresentação e a seguinte\n\n{}".format(lista))

