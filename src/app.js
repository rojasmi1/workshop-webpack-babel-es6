// Ability to import packages 
// import _ from 'lodash';
import './assets/styles/style.css';
import laptopIcon from './assets/images/laptop-icon.png';
import Label from 'Components/label';
import CustomImage from 'Components/customImage';
import { square } from './utilities/math';

function component() {
const element = document.createElement('div');
element.classList.add('hello');

// Add label component
const myLabel = new Label(`Sample Label ${square(2)}`, ['label']);
element.appendChild(myLabel.render());

// Add the image to our existing div.
const laptopImageTag = new CustomImage(laptopIcon, ['icon']);
element.appendChild(laptopImageTag.render());

return element;
}

document.body.appendChild(component());