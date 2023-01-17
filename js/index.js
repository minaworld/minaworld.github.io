<<<<<<< HEAD
$(function() {
    
    $(window).on('scroll', function() {
        setVisible($('section.exhibition'), 'fadeInUp');
        setVisible($('section.collection .con'), 'fadeInUp animate__faster');
        setVisible($('section.collection .antique'), 'fadeInLeft');
        setVisible($('section.collection .modern'), 'fadeInRight');
        setVisible($('section.facility .banner-box'), 'fadeInUp animate__faster');
        setVisible($('section.facility .person'), 'fadeInLeft animate__delay-500ms');
        setVisible($('section.facility .con'), 'fadeInRight animate__delay-1s');
        setVisible($('section.program'), 'fadeInUp animate__delay');
        setVisible($('section.artist'), 'fadeInUp animate__delay-500ms');
    })
})
=======
const video = document.querySelector(".video"); 
if(video.paused){ 
    setTimeout(function(){ 
        video.play();  
    }, 2000);
}
>>>>>>> 9eac45eca6b19325d4451d891fcfce8508967433

function setVisible(target, animate) {
    var stdPos = $(window).scrollTop() + $(window).height();
    if( target.length > 0 ){
        if( stdPos >  target.offset().top ){
            target.addClass('animate__animated animate__' + animate);
        }
    }
}

$(function() {
    $(window).on('scroll', function() {
        setVisible($('section.exhibition'), 'fadeInUp');
        setVisible($('section.collection .con'), 'fadeInUp animate__faster');
        setVisible($('section.collection .antique'), 'fadeInLeft');
        setVisible($('section.collection .modern'), 'fadeInRight');
        setVisible($('section.facility .banner-box'), 'fadeInUp animate__faster');
        setVisible($('section.facility .person'), 'fadeInLeft animate__delay-500ms');
        setVisible($('section.facility .con'), 'fadeInRight animate__delay-1s');
        setVisible($('section.program'), 'fadeInUp animate__faster');
        setVisible($('section.artist'), 'fadeInUp');
    })
})