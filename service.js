let valores = []
let soma = 0
function analisar(){
    let n = document.getElementById("numeroanalise");
    let m = Number(n.value);
    let lista = document.querySelector(`select#op`);
    let res = document.querySelector("div#res");
if (m < 1 || m > 100){
        window.alert("Valor Inválido verifique e tente novamente");
}else{
        
        let item = document.createElement("option");
        item.text = `Valor ${Number(m)} adicionado`;
       
        
        if (valores.includes(Number(m))){
            window.alert("Valor já existente por favor selecione outro número");
        }else{
            
        valores.push(Number(m));
        lista.appendChild(item);
        n.value = "";
        n.focus();
        res.innerHTML = ''
        }    
        

    }
};
 
function finalizar(){
    
if (valores.length == 0) {
    window.alert("Insira um número antes de finalizar")
}else{

   //Organizando o Array de maneira crescente
    valores.sort( (a,b) => {
        if (a < b) return -1;
    })
   

    var textodiv = document.getElementById("res");
    let divtt = document.createElement("p")
     //Informando quantos itens foram adicionados
    divtt.textContent = `Ao todo temos ${valores.length} números cadastrados.`
    
    // Informar o MAIOR dos números
    let Mnum = document.createElement("p")
    Mnum.textContent = `O maior valor é ${valores[valores.length - 1]}`
    
    // Informar o MENOR dos números
    let Menornum = document.createElement("p")
    Menornum.textContent = `O menor valor é ${valores[0]} `

    // Informar a SOMA dos  números
    let Somnum = document.createElement("p")
    Somnum.textContent = `A soma de todos os valores é igual a ${soma} `

    // Informar a MÉDIA dos  números
    let Medianum = document.createElement("p")
    Medianum.textContent = `A média dos valores informados é igual a: ${soma / valores.length} `

    // Adicionando cada parte ao DOOM
   

    if (soma !== 0){
        console.log("Valores já calculados")
    }else{

        for (let pos in valores){
            soma += valores[pos]
        } 

        textodiv.appendChild(divtt)
        textodiv.appendChild(Mnum)
        textodiv.appendChild(Menornum)
        textodiv.appendChild(Somnum)
        textodiv.appendChild(Medianum)

    }
}

}