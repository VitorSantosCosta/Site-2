var paragrafos = document.getElementsByTagName('p')
var titulo_h1 = document.getElementsByTagName('h1')
var titulos_h2 = document.getElementsByTagName('h2')
var titulo_h4 = document.getElementsByTagName('h4')
var links = document.getElementsByTagName('a')
var elemento_2 = document.getElementsByClassName('row gx-5 p-3 rounded align-items-center')
var p_size = 1.2
var cor_p  = document.getElementById('cor_p')
var cor_s = document.getElementsByName('cor_s')
var cor_t = document.getElementsByName('cor_t')
var footer_color = document.getElementsByName('footer')
var a_azul = document.getElementsByName('a_azul')


console.log(links)

function aumentar(){
    if (!(p_size > 1.35)) {
        p_size += 0.15
        for(p of paragrafos){
            p.style.fontSize = p_size + 'em'; 
        }
    }
}

function diminuir(){
    if (p_size > 1){
        p_size -= 0.15
        for(p of paragrafos){
            p.style.fontSize = p_size + 'em'; 
        }
    }
}
    

function tema_claro(){

    cor_p.style.background = 'white'

    for(p of paragrafos){
        p.style.color = 'black'
    }
    for(a of links){
        a.style.color = 'black'
    }
    for(h2 of titulos_h2){
        h2.style.color = 'black'
    }
    for(h4 of titulo_h4){
        h4.style.color = 'black'
    }
    for(elemento_cor_s of cor_s){
        elemento_cor_s.style.background = 'rgb(245,245,245)'
    }
    for(elemento_cor_t of cor_t){
        elemento_cor_t.style.background = 'white'
    }
    for(elemento_footer of footer_color){
        elemento_footer.style.background = '#212529'
    }
    for(azul of a_azul){
        azul.style.color = 'blue'
    }
}
