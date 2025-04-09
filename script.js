function xingar(){
    const frases = [
        "Teu código fede mais que reunião de daily com dev júnior metido a arquiteto.",
        "Tu programa igual um cu: só sai merda e ainda entope tudo que passa.",
        "Tua IDE devia travar toda vez que tu escreve `let`, só pra evitar mais uma desgraça.",
        "Tua função é tão filha da puta que faz `undefined` parecer um recurso.",
        "Tu acha que sabe programar, mas teu `deploy` é basicamente uma ameaça à infraestrutura mundial.",
        "Tu é tão burro que faz `git push` direto na `main` e ainda escreve no grupo 'foi sem querer'.",
        "Teu código é tão tóxico que o ESLint pediu demissão por burnout.",
        "Tu usa `console.log()` igual macaco com teclado: socando até sair algo que se mexe.",
        "Se teu sistema fosse um ser humano, já tinha pedido eutanásia em Java.",
        "Tua lógica é tão torta que o `if` vira `else` só de desgosto.",
        "Teu pull request parece ritual de sacrifício: entra vaca, sai carniça.",
        "Tu escreve `async` e `await` como se fosse mantra, mas nem sabe que porra tá esperando.",
        "Tua UI é tão feia que dava pra usar como captcha: só humano com coragem clica.",
        "Tu refatora como quem limpa o cu com vidro: sai sangue e ainda fica sujo.",
        "Tu comita mais merda que intestino solto com ansiedade.",
        "Teu backend é tão desorganizado que parece guarda-roupa de programador em crise existencial.",
        "Tua stack é `React`, `Node` e pura má vontade.",
        "Tu devia ser banido de usar `map`, `filter` e `reduce` por crime contra a semântica.",
        "Tu faz `merge` igual quem dirige bêbado: bate em tudo e ainda acha que tá certo.",
        "Teu código não roda nem se tu acender vela preta e sacrificar um SSD."
      ];
      
      frases.push(
        "Teu código é tão nojento que devia ser printado e usado como papel higiênico em prisão de segurança máxima.",
        "Tu programa como quem bate a cabeça no teclado e reza pra sair um CRUD — e nem isso tu consegue.",
        "Se tua lógica fosse um prato, era bosta à la mode com cobertura de `NaN`.",
        "Tua presença num projeto vale menos que comentário sem contexto no meio do `main.js`.",
        "Tu entende tanto de programação quanto uma anta entende de nuclear: só explode o que toca.",
        "Teu commit devia vir com alerta da OMS: risco grave à sanidade alheia.",
        "Teu deploy é tão trágico que o CI/CD criou PTSD só de ouvir teu nome.",
        "Tu é o tipo de dev que escreve `for` sem saber o que tá forçando, e ainda faz com orgulho.",
        "Tua cabeça é tão vazia que até um array sem `push()` faz mais sentido.",
        "Se existisse inferno pra código, tu tava sentado no trono queimando script em XML."
      );
           
      



const aleatorio = Math.floor(Math.random()*frases.length);
document.getElementById("xingamento").innerText=frases[aleatorio];
}   
