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

- Mobile-design
<img src="./src/images/screenshot-mobile.jpg" width="100px" height="300px" alt="Mobile-design">
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
/*serve para tirar as setas que ficam de quando o input é do tipo number*/
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}
```
- São 3 inputs que o usuário consegue escrever algum valor. Caso algum deles não forem de acordo com o esperado, as bordas ficam vermelhas, avisando que há algo de errado com aquele input, e o js se encarrega de alertar o que está errado

<p>Ex: clicar Enter para fazer o calculo, porém não preencheu um dos campos</p>

<img src="./src/images/error/campo vazio.jpg" alt="error campo vazio">

```css

/*Quando clica Enter, e algum desses input não forem preenchidos, o js adiciona essa class "active"*/
#one.active, #two.active, #custom-porcent.active{
  border: 2px solid rgb(248, 64, 64);
}

/*Caso seja um valor válido, ex: diferente de vazio*/
/*ou no caso da #custom-porcent, também verifica se o valor é abaixo de 100 (daí ele se torna válido)*/
/*As bordas voltam ao normal, indicando que está tudo certo naquele campo*/
#one.active:valid, 
#two.active:valid, 
#custom-porcent.porcent:valid{
  border: 2px solid var(--input-bg-color);
}

```
- Na div das porcentagens, distribuí com usando <code>display: grid</code>, assim para facilitar na manipulação das células e posicionar de acordo com o tamanho da tela 

<img src="./src/images/grid-porcent.jpg">

```css
.porcent {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /*Serão 3 colunas com a largura responsiva*/
  grid-template-rows: 1fr 1fr; /*duas linhas com a largura responsiva*/
  gap: 10px; /*um espaço de 10px entre eles */
  align-items: center; /*cada item está posicionado ao centro de sua respectia célula*/
}

```
### Reset disabled

<p>O botão reset apenas liga quando todo os campos forem preenchidos</p>
<img src="./src/images/use cases/reset-d.jpg">

<img src="./src/images/use cases/reset-a.jpg">

```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```
## Autor

- Frontend Mentor - [@Maxwell-Santos](https://www.frontendmentor.io/profile/Maxwell-Santos)

## Agradecimentos

Eu gostaria de agradecer minha namorada, ela é programadora também e me ajudou construir o site, ela é um pilar para mim.

