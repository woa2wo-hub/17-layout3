
let number = 0



$('.btn_next').click(function(){
    number = number + 1
    if(number == 3){
        number = 0
    }
    $('.hero ul').css({marginLeft:(-number*100)+'%'})
    console.log(number)
})


$('.btn_prev').click(function(){
    number = number - 1
    if(number == -1){
        number = 2
    }
    $('.hero ul').css({marginLeft:-(number*100)+'%'})
})


// if(조건){실행}
// a>b
// a<b
// a<=b
// a>=b
// a==b
// a!==b