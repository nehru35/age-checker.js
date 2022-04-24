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
                $img.src = "../img/kid-man.jpg";
            } else if ($idade <= 35) {
                //jovem
                $img.src = "../img/teeanager-man.jpg";
            } else if ($idade <= 55) {
                //Adulto
                $img.src = "../img/sr-man.jpg";
            } else {
                //idoso
                $img.src = "../img/old-man.jpg";
            }
        } else if ($sexo[1].checked) {
            $genero = 'mulher';
            $msg.innerText = `Detectamos ${$genero} com ${$idade} anos!`
            if ($idade >=0 && $idade <= 12) {
                //criança
                $img.src = "../img/kid-women.png";
            } else if ($idade <= 35) {
                //jovem
                $img.src = "../img/teeanager-women.jpg";
            } else if ($idade <= 55) {
                //Adulto
                $img.src = "../img/sra-women.jpg";
            } else {
                //idoso
                $img.src = "../img/old-women";
            }
        }

        $msg.appendChild($img)
        
    }    
}