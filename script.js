let btn = document.querySelector("#verificar");

btn.addEventListener("click", verificarTudo);

function verificarTudo() {
  let masc = document.querySelector("#masc");
  let fem = document.querySelector("#fem");
  let nascimento = document.querySelector("#txtano");
  let img = document.querySelector("#img");
  let data = new Date();
  let ano = data.getFullYear();
  if (nascimento.value.length == 0 || nascimento.value > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  }
  let sex = document.getElementsByName("sx");
  let calc = ano - nascimento.value;
  let resposta = document.querySelector("#resposta");
  let genero = "";
  if (sex[0].checked) {
    genero = "Homem";
    if (calc >= 0 && calc < 12) {
      img.setAttribute("src", "./img/criancaM.png");
    }
    if (calc > 12 && calc < 18) {
      img.setAttribute("src", "./img/jovemM.png");
    }
    if (calc >= 18 && calc < 50) {
      img.setAttribute("src", "./img/adultoM.png");
    }
    if (calc >= 50) {
      img.setAttribute("src", "./img/idosoM.png");
    }
  } if (sex[1].checked) {
    genero = "Mulher";
    if (calc >= 0 && calc < 12) {
      img.setAttribute("src", "./img/criancaF.png");
    }
    if (calc > 12 && calc < 18) {
      img.setAttribute("src", "./img/jovemF.png");
    }
    if (calc >= 18 && calc < 50) {
      img.setAttribute("src", "./img/adultoF.png");
    }
    if (calc >= 50) {
      img.setAttribute("src", "./img/idosoF.png");
    }
  }
  resposta.innerHTML = `Detectado ${genero} com ${calc} anos.`;
}
