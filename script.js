const avanca = document.querySelectorAll('.btn-proximo');
avanca.forEach(button =>{
     button.addEventListener( 'clink',function(){
        const atual = document.querySelector('.ativo')
        const proximoPasso = 'passo-'+ this.getAttribute('data-proximo')
        
        atual.classiList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
        
     })
})
