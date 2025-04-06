window.addEventListener("DOMContentLoaded", function() {
    const tabela = [
        {nome_completo: "Ana",idade: 18,sexo: "F",salario: 1000},
        {nome_completo: "João",idade: 20,sexo: "M",salario: 3000},
        {nome_completo: "César",idade: 33,sexo: "M",salario: 1900},
        {nome_completo: "Maria",idade: 12,sexo: "F",salario: 7000},
        {nome_completo: "Zé",idade: 17,sexo: "M",salario: 2400}
      ];


exibirMaiorIdade = (vet) => {
  const maiores = vet.filter(pessoa => pessoa.idade >= 18) 
  const tabelaMaiores = [maiores.map(pessoa => `${pessoa.nome_completo}, ${pessoa.idade}`)];
  return tabelaMaiores;
};

exibirSexoM = (vet) => {
  const masculino = vet.filter(pessoa => pessoa.sexo == "M") 
  const tabelaMasculino = [masculino.map(pessoa => `${pessoa.nome_completo}`)];
  return tabelaMasculino;
};


exibirMaiorSalario = (vet) => {
  const pessoaMaiorSalario = vet.reduce((pessoaAnterior, pessoaAtual) => {
      return pessoaAtual.salario > pessoaAnterior.salario ? pessoaAtual : pessoaAnterior;
  });

  return `${pessoaMaiorSalario.nome_completo}, ${pessoaMaiorSalario.idade}, ${pessoaMaiorSalario.sexo}, ${pessoaMaiorSalario.salario}`;
};

existeMulherAcimaDe5000 = (vet) => {
  const mulherAcima5000 = vet.some(pessoa => pessoa.sexo === "F" && pessoa.salario > 5000);
  return mulherAcima5000;
};



calcularMediaSalario = (vet, sexo) => {
  const pessoasDoSexo = vet.filter(pessoa => pessoa.sexo === sexo);
  if (pessoasDoSexo.length > 0) {
      const somaSalarios = pessoasDoSexo.reduce((acc, pessoa) => acc + pessoa.salario, 0);
      return somaSalarios / pessoasDoSexo.length;
  } else {
      return 0; 
  }
  const mediaSalarioMulheres = calcularMediaSalario(tabela, "F");
  const mediaSalarioHomens = calcularMediaSalario(tabela, "M");

};


document.write(`<p>1) Exibir o nome e a idade de todas as pessoas maiores de idade = ${exibirMaiorIdade(tabela)}</p>`);
document.write(`<p>2) Exibir os nomes de todas as pessoas do sexo masculino = ${exibirSexoM(tabela)}</p>`);
document.write(`<p>3) Exibir os dados da pessoa com o maior salario = ${exibirMaiorSalario(tabela)}</p>`);
document.write(`<p>4) Há alguma mulher que ganha acima de 5000,00? = ${existeMulherAcimaDe5000(tabela)}</p>`);
document.write(`<p>5) Média dos salários dos homens e das mulheres = Mulheres: ${calcularMediaSalario(tabela, "F")} | Homens: ${calcularMediaSalario(tabela, "M")}</p>`);




});