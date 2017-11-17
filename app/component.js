
export default (text = 'Hello world') => {
  const element = document.createElement('div');

  element.className = 'fa fa-hand-spock-o fa-1g';
  element.innerHTML = text;
  element.onclick = () => {
    import('./lazy').then((lazy) => {
      element.textContent = lazy.default;
    }).catch((err) => {
      console.error(err);
    });
  };

  return element;
};


// export default () => {
//   const element = document.createElement('div');
//   element.className = 'pure-button';
//   element.innerHTML = 'Hello world';
//   element.onclick = () => {
//     require.ensure([], (require) => { element.textContent = require('./lazy').default;
//     }); };
//   return element; };
