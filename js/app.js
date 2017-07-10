$(function(){

  $('.slides img:first').addClass('top');

  var change = function(){

    var curr = $('.slides img.top')
    var next = curr.next();

    // checks if there is a next element
    if(!next.length){
      next = $('.slides img:first');
      next.addClass('top');

      curr.animate({opacity: 0.0},1000, function(){
        curr.removeClass('top');
        curr.css({opacity: 1.0});
      })

      // curr.removeClass('top');
    }else{
      next.css({opacity: 0.0})
      .addClass('top')
      .animate({opacity: 1.0}, 1000, function(){
          curr.removeClass('top');
        })
      // next.addClass('top');
      // curr.removeClass('top');
    }

  }/*function */

  setInterval(change,3000);

});
