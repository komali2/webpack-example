import '../styles/image_viewer.css';
import big from '../assets/small.jpeg';
import small from '../assets/big.jpeg';

const image = document.createElement('img');
image.src = small;

document.body.appendChild(image);

const bigImage = document.createElement('img');
bigImage.src = big;

document.body.appendChild(bigImage);