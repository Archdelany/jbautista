import { Datepicker } from 'vanillajs-datepicker';
import 'vanillajs-datepicker/css/datepicker-foundation.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import gsap from 'gsap';



const packageType = document.getElementById('package-type');
const form = document.getElementById('booking-form');
const checkIn = document.getElementById('checkInContainer');
const cities = [
    "Ciudad de México",
    "Cancún",
    "Guadalajara",
    "Monterrey",
    "Tijuana",
    "Puerto Vallarta",
    "Mérida",
    "Cabo San Lucas",
 
  ];

packageType.addEventListener('change',()=>{
  if(packageType.value == 'hotel+flight' && document.getElementById('city') == null ){
    const container = document.createElement("div");
    const label = document.createElement("label");
    const citieSelect = document.createElement("select");
    var carrouselWrapper = document.getElementById('w-carrousel');
    
    container.classList.add("mb-3","mb-xxl-0","me-md-2");
    container.id='cityContainer';
    const strongElement = document.createElement("strong");
    strongElement.textContent = "City";
    citieSelect.name = "city";
    citieSelect.id ="city";
    citieSelect.classList.add("form-select","py-2");
    for (const city of cities){

        const option = document.createElement("option");
        option.value = city;
        option.text = city;
        citieSelect.appendChild(option);
    };
    label.appendChild(strongElement);
    container.appendChild(label);
    container.appendChild(citieSelect);
    form.insertBefore(container,checkIn);

    if(window.innerWidth < 1400){

      gsap.to(carrouselWrapper,{marginTop:450});

    };
    
     
  }else{

   if(document.getElementById('cityContainer')){

    var carrouselWrapper = document.getElementById('w-carrousel');

      document.getElementById('cityContainer').remove();

      if(window.innerWidth < 1400){

        gsap.to(carrouselWrapper,{marginTop:400});
        
      };

      
   }



  }

});


const checkIndate = document.getElementById('checkIn');
const checkIndatepicker = new Datepicker(checkIndate, {
 
  }); 

const checkOutDate = document.getElementById('checkOut');
const checkOutDatepicker = new Datepicker(checkOutDate, {
   
  }); 


checkIndatepicker.setDate('today');
checkOutDatepicker.setDate('today');

/*--booking in modal--*/

const packageTypeModal = document.getElementById('package-type-modal');
const formModal = document.getElementById('booking-form-modal');
const checkInModal = document.getElementById('checkInContainerModal');

packageTypeModal.addEventListener('change',()=>{
  if(packageTypeModal.value == 'hotel+flight' && document.getElementById('cityContainerModal') == null ){
    const containerModal = document.createElement("div");
    const citieSelectModal = document.createElement("select");
    const labelModal = document.createElement("label");
    const strongElementModal = document.createElement("strong");
    strongElementModal.textContent = "City";
    containerModal.classList.add("mb-3","mb-xxl-0","me-md-2");
    containerModal.id='cityContainerModal';
    citieSelectModal.name = "city-modal";
    citieSelectModal.id ="city-modal";
    citieSelectModal.classList.add("form-select","py-2");
    for (const city of cities){

        const optionModal = document.createElement("option");
        optionModal.value = city;
        optionModal.text = city;
        citieSelectModal.appendChild(optionModal);
    };
    labelModal.appendChild(strongElementModal);
    containerModal.appendChild(labelModal);
    containerModal.appendChild(citieSelectModal);
    formModal.insertBefore(containerModal,checkInModal);

   
     
  }else{

   if(document.getElementById('cityContainerModal')){


      document.getElementById('cityContainerModal').remove();

      
   }



  }

});





const checkIndateModal = document.getElementById('checkInModal');
const checkIndatepickerModal = new Datepicker(checkIndateModal, {
 
  }); 

const checkOutDateModal = document.getElementById('checkOutModal');
const checkOutDatepickerModal = new Datepicker(checkOutDateModal, {
   
  }); 


checkIndatepickerModal.setDate('today');
checkOutDatepickerModal.setDate('today');



  const swiper = new Swiper('.swiper', {
    loop:true,
    slidesPerView:2,
    autoplay:true,
    spaceBetween:10,
    breakpoints: {
    
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },

      998: {
       
        slidesPerView: 3,
        spaceBetween: 30,
      },
     
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

window.addEventListener('resize',()=>{

  var carrouselWrapper = document.getElementById('w-carrousel');

  if(window.innerWidth > 1400){

    gsap.to(carrouselWrapper,{marginTop:100});
    
  }else{

      if(document.getElementById('city')){

        gsap.to(carrouselWrapper,{marginTop:450});

      }else{

        gsap.to(carrouselWrapper,{marginTop:400});
      }

  };




});
