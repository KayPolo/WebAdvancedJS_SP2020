// // This function allows me to load things first 
window.addEventListener('DOMContentLoaded', ()=>{
    attachEvents();

     let navOffset = $('nav').offset().top;   


    $(window).scroll(()=>{
        let scrollPos = $(window).scrollTop();
        //console.log(scrollPos);

        let stickNav = $('nav');
        stickyMenu(stickNav);

        let stickMenu = $('.menubar');
        stickyMenu(stickMenu);



        function stickyMenu(stick){
            if(scrollPos >= navOffset){
                stick.addClass("fixed");
            }

        } 

        let linkOne = $("#linkOne").offset().top; 

        if (scrollPos >= linkOne){
            $(".t1").addClass('.appear');
        }
        else{
            $(".t1").removeClass('.appear');
        }


    })

});

// $(document).ready(()=>{
// console.log("It's working");
// });


attachEvents = ()=>{
    // var link =document.getElementsByTagName("a")
    // link.addEventListener('click', ()=>{})

     //Old Syntax
    // $('a').click(function(){
    //     let myTarget = $(this.hash);
    //     myTarget = myTarget.length && myTarget 
    //     console.log(myTarget);

    //     let targetOffset = myTarget.offset().top;
	//        	$('html,body').animate({scrollTop: targetOffset}, 1000);
    // })

    //ES6 Syntax
    $('a').click((e)=>{
        let myTarget = $(e.target.hash);
        myTarget = myTarget.length && myTarget 
        console.log(myTarget);

        let targetOffset = myTarget.offset().top;
	       	$('html,body').animate({scrollTop: targetOffset}, 1000);
    })




    // $('a').click((e)=>{
    //     let myTarget = $(e.target.hash);
    //     myTarget = myTarget.length && myTarget 
    //     console.log(myTarget);

    //     var targetOffset = myTarget.offset().top;
	//        	$('html,body').animate({scrollTop: targetOffset}, 1000);
    // })
}




