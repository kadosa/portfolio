import Navigo from 'navigo';
let nunjucks = require('nunjucks');

let renderPage = (page) => {
  let template = nunjucks.render('pages/' + page + '.njk');
  let container = document.querySelector('.page-container');
  container.innerHTML = template;
};

let router = {
  init: () => {
    let nav = new Navigo(null, false);
    nav.on({
      '/about': () => renderPage('about'),
      '/work': () => renderPage('work'),
      '/contact': () => renderPage('contact'),
      '*': () => renderPage('home'),
    }).resolve();
  }
};

export default router;
