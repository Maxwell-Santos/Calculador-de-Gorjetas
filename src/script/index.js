const porcetagens = document.querySelectorAll('.porcent-item')

const porcentArray = Array.from(porcetagens)

console.log(porcentArray)

porcentArray.forEach(item =>{
  item.addEventListener('click', ()=>{
    console.log(item)
  })
})


//==============CALC LOGIC ==============

const price = document.querySelector('#one') //price of bill
const persons = document.querySelector('#two') //number of peoples

const tip_person_amount = document.querySelector('#tip-person')
const total_person = document.querySelector('#total-person')


function calcPorcentage(porcent){ //calc porcentage of tip

  const newPorcent = porcent / 100 //translate porcentage to decimal

  const tot = (price.value * newPorcent) / persons.value //calc tip for person
  tip_person_amount.innerHTML = tot.toFixed(2)

  //calcTotal
  const seila = (price.value / persons.value) + tot

  total_person.innerHTML = seila.toFixed(2)
  
}

// os item tem a mesma função essa calcPorcent, só que quando clica em cada uma, ela joga um parâmetro diferente, a conta da porcentagem faz com esse parâmetro, tendeu? um toque pra sim, dois pra n KKKKKKKKK