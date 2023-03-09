const notasDeALunos = require('./alunos');

const leia = require('prompt-sync')();

// npm i prompt-sync :digitar isso no termonal para baixar o pacote necessário para fazer o prompt

do {
  console.log("\n\n=======================================================================================\n\n   Digite uma opcao: \n\n [1] - Cadastrar Aluno(a) e sua nota \n\n [2] - Consultar uma nota do aluno(a) \n\n [3] - Relatorio de notas dos alunos(as)\n\n [0] - SAIR DO PROGRAMA\n\n=======================================================================================\n\n");
  var opcao = parseFloat(leia('Opção: '));


  switch(opcao){

  case 1: 
    console.log("Digite o nome do aluno: ");
    var nomeAluno = leia();

    console.log("Digite a sua nota: ");
    var notaAluno = leia();

    function cadastraAluno(aluno,ponto){
    notasDeALunos.push({nome:aluno,nota:ponto})
    }

    cadastraAluno(nomeAluno,notaAluno);
    console.log("Aluno(a) Cadasatrado com Sucesso !!")
  break;

  case 2:

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

  case 3: 

    for(i = 0; i < notasDeALunos.length; i++){
    console.log(`- O aluno(a) ${notasDeALunos[i].nome} tem a nota ${notasDeALunos[i].nota}`)
      }

  break;

  default:
      console.log(`\n\n=======================================================================================\n\n   Desculpe, mas não encontramos uma opção correspondente ao número ${opcao} digitado.\n\n=======================================================================================\n\n                               Tente novamente !`)
  
      break;
    }
}while(opcao !== 0);