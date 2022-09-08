/*var paragrafos = document.getElementsByTagName('p')
var h1 = document.getElementsByTagName('h1')
var h2 = document.getElementsByTagName('h2')
var h4 = document.getElementsByTagName('h3')*/
var texto_claro = getElementById('texto_claro')
var links = document.getElementsByTagName('a')
var cor_p = document.getElementById('cor_p')
var cor_s = document.getElementById('cor_s')
var cor_t = document.getElementById('cor_t')

console.log(texto_claro)

p_size = 1.2

function aumentar(){
    p_size += 0.25
    for(p of paragrafos){
        p.style.fontSize = p_size + 'em'; 
    }
}

function diminuir(){
    p_size -= 0.25
    for(p of paragrafos){
        p.style.fontSize = p_size + 'em'; 
    }
}

function tema_claro(){

    cor_p.style.background = 'white'
    cor_s.style.background = 'white'
    cor_t.style.background = 'white'

    for(p of paragrafos){
        p.style.color = 'black'
    }
    for(a of links){
        a.style.color = 'black'
    }
    
}