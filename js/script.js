import { hex_sha256 } from "./sha256-min.mjs";

const target = '231a6f6592b6eccd3d067d0828f0f5fe059292a512f1cdf156c4c9fe66d892db';
const incremento = 'mangelifogao';
const mensagem =  document.getElementById('mensagem')

document.getElementById('loginBtn').onclick = () =>{
    const entrada = document.getElementById('senha').value;
    if (hex_sha256(entrada + incremento) === target){
        sessionStorage.setItem('logado', '1');
        window.location.href = 'jogadores.html';
        
    }
    else{
        mensagem.innerHTML = 'Senha incorreta';
    }
}
