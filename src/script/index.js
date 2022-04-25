
const price = document.querySelector('#one') //price of bill
const persons = document.querySelector('#two') //number of peoples
const custom_porcent = document.querySelector('#custom-porcent')

const tip_person_amount = document.querySelector('#tip-person') //show the result of calc for tip
const total_person = document.querySelector('#total-person') // show the result of calc in total

const reset = document.querySelector('.reset')

//essa variável vai manipular o idioma dos alerts
const lang = navigator.language; //recebe a linguagem do navegador

window.onload = () => {

  setTimeout(() => {
    price.focus();

    if(lang == 'en-US'){
      alert('If you want a percentage of your preference, just type the value in the "Custom" area and click Enter');
    } else{
      alert('Caso queira um percentual de sua preferência, basta digitar o valor na área "Custom" e clicar em Enter');

    }

  }, 2000)
}

function controlBorders() {
  price.classList.add('active') //active danger border
  persons.classList.add('active') //active danger border
  custom_porcent.classList.add('active') //active danger border

}

reset.addEventListener('click', () => { //reset the aplication
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


function OnClickEnter(event) {
  var x = event.keyCode;

  if (x == 13) { //13 is the code of button enter on keyboard

    //se os campos obrigátórios n estiverem preenchido, faça isso
    //if the required fields are not filled, do this
    if (price.value == '' && persons.value == '' && custom_porcent.value == '') {

      if(lang == 'en-US'){
        alert('Fill in the fields')
      } else {
        alert('Preencha os campos')
      }
      controlBorders();

      
    } else if(price.value == '' && persons.value !== '' && custom_porcent.value == ''){

      if(lang == 'en-US'){
        alert('Fill in the Bill field')
      } else {
        alert('Fill in the Conta field')
      }

      price.focus();


    } else if (price.value !== '' && persons.value == '' && custom_porcent.value == '') {

      if(lang == 'en-US'){
        alert('Fill in the Number of People field')
      } else {
        alert('Preencha o campo Número de Pessoas')
      }

      persons.focus();
      
      //se não, se os campos obrigatórios estiverem preenchidos mas o usuário não definiu uma porcentagem, faça isso
      //if not, if the required fields are filled in but the user has not set a percentage, do so
    } else if (price.value !== '' && persons.value !== '' && custom_porcent.value == '') {

      if(lang == 'en-US'){
        alert('Choose a percentage, or set a value of your own')
      } else {
        alert('Escolha uma porcentagem, ou defina um valor da sua preferência')
      }

      custom_porcent.focus()

    } else {

      if (custom_porcent.value > 100) {//o valor máximo da porcentagem e 100%

        if(lang == 'en-US'){
          alert('the maximum value is 100')
        } else {
          alert('O valor máximo é 100')
        }

        custom_porcent.value = ''
        custom_porcent.focus()

      } else {
        customPercentage(custom_porcent.value) //ele joga como parâmetro o valor digitaoo

      }

    }
  }
}


//essa função recebe como parâmetro o valor digitado, assim como mostra na linha 83
//this function receives the value entered as a parameter, as shown in line 83
function customPercentage(customPorcent) {
  //esse valor digitado, será jogado como parâmetro para o calculo
  //the entered value, will be used how param to the calc
  calcPercentage(customPorcent)

}

function show(tipForPerson, totalforPerson) { // this function show the result on screen
  tip_person_amount.innerHTML = tipForPerson.toFixed(2) //limits decimal places to two places
  total_person.innerHTML = totalforPerson.toFixed(2) //same thing to total_person

}

function calcPercentage(porcent) { //calc porcentage of tip

  const newPorcent = porcent / 100 //translate porcentage to decimal

  const tipForPerson = (price.value * newPorcent) / persons.value //calc tip for person  
  const totalforPerson = (price.value / persons.value) + tipForPerson

  if (price.value == '' || persons.value == '') {

    if(lang == 'en-US'){
      alert('fill in the fields!')
    } else {
      alert('Preencha os campos!')
    }

    controlBorders();

  } else {
    show(tipForPerson, totalforPerson)
    reset.disabled = false //active button reset

  }
}
