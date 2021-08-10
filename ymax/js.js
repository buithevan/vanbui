$(document).ready(function(){
    /*--------------Menu-------------*/
    // $(".menu-toggle-btn").click(function(){
    //    $(this).toggleClass("fa-times");
    //    $(".nav-main").toggleClass("active");
      
      
    // });

    /*-----------TabSlider-----------*/

    $('.product:first').show()
    $('.tabs li:first').addClass('active')
    $('.tabs li').click(function (event) {
        index=$(this).index();
        $('.tabs li').removeClass('active');
        $(this).addClass('active');
        $('.product').hide();
        $('.product').eq(index).show();
    });

   
    
   


    $('.single-item').slick({
        dots:true,
        autoplay: true,
        autoplaySpeed: 3000
    });
    


    /*-----------Auto Slider---------*/
    // var counter =1;
    // setInterval(function(){
    //    document.getElementById('radio'+counter).checked=true;
    //    counter++;
    //    if(counter>3){
    //        counter=1;
    //    }
       
      
    // },3000 );
});


