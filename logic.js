// Hedaer Toogle Start === 
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', () =>{
   
    document.querySelector('body').classList.toggle('menuActive')
    MenuBtn.classList.toggle('fa-xmark')

    

})

// Hedaer Toogle End === 

// ========================================================================================================= //

// TYPING ANIMATION STARTED //

let type = new Typed('.auto-input',{
    strings:['Front-End Developer..!','Freelancer..!','UI Designer..!'],
    typeSpeed:100,
    backSpeed:50,
    backDelay:2000,
    loop:true,
})


// TYPING ANIMATION END //

// ============================== ============================================================================ //

// Skill Section Animation START //


//  Get All the   Progress Bars //

const progressBar = document.querySelectorAll('.inner-line');
window.addEventListener('scroll',function(){

    // Loop through each progress bar 

    progressBar.forEach(function(progressBar){

        // Get the Bounding rectangle of the progress bar
        
        const rect = progressBar.getBoundingClientRect();

        // Check if progress bar is visible on the screen 

        if(rect.top < window.innerHeight && rect.bottom >= 0){

            // Get the width of  progress bar 

            const width =progressBar.getAttribute('data-width');

            // Animate the progress bar 
            progressBar.style.width=width + '%' ;

        }
    });

});


// Skill Section Animation END //

// ==================================================================================================================//

// Activve Link State on Scroll START //
let navlinks =document.querySelectorAll('header nav ul li a')
// Get All Sections 
let sections=document.querySelectorAll('section')

window.addEventListener('scroll',()=>{
    const scrolPos=window.scrollY + 10
    sections.forEach(section=>{
        if(scrolPos>section.offsetTop && scrolPos <(section.offsetTop + section.offsetHeight)){
            navlinks.forEach(link =>{
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }
    });
});   

// Activve Link State on Scroll END //