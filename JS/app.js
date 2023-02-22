$(document).ready(function(){
    $('#eye').click(function(){
        $(this).children('i').toggleClass('fa-eye-slash fa-eye')
        if($(this).children('i').hasClass('far fa-eye-slash')){
            $(this).prev().attr('type','text');
        }
        else{
            $(this).prev().attr('type','password');
        };
    });
});
