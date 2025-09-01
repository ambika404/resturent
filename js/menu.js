$(document).ready(function (){
    // alert("js")
    $('.breakfast').on('click',function(){
        $('.allpart').hide();
        $('.breakfast').show();
        $('.break-part').show();
        $('.breakfast')
        .css({backgroundColor:'brown'})
         $('.all-bt')
        .css({backgroundColor:'#474747'})
        $('.all-bt').on('click',function (){
            $('.hide-part').hide();
            $('.allpart').show();
        })
    })

    $('.main-di').on('click',function(){
        $('.allpart').hide();
        $('.main-dish').show();
        $('.break-bt').show();
         $('.breakfast')
        .css({backgroundColor:'#474747'})
                $('.main-di')
        .css({backgroundColor:'brown'})
    })

    $('.drink').on('click',function(){
        $('.allpart').hide();
         $('.breakfast').hide();
        $('.break-part').hide();
         $('.drink').show();
         $('.break-bt').show();
          $('.all-bt')
        .css({backgroundColor:'#474747'})
        $('.break-bt')
        .css({backgroundColor:'#474747'})
         $('.main-di')
        .css({backgroundColor:'#474747'})
         $('.drink-bt')
        .css({backgroundColor:'brown'})

    })


    $('.dessert').on('click',function(){
         $('.allpart').hide();
         $('.breakfast').hide();
        $('.break-part').hide();
         $('.drink').hide();
         $('.dessert').show();
         $('.drink-bt').show();
         $('.break-bt').show();
         

          $('.drink-bt')
        .css({backgroundColor:'#474747'})
         $('.breakfast')
        .css({backgroundColor:'brown'})
         $('.break-bt')
        .css({backgroundColor:'#474747'})
         $('.all-bt')
        .css({backgroundColor:'#474747'})
         $('.main-di')
        .css({backgroundColor:'#474747'})
         $('.des-bt')
        .css({backgroundColor:'brown'})
        $('.all-bt').on('click',function (){
            $('.dessert').hide();
            $('.allpart').show();
        })

        $('.all-bt').on('click',function(){
            $('.all-bt').show();
            $('.break-bt').show();
            $('.main-di').show();
            $('.drink-bt').show();
            $('.dessert').show();
            $('.all-bt')
        .css({backgroundColor:'#474747'})
         $('.break-bt')
        .css({backgroundColor:'#474747'})
         $('.main-di')
        .css({backgroundColor:'#474747'})
         $('.drink-bt')
        .css({backgroundColor:'#474747'})
        $('.des-bt')
        .css({backgroundColor:'#474747'})
         $('.all-bt')
        .css({backgroundColor:'brown'})
        })
    })

})