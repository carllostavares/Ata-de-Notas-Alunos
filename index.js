const alunos = require('./alunos')

/* const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9]; */

/* const listaDeAlunosEMedias = [alunos, medias]; */

/* function exibeNomeENota(aluno) {
  if (alunos[0].includes(aluno)) {
    const [alunos, medias] = listaDeAlunosEMedias;

    const indice = alunos.indexOf(aluno);

    const mediaDoAluno = medias[indice];

    console.log(`${aluno} tem a média ${mediaDoAluno}.`);
  } else {
    console.log("Aluno não encontrado!");
  }
}
exibeNomeENota("Ana"); */

alunos.push({nome:'Carlos', nota:6});

console.log(alunos)
