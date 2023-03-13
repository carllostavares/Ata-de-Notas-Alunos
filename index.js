const ataDeNotasDeALunos = require('./alunos');

const leia = require('prompt-sync')();

// npm contador prompt-sync :digitar isso no terminal para baixar o pacote necessário para fazer o prompt

do {
  console.log("\n\n=======================================================================================\n\n   Digite uma opcao: \n\n [1] - Cadastrar Aluno(a) e sua nota \n\n [2] - Consultar uma nota do aluno(a) \n\n [3] - Relatorio de notas dos alunos(as)\n\n [0] - SAIR DO PROGRAMA\n\n=======================================================================================\n\n");
  var opcao = parseFloat(leia('Opção: '));
  var contador = 0;
  switch(opcao){

  case 1: 
    console.log("\nDigite o nome do aluno(a):\n\n");
    var nomeAluno = leia('Nome:');
    var nomeMenusculo = nomeAluno.toLowerCase()
    var nomeComPrimeiraLetraMaiuscula = nomeMenusculo[0].toUpperCase() + nomeMenusculo.substring(1)


    console.log("\nDigite a sua nota:\n\n");
    var notaAluno = leia('Nota:');

    function cadastraAluno(aluno,ponto){
    ataDeNotasDeALunos.push({nome:aluno,nota:ponto})
    }

    cadastraAluno(nomeComPrimeiraLetraMaiuscula,notaAluno);
    console.log(`\n\nAluno(a) ${nomeComPrimeiraLetraMaiuscula} cadasatrado com Sucesso !!`)
  break;

  case 2:

  console.log("\nDigite o nome do(a) aluno(a):\n\n");
  var consultaAluno = leia('Nome:');
  var consultaNomeMenusculo = consultaAluno.toLowerCase()
  var consultaNomeComPrimeiraLetraMaiuscula = consultaNomeMenusculo[0].toUpperCase() + nomeMenusculo.substring(1)

  for(contador = 0; contador < ataDeNotasDeALunos.length; contador++){
  
    if(ataDeNotasDeALunos[contador].nome == consultaNomeComPrimeiraLetraMaiuscula ){
     const notaDoAluno = ataDeNotasDeALunos[contador].nota;
     console.log(`\nAluno(a) ${consultaNomeComPrimeiraLetraMaiuscula} tem a nota ${notaDoAluno}.`);
     contador = ataDeNotasDeALunos.length;
     } else {
      if(contador + 1  == ataDeNotasDeALunos.length) {
        console.log(`\n\nAluno(a) ${consultaNomeComPrimeiraLetraMaiuscula} não está cadastrado(a) !`)
       }
     }
  }
  break;

  case 3: 

    for(contador = 0; contador < ataDeNotasDeALunos.length; contador++){
    console.log(`\n\n- Aluno(a) ${ataDeNotasDeALunos[contador].nome} tem a nota ${ataDeNotasDeALunos[contador].nota}`)
      }

  break;

  case 0:
      console.log(" >>>>>>>>>>>>>>>>>>>> Programa encerrado ! <<<<<<<<<<<<<<<<<<<<\n >>>>>>>>>>>>>>>>>>>> Obrigado, e até mais !! <<<<<<<<<<<<<<<<<<<<");
  break;

  default:
      console.log(`\n\n=======================================================================================\n\n   Desculpe, mas não encontramos uma opção correspondente ao número ${opcao} digitado.\n\n=======================================================================================\n\n                               Tente novamente !\n ####################################################################################`)
  
      break;
    }
}while(opcao !== 0);


