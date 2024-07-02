document.addEventListener('DOMContentLoaded', function (){
    const sections =document.querySelectorAll('section');
    const sidebarLinks =document.querySelectorAll('.sidebar-link');

    window.addEventListener('scroll', function (){
        let currentSection='';

        sections.forEach(section =>{
            const sectionTop=section.offsetTop;
            if(pageYOffset >= sectionTop - 60){
                currentSection=section.getAttribute('id');
            }
        });

        sidebarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    });
});
