var btn = document.querySelector('#btn'),
    out = document.querySelector('#out'),
    weight = document.querySelector('#weight'),
    vol = document.querySelector('#vol'),
    load = document.querySelector('#load'),
    del = document.querySelector('#del'),
    frag = document.querySelector('#frag'),
    range = document.querySelector('#range'),
    rasstoyanie = document.querySelector('.rasstoyanie').innerHTML = 500;
    rasstoyanie_number = document.querySelector('.rasstoyanie_number'),
    weight = document.querySelector('#weight'),
    vol = document.querySelector('#vol'),
    kg = 5.5,
    kub = 3500,
    km = 2;
 // range slider

        document.querySelector('#range.custom-range').addEventListener('input',()=>{
        let data = document.querySelector('#range.custom-range').value;
        document.querySelector('.rasstoyanie').innerHTML = data;
        document.querySelector('.rasstoyanie_number').value = data;
      })


        document.querySelector('.rasstoyanie_number').addEventListener('input',()=>{
        let data2 = document.querySelector('.rasstoyanie_number').value;
        document.querySelector('#range.custom-range').value = data2;
        document.querySelector('.rasstoyanie').innerHTML = data2;
        })
         
    
  // Basic function  
btn.onclick = function(){
  if (weight.value != '' && vol.value != '') {
      if (load.checked){ 
          load.value = 1500; }
        else 
        {
          load.value = 0;
      }
      if (del.checked){ 
          del.value = 3500; }
        else 
        {
          del.value = 0;
      }
      if (frag.checked){ 
          frag.value = 2000; }
        else 
        {
          frag.value = 0;
      }
 
var sum = (weight.value * kg) + (vol.value * kub) + Number(load.value) + + Number(del.value) + Number(frag.value) + (range.value * km);
      out.innerHTML = sum;
  }else{
alert('Введите вес и объем груза');
}
}
    