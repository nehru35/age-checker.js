function verificar() {
    const $ano = new Date().getFullYear();
    const $user_ano = window.document.getElementById("ano").value;
    const $ano_nascimento = Number($user_ano);
    const $msg = window.document.getElementById("msg");
    const $idade = $ano - $ano_nascimento;
    const $sexo = window.document.getElementsByName("sexo");

    const $img = window.document.createElement("img");
    $img.setAttribute = "src";
    var $genero = '';

    if ($user_ano == '' || $user_ano > $ano) {
        alert("Digite o ano de nascimento");
    } else {
        if ($sexo[0].checked) {
            $genero = 'homem';
            $msg.innerText = `Detectamos ${$genero} com ${$idade} anos!`;
            if ($idade >=0 && $idade <= 12) {
                $img.src = "../img/bebe-homem.png";
            } else if ($idade <= 35) {
                //jovem
                $img.src = "../img/jovem-homem.png";
            } else if ($idade <= 55) {
                //Adulto
                $img.src = "../img/adulto-homem.png";
            } else {
                //idoso
                $img.src = "../img/idoso-homem.png";
            }
        } else if ($sexo[1].checked) {
            $genero = 'mulher';
            $msg.innerText = `Detectamos ${$genero} com ${$idade} anos!`
            if ($idade >=0 && $idade <= 12) {
                //criança
                $img.src = "../img/bebe-mulher.png";
            } else if ($idade <= 35) {
                //jovem
                $img.src = "../img/jovem-mulher.png";
            } else if ($idade <= 55) {
                //Adulto
                $img.src = "../img/adulto-mulher.png";
            } else {
                //idoso
                $img.src = "../img/idoso-mulher.png";
            }
        }

        $msg.appendChild($img)
        
    }    
}