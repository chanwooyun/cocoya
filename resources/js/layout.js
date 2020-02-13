

$(function(){
	// nav
	$('#nav li.current').addClass('active');
	$('#nav-sub').addClass($('#nav li.current .headlink').attr('rel'));
	$('#header').mouseleave(function(){
		$('#main-nav-sub').stop().animate({top:-231}, {duration:200});
		$('#main-nav-sub').stop().animate({top:-231},{duration:200, complete:function(){$('#nav li.current ul').show();}});
		$('#nav li').removeClass('active');
		$('#nav li.current').addClass('active');
	});
	$('#nav > ul > li > a').mouseover(function(){
		var index = $(this).parent().index();
		var navNo = $(this).attr('rel');
		$('#nav li ul').hide();
		$('#nav li').removeClass('active');
		$(this).parent().addClass('active');
		$('#main-nav-sub dl').hide();
		$('#main-nav-sub .' + navNo).show();
		$('#main-nav-sub').stop().animate({top:104}, {duration:200});
		$('#main-nav-sub ul').removeClass('active');
		$('#main-nav-sub ul').eq(index).addClass('active');
	});
	$('#main-nav-sub ul').mouseover(function(){
		var index = $(this).attr('rel');
		$('#main-nav-sub dl').hide();
		$('#main-nav-sub dl').eq(index).show();
		$('#main-nav-sub ul').removeClass('active');
		$(this).addClass('active');
		$('#nav > ul > li').removeClass('active');
		$('#nav > ul > li').eq(index).addClass('active');
	});
	
	
	$('.main-product .header a').click(function(){
		var tabNo = $(this).attr('href');
		$('.main-product .header a').removeClass('active');
		$(this).addClass('active');
		$('.main-product ul').hide();
		$(tabNo).show();
		return false;
	});

	


});