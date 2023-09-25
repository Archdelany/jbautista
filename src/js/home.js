import { Datepicker } from 'vanillajs-datepicker';
import 'vanillajs-datepicker/css/datepicker-foundation.css';



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
    
    const citieSelect = document.createElement("select");
    citieSelect.name = "city";
    citieSelect.id ="city";
    citieSelect.classList.add("form-select","mb-3","mb-md-0","me-md-2");
    for (const city of cities){

        const option = document.createElement("option");
        option.value = city;
        option.text = city;
        citieSelect.appendChild(option);
    };

    form.insertBefore(citieSelect,checkIn);
     
  }else{

   if(document.getElementById('city')){

      document.getElementById('city').remove();
   }



  }

});

const checkIndate = document.querySelector('input[name="checkIn"]');
const checkIndatepicker = new Datepicker(checkIndate, {
    buttonClass: 'btn',
  }); 

const checkOutDate = document.querySelector('input[name="checkOut"]');
const checkOutdatepicker = new Datepicker(checkOutDate, {
    buttonClass: 'btn',
  }); 