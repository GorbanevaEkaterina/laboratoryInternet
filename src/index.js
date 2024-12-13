import "./pages/index.css";
import "./components/slider";
import "./components/burger";
import "./components/api";
import {
    enableValidation,
    clearValidation,
    validationConfig,
  } from "./components/validation.js";
  enableValidation(validationConfig);
const submitButton = document.querySelector('.popup__button');
  const changeSubmitTextOnLoad = (checkStatus, itemButton) => {
    if (checkStatus) {
      itemButton.textContent = "Отправление...";
    } else {
      itemButton.textContent = "Отправить";
    }
  };  

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('myForm');

 
  form.addEventListener('submit', function(evt) {
      evt.preventDefault(); 
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      changeSubmitTextOnLoad(true, submitButton);
     
      fakeServerRequest(data)
          .then(response => {
              console.log('Данные успешно отправлены на сервер:', response);
              alert('Форма успешно отправлена');
          })
          .catch(error => {
              console.error('Ошибка при отправке формы:', error);
              alert('Произошла ошибка при отправке формы');
          });
  });

 
  function fakeServerRequest(data) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              const isSuccess = Math.random() > 0.2; 

              if (isSuccess) {
                  resolve(data); 
              } else {
                  reject('Ошибка сервера'); 
              }
          }, 2000); 
      });
  }
});