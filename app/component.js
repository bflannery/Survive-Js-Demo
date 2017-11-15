// export default (text = 'Hello World') => {
//   const element = document.createElement('div');
//
//   element.innerHTML = text;
//   element.className = styles.redButton;
//
//   return element;
// };

module.exports = () => {
  const element = document.createElement('div');
  
  element.className = 'pure-button';
  element.innerHTML = 'Hello World';
  
  return element;
};
