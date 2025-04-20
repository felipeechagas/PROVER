
// Simula os dados vindos de um banco, API ou JSON local
const portfolioData = [
  {
    id: "1",
    titulo: "App de Clima e Tráfego",
    descricao: "Um aplicativo que mostra clima, tráfego e qualidade do ar em tempo real.",
    valorAnterior: "R$ 199,90",
    valorAtual: "R$ 149,90",
    categoria: "Aplicativo Mobile",
    cliente: "Tech Solutions",
    data: "15 Abril, 2024",
    url: "https://techsolutions.com/app",
    imagem: "assets/img/portfolio/app-1.jpg"
  },
  {
    id: "2",
    titulo: "Loja Virtual de Produtos",
    descricao: "E-commerce moderno para venda de eletrônicos e acessórios.",
    valorAnterior: "R$ 499,90",
    valorAtual: "R$ 349,90",
    categoria: "E-commerce",
    cliente: "Eletrônicos BR",
    data: "02 Março, 2023",
    url: "https://eletronicosbr.com",
    imagem: "assets/img/portfolio/product-1.jpg"
  }
];

// Função para obter parâmetro da URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Função para preencher os dados na tela
function carregarDetalhesDoPortfolio() {
  const id = getQueryParam("id");
  const projeto = portfolioData.find(item => item.id === id);

  if (!projeto) {
    alert("Projeto não encontrado.");
    return;
  }

  document.getElementById("portfolio-title").textContent = projeto.titulo;
  document.getElementById("portfolio-description").textContent = projeto.descricao;
  document.getElementById("portfolio-valor-anterior").textContent = projeto.valorAnterior;
  document.getElementById("portfolio-valor-atual").textContent = projeto.valorAtual;
  document.getElementById("portfolio-categoria").textContent = projeto.categoria;
  document.getElementById("portfolio-cliente").textContent = projeto.cliente;
  document.getElementById("portfolio-data").textContent = projeto.data;
  document.getElementById("portfolio-url").textContent = projeto.url;
  document.getElementById("portfolio-url").href = projeto.url;
  document.getElementById("portfolio-img").src = projeto.imagem;
}

// Iniciar carregamento ao abrir página
document.addEventListener("DOMContentLoaded", carregarDetalhesDoPortfolio);

