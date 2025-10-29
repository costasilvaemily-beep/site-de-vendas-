// 1. Definição dos Produtos: Array de objetos
const listaDeProdutos = [
    {
        nome: "Fone de Ouvido Bluetooth",
        descricao: "Áudio de alta fidelidade com cancelamento de ruído.",
        preco: 199.90,
        // Altere 'imagens/item1.jpg' pelo caminho real da sua imagem!
        imagem: "imagens/item1.jpg" 
    },
    {
        nome: "Mouse Ergonômico",
        descricao: "Design confortável para longas sessões de trabalho.",
        preco: 79.90,
        // Altere 'imagens/item2.jpg' pelo caminho real da sua imagem!
        imagem: "imagens/item2.jpg"
    },
    {
        nome: "Webcam Full HD",
        descricao: "Ideal para videoconferências e streaming.",
        preco: 129.50,
        // Altere 'imagens/item3.jpg' pelo caminho real da sua imagem!
        imagem: "imagens/item3.jpg"
    }
];

// 2. Função para Renderizar (Criar) os Produtos na Página
function carregarProdutos() {
    const container = document.getElementById('produtos-container');

    listaDeProdutos.forEach(produto => {
        // Cria a estrutura HTML para um único produto (incluindo a imagem)
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto'); // Adiciona a classe para estilização CSS

        // O HTML interno que será injetado
        produtoDiv.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <div class="preco">R$ ${produto.preco.toFixed(2).replace('.', ',')}</div>
            <button onclick="alert('Produto ${produto.nome} adicionado ao carrinho!')">
                Adicionar ao Carrinho
            </button>
        `;

        // Adiciona o novo produto ao container principal
        container.appendChild(produtoDiv);
    });
}

// 3. Executa a função quando o script for carregado
carregarProdutos();