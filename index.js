const notasDeALunos = require('./alunos');

const leia = require('prompt-sync')();

// npm i prompt-sync :digitar isso no termonal para baixar o pacote necessário para fazer o prompt


console.log("Digite uma opcao: \n [1] - Cadastrar Aluno \n [2] - Consulta aluno ");
let opcao = leia();

switch(opcao){

 case '1': 
  console.log("Digite seu nome: ");
  var nomeAluno = leia();

  console.log("Digite a sua nota: ");
  var notaAluno = parseFloat(leia());

  function cadastraAluno(aluno,ponto){
  notasDeALunos.push({nome:aluno,nota:ponto})
  }

  cadastraAluno(nomeAluno,notaAluno);
  console.log("Aluno(a) Cadasatrado com Sucesso !!")
  break;

 case '2':

  function exibeNomeENota(aluno) {
    for(i = 0; i < notasDeALunos.length; i++){

      if (notasDeALunos[i].nome == aluno ){
        const notaDoAluno = notasDeALunos[i].nota;
        console.log(`O aluno ${aluno} tem a nota ${notaDoAluno}.`);
      } if(i==notasDeALunos.length) {
        console.log("Aluno não encontrado!");
      }
    }
  }
  console.log("Digite o nome do aluno: ");
  var nomeAluno = leia();

  exibeNomeENota(nomeAluno);
  break;

  default:
    console.log(`Desculpe, mas não encontramos uma opçãaao correspondente a ${opcao}`);

}