

/* toggle js */

var toggleButton = document.getElementById('toggle-btn');
var navList = document.getElementById('navGroup');

function menuDropdown(){

        navList.classList.add('shown');
        // navList.setAttribute('class','shown');
        function removeMenu(){
                navList.classList.remove('shown');

        }
        toggleButton.addEventListener('click',removeMenu,false);

}

toggleButton.addEventListener('mouseover',menuDropdown,false);
