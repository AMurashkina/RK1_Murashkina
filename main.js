
let butReady = document.getElementById("ready"); //кнопка готово
let myForm = document.getElementById("form"); //форма

let date = document.querySelector('[name="date"]')
    type = document.querySelector('[name="type"]')
    applicant = document.querySelector('[name="applicant"]')
    level = document.querySelector('[name="level"]')

let dateEror = document.getElementById("dateEror");

date.onblur = function(){
  if (!date.value){
    date.style.border ='1px solid #dc3545';
    dateEror.style.display = 'block';
  }
}
date.onfocus = function(){
  date.style.border ='1px solid #ced4da';
  dateEror.style.display = 'none';
}

butReady.addEventListener("click", () => {  
  
  let data = {
    'тип угрозы': type.value,
    'дата': date.value,
    'заявитель': applicant.value,
    'уровень угрозы': level.value
  };

  let result = myForm.checkValidity();
  if(result == true){
    console.table(data); 
  }
  else {

    if (date.value === ''){
      date.style.border ='1px solid #dc3545';
      dateEror.style.display = 'block';
    }
  }
})

