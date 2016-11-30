//single click
/*$('div').click(function() {
  var clicks = $(this).data('clicks');
  if (clicks) {
     // odd clicks
	$(window).mousemove(function(e){ $('.cube').css('transform', 'rotateX(' + - e.pageY + 'deg)' + 'rotateY(' + e.pageX + 'deg)'); });
	} else {
     // even clicks
	$(window).unbind('mousemove')
	}
  $(this).data("clicks", !clicks);
});*/

//single & double click
$(".cube").bind("click", function(){
	$(window).mousemove(function(e){ $('.cube').css('transform', 'rotateX(' + - e.pageY + 'deg)' + 'rotateY(' + e.pageX + 'deg)'); });
});

$("*:not(body)").bind("dblclick", function(){
	$(window).unbind('mousemove')
});

//single & double click
$(".cube2").bind("click", function(){
	$(window).mousemove(function(e){ $('.cube2').css('transform', 'rotateX(' + - e.pageY + 'deg)' + 'rotateY(' + e.pageX + 'deg)'); });
});

$("*:not(body)").bind("dblclick", function(){
	$(window).unbind('mousemove')
});

//drag cube1
$(function () {
    $('body').on('mousedown', '.cube', function() {
        $(this).addClass('draggable').parents().on('mousemove', function(e) {
            $('.draggable').offset({
                top: e.pageY - $('.draggable').outerHeight() / 2,
                left: e.pageX - $('.draggable').outerWidth() / 2
            }).on('mouseup', function() {
                $(this).removeClass('draggable');
            });
        });
        e.preventDefault();
    }).on('mouseup', function() {
        $('.draggable').removeClass('draggable');
    });
});

//drag cube2
$(function () {
    $('body').on('mousedown', '.cube2', function() {
        $(this).addClass('draggable').parents().on('mousemove', function(e) {
            $('.draggable').offset({
                top: e.pageY - $('.draggable').outerHeight() / 2,
                left: e.pageX - $('.draggable').outerWidth() / 2
            }).on('mouseup', function() {
                $(this).removeClass('draggable');
            });
        });
        e.preventDefault();
    }).on('mouseup', function() {
        $('.draggable').removeClass('draggable');
    });
});