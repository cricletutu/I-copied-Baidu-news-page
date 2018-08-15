// JavaScript Document
$(function(){
	$("#row_1 td").hover(function() {
		index_1=$(this).index();
        $("#row_1 td").eq(index_1).children('.bg').addClass('runmove');
    },function(){
		$(this).children('img').removeClass('runmove');
	});
	$("#row_2 td").hover(function() {
		index_2=$(this).index();
        $("#row_2 td").eq(index_2).children('.bg').addClass('runmove');
    },function(){
		$(this).children('img').removeClass('runmove');
	});
	/*导航条运动*/
	var cur_width=0,cur_left=0;
	$('#main_list li a').on({
	'mouseover':function(){
		hd_width=$(this).outerWidth();
		hd_left=getElementLeft(this);
		$('#huadong').show();
		$('#huadong').stop().animate({'width':hd_width+'px',
		'left':hd_left+'px'
		},150);
		},
	'click':function(){
		$('#main_list a').removeClass('hover');
		$(this).addClass('hover');
		cur_width=$(this).outerWidth();
		cur_left=hd_left;
		}
	})
	
	$('#main_list').on({
		'mouseout':function(){
		$('#huadong').show();
		$('#huadong').stop().animate({'width':cur_width+'px',
		'left':cur_left+'px'
		},250);
		}
	})
})
function getElementLeft(element){
	var left=0;
	var listmeun=$(element).parent().prevAll();
	$.each(listmeun,function(index,ele){
		left+=$(ele).width();
		})
		return left;
	}
	
$(function(){
	var sets=null;
	$('#goTop li').on({
		'mouseenter':function(){
			links=$(this).children('a');
			index_1=$(this).index();
			var rt=$(this).position().top;
			var rw=$(this).width();
			var rh=$(this).height();
			$(this).children('a').addClass('cur_active');
			if(sets==null){		
				}else{
				clearTimeout(sets);
				}
			if(index_1==1){
				$('#tip').show();
				}else{
					sets=setTimeout("$('#tip').hide()",500);
					}
			},
		'mouseleave':function(){
			$(this).children('a').removeClass('cur_active');
			if(index_1==1){
				sets=setTimeout("$('#tip').hide()",500);
				}
			if(index_1==0){	
				links.css('top','75px');
				}else{
					links.css('top','48px');
					}
			}
		})
		$('#tip').hover(function(){
		clearTimeout(sets);
		$('#tip').show();
		},function(){
			sets=setTimeout("$('#tip').hide()",500);
			})  
	})
	$(window).on('scroll',function(){
			var scrollT=getScrollTop();
			if(scrollT>225){
				$('.goTop').stop().animate({
					'height':'334px'
					},300);
				}else{
					$('.goTop').stop().animate({
					'height':'270px'
					},500);
					}
			})
	//回到页面顶部  
    $("#goTotop").click(function(){  
        $('body,html').animate({scrollTop:0},500); //点击按钮让其回到页面顶部  
    });
	
/** 
 * 获取滚动条距离顶端的距离 
 * @return {}支持IE6 
 */  
function getScrollTop() {  
        var scrollPos;  
        if (window.pageYOffset) {  
        scrollPos = window.pageYOffset; }  
        else if (document.compatMode && document.compatMode != 'BackCompat')  
        { scrollPos = document.documentElement.scrollTop; }  
        else if (document.body) { scrollPos = document.body.scrollTop; }   
        return scrollPos;   
}  


