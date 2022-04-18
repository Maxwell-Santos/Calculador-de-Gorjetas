const input = document.querySelector('#one');
const input2 = document.querySelector('#two');

const reset = document.querySelector('.reset')


const porcetagens = document.querySelectorAll('.porcent-item')

const porcentArray = Array.from(porcetagens)

console.log(porcentArray)

porcentArray.forEach(item =>{
  item.addEventListener('click', ()=>{
    console.log(item)
  })
})
