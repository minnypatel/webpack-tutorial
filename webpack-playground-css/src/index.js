import _ from 'lodash';
import'./style.css';
import Photo from './image.jpg';
import Data from './data.xml';

function component() {
  var element = document.createElement('div');

  // Lodash now imported in the js
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add image to existing div
  var myPhoto = new Image();
  myPhoto.src = Photo;

  element.appendChild(myPhoto);

  console.log(Data);

  return element;
}

document.body.appendChild(component());
