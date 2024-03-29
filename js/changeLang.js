  import {btnChange,navButtonEn,navButtonRu} from './main.js';
  import {valueRu,valueEn,selectors} from './values.js';

  function changeLang(){
    const aboutContent = document.querySelector('.about__content');
    const aboutLeft = document.querySelector('.about__left');
    btnChange.addEventListener('click', () => {
      if(navButtonEn.classList.contains('show-text')){
        navButtonEn.classList.add('hide-text');
        navButtonEn.classList.remove('show-text');
        navButtonRu.classList.add('show-text');
        navButtonRu.classList.remove('hide-text');
        
        aboutLeft.classList.add('about__left-RU');
      }
      else {
        navButtonEn.classList.add('show-text');
        navButtonEn.classList.remove('hide-text');
        navButtonRu.classList.add('hide-text');
        navButtonRu.classList.remove('show-text');
        
        aboutLeft.classList.remove('about__left-RU');
      }
    });
  }

  function change(){

    btnChange.addEventListener('click', () => {
      if(navButtonRu.classList.contains('show-text') && navButtonEn.classList.contains('hide-text') ){
        let count = 0;
        let value = Object.values(valueRu);
        let selector = Object.values(selectors);
          for (let i = 0; i <= selector.length - 1; i++){
            document.querySelector(selector[i]).textContent = `${value[i] + ''}`;
            
          }
      }   
      else if(navButtonRu.classList.contains('hide-text') && navButtonEn.classList.contains('show-text') ){
        let count = 0;
        let value = Object.values(valueEn);
        let selector = Object.values(selectors);
        for (let i = 0; i <= selector.length - 1; i++){
          document.querySelector(selector[i]).textContent = `${value[i] + ''}`;
          
        }
      }

      
    });


  }
  

export {changeLang,change};




