window.onload = () => {
  alert('Caso queira uma porcentagem da sua preferência, basta digitar o valor na área "Custom" e clicar Enter')
}

//==============CALC LOGIC ==============

const price = document.querySelector('#one') //price of bill
const persons = document.querySelector('#two') //number of peoples
const custom_porcent = document.querySelector('#custom-porcent')

const tip_person_amount = document.querySelector('#tip-person')
const total_person = document.querySelector('#total-person')

const reset = document.querySelector('.reset')


reset.addEventListener('click', () => { //resetar a aplicação
  price.value = ''
  persons.value = ''
  custom_porcent.value = ''
  tip_person_amount.innerHTML = '0.00'
  total_person.innerHTML = '0.00'

  price.classList.remove('active')
  persons.classList.remove('active')
  custom_porcent.classList.remove('active')

  reset.disabled = true //disable button reset
  price.focus();
})


function digitar(event) { 
  var x = event.keyCode; // 

  if (x == 13) {

    if (price.value == '' && persons.value == '' && custom_porcent.value == '') { //se os input estiverem vazios, alert(), se não, mostrar o resultado na tela
      alert('Preencha os campos')

      price.classList.toggle('active') //active danger border
      persons.classList.toggle('active') //active danger border
      custom_porcent.classList.toggle('active') //active danger border

    } else if (price.value !== '' && persons.value !== '' && custom_porcent.value == '') {
      alert('Escolha uma porcentagem, ou se preferir pode definir um valor da sua preferência')
      custom_porcent.focus()

    } else {
      if (custom_porcent.value > 100) {

        alert('O valor máximo é 100')

        custom_porcent.value = ''
        custom_porcent.focus()

      } else {
        customPercentage(custom_porcent.value)

      }
    }
  }
}

function customPercentage(customPorcent) {
  calcPercentage(customPorcent)

}


function show(tot, seila) { // this function show the result on screen
  tip_person_amount.innerHTML = tot.toFixed(2) //limits decimal places to two places
  total_person.innerHTML = seila.toFixed(2) //same thing to total_person

}


function calcPercentage(porcent) { //calc porcentage of tip
  const newPorcent = porcent / 100 //translate porcentage to decimal

  const tot = (price.value * newPorcent) / persons.value //calc tip for person  
  const seila = (price.value / persons.value) + tot

  show(tot, seila)

  reset.disabled = false //active button reset

}
