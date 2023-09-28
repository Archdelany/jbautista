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
    const citieSelect = document.createElement("select");
    var carrouselWrapper = document.getElementById('w-carrousel');
    
    container.classList.add("mb-3","mb-xxl-0","me-md-2");
    citieSelect.name = "city";
    citieSelect.id ="city";
    citieSelect.classList.add("form-select","py-2");
    for (const city of cities){

        const option = document.createElement("option");
        option.value = city;
        option.text = city;
        citieSelect.appendChild(option);
    };
    container.appendChild(citieSelect);
    form.insertBefore(container,checkIn);

    if(window.innerWidth < 1400){

      gsap.to(carrouselWrapper,{marginTop:430});

    };
    
     
  }else{

   if(document.getElementById('city')){

    var carrouselWrapper = document.getElementById('w-carrousel');

      document.getElementById('city').remove();

      if(window.innerWidth < 1400){

        gsap.to(carrouselWrapper,{marginTop:380});
        
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

        gsap.to(carrouselWrapper,{marginTop:430});

      }else{

        gsap.to(carrouselWrapper,{marginTop:380});
      }

  };




});
