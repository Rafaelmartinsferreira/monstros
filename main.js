const monstros = [
    {
        id: 1,
        nome: 'Mario',
        altura: 2,
        habilidades: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio esse praesentium voluptate earum, atque optio.',
        foto: 'https://robohash.org/mario'
    },
    {
        id: 2,
        nome: 'Megamente',
        altura: 3,
        habilidades: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio esse praesentium voluptate earum, atque optio.',
        foto: 'https://robohash.org/megamente'
    },
    {
        id: 3,
        nome: 'Javinha',
        altura: 6,
        habilidades: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio esse praesentium voluptate earum, atque optio.',
        foto: 'https://robohash.org/javinha'
    },
    {
        id: 4,
        nome: 'Rastro',
        altura: 8,
        habilidades: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio esse praesentium voluptate earum, atque optio.',
        foto: 'https://robohash.org/rastro'
    }
]

const secao = document.querySelector('.monstros');
const botao = document.querySelector('.btn');

botao.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
})

const todosOsMonstros = monstros.map((monstro) => {
  return `<div> 
        <p>Nome: ${monstro.nome}</p>
        <p>Altura: ${monstro.altura}</p>
        <img src="${monstro.foto}"> 
        <p class="habilidades">Habilidades: ${monstro.habilidades}</p>
    </div>`;
});


secao.innerHTML = todosOsMonstros;