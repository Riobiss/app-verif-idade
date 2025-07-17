let btn = document.querySelector("#verificar");

btn.addEventListener("click", verificarTudo);

function verificarTudo() {
  let nascimento = document.querySelector("#txtano");
  let img = document.querySelector("#img");
  let data = new Date();
  let ano = data.getFullYear();
  let sex = document.getElementsByName("sx");
  let resposta = document.querySelector("#resposta");

  let anoNasc = Number(nascimento.value)
  let calc = ano - anoNasc;
  let genero = "";

  
  if (nascimento.value.length == 0 || anoNasc === ano || anoNasc < 1900) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
    return;
  }
  if (calc === ano){
    window.alert('[ERRO] Verifique os dados e tente novamente!')
    return;
  }

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
