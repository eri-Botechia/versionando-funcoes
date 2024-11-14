const listOptionsNav = [
  {
    id: 'btnNav1',
    content: 'HOME',
    param: 1,
    template2Render: `<div><h2>hello world #01</h2></div>`,
  },
  {
    id: 'btnNav2',
    content: 'PROJETO',
    param: 2,
    template2Render: `<div><h2>hello world #02</h2></div>`,
  },
  {
    id: 'btnNav3',
    content: 'BLOG',
    param: 3,
    template2Render: `<div><h2>hello world #03</h2></div>`,
  },
  {
    id: 'btnNav4',
    content: 'LOJINHA',
    param: 4,
    template2Render: `<div><h2>hello world #04</h2></div>`,
  },
  {
    id: 'btnNav5',
    content: 'EVENTOS',
    param: 5,
    template2Render: `<div><h2>hello world #05</h2></div>`,
  },
  {
    id: 'btnNav6',
    content: 'CLUB',
    param: 6,

    template2Render: `<div><h2>hello world #06</h2></div>`,
  },
  {
    id: 'btnNav7',
    content: 'CONTATO',
    param: 7,
    template2Render: `<div><h2>hello world #07</h2></div>`,
  },
];

const elementHTML = document.getElementById('idA');
const contentHTML = document.getElementById('content');


const renderNavList = (lista) => {
  return `
   <nav class="menu">
     ${lista.map(
       (item) =>
         `<button id=id${item.id}>
          ${item.content}
       </button>`
     )}
    </nav>`;
};

const renderDefault = (el, lista) => {
  const idAHTML = document.getElementById(el);
  document.addEventListener('DOMContentLoaded', () => {
    const listaRenderizada = renderNavList(lista);
    el.innerHTML = listaRenderizada;
  });


renderDefault(elementHTML, listOptionsNav);

const comprimentoPalavra = (param) => Number(param.slice(-1)); // retorna ultimo

const clickando = (btnEl, idNumerico, target, dataList) => {
  btnEl.addEventListener('click', () => {
    const templateParaRenderizar = dataList[idNumerico - 1];
    //target.innerHTML = dataList[templateParaRenderizar].template2Render;
    console.log('click ' + idNumerico);
  });
};

const navClick = ( target, dataList) => {
  const btn1 = document.getElementById('idbtnNav1');
const btn2 = document.getElementById('idbtnNav2');
const btn3 = document.getElementById('idbtnNav3');
const btn4 = document.getElementById('idbtnNav4');
const btn5 = document.getElementById('idbtnNav5');
const btn6 = document.getElementById('idbtnNav6');
  return clickando(navBtn, navBtnNumerico, target, dataList);
};

navClick(btn1, 'content', listOptionsNav);

//navClick(navButton, contentHTML, listOptionsNav);
