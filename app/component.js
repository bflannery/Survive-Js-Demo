export default (text = 'Hello Word') => {
	const element = document.createElement('div');
	
	element.innerHTML = text;
	
	return element;
};