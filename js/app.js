const hovers_1 = document.getElementById('card-1');
const button_1 = document.getElementById('btn-1');
const hovers_2 = document.getElementById('card-2');
const button_2 = document.getElementById('btn-2');
const hovers_3 = document.getElementById('card-3');
const button_3 = document.getElementById('btn-3');

hovers_1.addEventListener('mouseover', function(){
    button_1.classList.remove('bg-[#E0E0E0]');
    button_1.classList.add('bg-sky-600');
    button_1.classList.remove('text-[#828282]');
    button_1.classList.add('text-white');

});

hovers_1.addEventListener('mouseout', function(){
    button_1.classList.add('bg-[#E0E0E0]');
    button_1.classList.remove('bg-sky-600');
    button_1.classList.add('text-[#828282]');
    button_1.classList.remove('text-white');    
});

hovers_2.addEventListener('mouseover', function(){
    button_2.classList.remove('bg-[#E0E0E0]');
    button_2.classList.add('bg-sky-600');
    button_2.classList.remove('text-[#828282]');
    button_2.classList.add('text-white');

});

hovers_2.addEventListener('mouseout', function(){
    button_2.classList.add('bg-[#E0E0E0]');
    button_2.classList.remove('bg-sky-600');
    button_2.classList.add('text-[#828282]');
    button_2.classList.remove('text-white');    
});

hovers_3.addEventListener('mouseover', function(){
    button_3.classList.remove('bg-[#E0E0E0]');
    button_3.classList.add('bg-sky-600');
    button_3.classList.remove('text-[#828282]');
    button_3.classList.add('text-white');

});

hovers_3.addEventListener('mouseout', function(){
    button_3.classList.add('bg-[#E0E0E0]');
    button_3.classList.remove('bg-sky-600');
    button_3.classList.add('text-[#828282]');
    button_3.classList.remove('text-white');    
});




