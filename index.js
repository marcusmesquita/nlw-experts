const perguntas = [
    {
      perguntas: "Qual seu filme favorito?",
      respostas: [
        "Os Incríveis",
        "Monstros S.A",
        "Carros",
        "Valente",
      ],
      correta: 2
    },
    {
      perguntas: "Qual seu jogo favorito?",
      respostas: [
        "Halo",
        "Gears of War",
        "Spider Man",
        "God of War",
      ],
      correta: 3 
    },
    {
      perguntas: "Qual a marca do seu celular?",
      respostas: [
        "Sem-Sunga",
        "Maçan",
        "Moto-Rola",
        "Xi-Ai-Om-Mi",
      ],
      correta: 3
    },
    {
      perguntas: "Quem ele mais ama?",
      respostas: [
        "Nacito",
        "Tia quis",
        "A Veia",
        "Todos da família",
      ],
      correta: 3
    },
    {
      perguntas: "O que ele gosta de fazer no tempo livre?",
      respostas: [
        "Estudar",
        "Jogar",
        "Assistir",
        "Sair",
      ],
      correta: 1 
    },
    {
      perguntas: "Qual é sua comida favorita?",
      respostas: [
        "Strognoff",
        "Camarão",
        "Amendoin",
        "Feijoada",
      ],
      correta: 1 
    },
    {
      perguntas: "Qual bebida ele gosta?",
      respostas: [
        "Água",
        "Refri",
        "Suco de Laranja",
        "Nenhuma das Anteriores",
      ],
      correta: 2
    },
    {
      perguntas: "Qual sua cor favorita?",
      respostas: [
        "Preto/Verde",
        "Amarelo/Cinza",
        "Verde/Vermelho",
        "Roxo/Preto",
      ],
      correta: 0
    },
    
  ];
  
  const quiz = document.querySelector('#quiz')
    const template = document.querySelector('template')
  
    const corretas = new Set()
    const totalDePerguntas = perguntas.length
    const mostrarTotal = document.querySelector('#acertos span')
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.perguntas
    //não esqueça de colocar as aspas'h3'kkkkkk
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
     
      quizItem.querySelector('dl').appendChild(dt)
    }
    //dl sempre é pai da dt
    quizItem.querySelector('dl dt').remove()
  
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem) 
  }