## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview
### Screenshot

![Screenshot](./src/images/screenshot.jpg)
- Mobile design
![Screenshot-mobile](./src/images/screenshot-mobile.jpg)
### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/tip-calculator-r1QVkyWSc)
- Live Site URL: [Add live site URL here](https://calculador-de-gorjetas.vercel.app/)

## Meu processo

### Construído com

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Responsiveness
- Variables for colors
- Gsap which is animation when entering the site

### O que eu aprendi

<p>Esse atributo js serve para definir uma quantidade de character máximo ao input do type number, nesse caso eu coloquei 3, pois esse input recebe um valor de porcentagem digitado pelo usuário, como no máximo é 100%, o usuário fica limitado a digitar 3 números e no index.js verifica se ele é maior ou menos que 100 </p>

```html

<input type="number" id="custom-porcent" class="porcent-item" value="" placeholder="custom" onkeypress="OnClickEnter(event)" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" maxlength="3">
```
<p>Aqui é uma das células de porcetagem pré definido</p><br>
<p>Essa função é chamada para cada porcentagem pré definidada, e tem como parâmetro o valor da porcentagem desejado para fazer o calculo</p>

```html
<button type="button" class="porcent-item" name="item" onclick="calcPercentage('5')"> 5% </button>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```
## Autor

- Frontend Mentor - [@Maxwell-Santos](https://www.frontendmentor.io/profile/Maxwell-Santos)

## Agradecimentos

Eu gostaria de agradecer minha namorada, ela é programadora também e me ajudou construir o site, ela é um pilar para mim.

