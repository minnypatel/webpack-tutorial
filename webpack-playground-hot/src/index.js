import _ from 'lodash';
import printMe from './print.js';
import './styles.css'
import { cube } from './math.js';

  function component() {
    const btn = document.createElement('button');
    const element = document.createElement('pre');

    element.innerHTML = [
      'Hello Webpack!',
      '5 cubed is equal to ' + cube(5) + '\n\n'
    ].join('\n\n');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
  }

  document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', () => {
    console.log('Accepting the updated printMe module!');
    printMe();
    // document.body.removeChild(element);
    // element = component();
    // document.body.appendChild(element);
  })
}

