const botaoCodificar = document.getElementsByClassName("button-um")[0];
const botaoDecodificar = document.getElementsByClassName("button-dois")[0];
const texto = document.getElementsByClassName("texto__cru")[0];
const imagem = document.getElementsByClassName("img__decodificador")[0];
const textoDecodificado = document.getElementsByClassName("texto__decodificado")[0];
const botaoCopiar = document.getElementsByClassName("button-tres")[0];



function mostrarTextoCriptografado(){
  if(texto.value == '' || !verificaTexto(texto.value)){
    alert('Digite um texto para ser codificado');
    imagem.classList.remove("disabled");
    textoDecodificado.classList.add("disabled");
    botaoCopiar.classList.add("disabled");
    return;
  }else{
    imagem.classList.add("disabled");
    textoDecodificado.classList.remove("disabled");
    textoDecodificado.innerText = criptografarTexto();
    botaoCopiar.classList.remove("disabled");
  } 
}

function mostrarTextoDescriptografado(){
  if(texto.value == ''){
    alert('Digite um texto para ser decodificado');
    imagem.classList.remove("disabled");
    textoDecodificado.classList.add("disabled");
    botaoCopiar.classList.add("disabled");
    return;
  }else{
    textoDecodificado.innerText = descriptografarTexto(texto.value);
  }
}

function copiarTexto() {
  navigator.clipboard.writeText(textoDecodificado.innerText)
      .then(() => {})
      .catch(() => {});
}

function descriptografarTexto(textoCifrado) {
  const substituicoes = {
    enter: 'e',
    imes: 'i',
    ai: 'a',
    ober: 'o',
    ufat: 'u'
  };

  let textoDescriptografado = textoCifrado;
  for (const chave in substituicoes) {
    textoDescriptografado = textoDescriptografado.replaceAll(chave, substituicoes[chave]);
  }

  return textoDescriptografado;
}

function criptografarTexto(){
  let textoCodificado = '';
  for(let i = 0; i < texto.value.length; i++){
    console.log(texto.value[i])
    if (texto.value[i] == 'a'){ 
      textoCodificado += 'ai';       
    }else if(texto.value[i] == 'e'){
      textoCodificado += 'enter';
    }else if(texto.value[i] == 'i'){
      textoCodificado += 'imes';
    }else if(texto.value[i] == 'o'){
      textoCodificado += 'ober';
    }else if(texto.value[i] == 'u'){
      textoCodificado += 'ufat';
    }else{
      textoCodificado += texto.value[i];
    }    
  }
  return textoDecodificado.value = textoCodificado;
}

function verificaTexto(texto) {
  const regex = /[A-ZÀ-Úà-ú]/;
  
  return !regex.test(texto);
}

botaoCodificar.addEventListener("click", () => mostrarTextoCriptografado());
botaoDecodificar.addEventListener("click", () => mostrarTextoDescriptografado());
botaoCopiar.addEventListener("click", () => copiarTexto());