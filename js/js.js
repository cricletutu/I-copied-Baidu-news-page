var pa='images/';
var cur_count=0,aa=null;
function setIntervals(){
	interval=setInterval(backBtn,3000);
	}
function clearIntervals(){
	clearInterval(interval);
	}
$(function(){
	$('#back_btn').on('click',backBtn);
	$('#per_btn').on('click',perBtn);
	setIntervals();
	$('#per_btn').hover(function(){
        $(this).attr('src',pa+'btn4.png');
    },function(){
		$(this).attr('src',pa+'btn2.png');
		});
	$('#back_btn').hover(function(){
        $(this).attr('src',pa+'btn3.png');
    },function(){
        $(this).attr('src',pa+'btn1.png');
		});
	
	$('#page_list li').hover(function(){
		var index=$(this).index();
		cur_count=7-index;
		aa=cur_count;
		$('#bg_img').attr('src',pa+'c'+cur_count+'.jpg');
		$(this).children('span').addClass('hover')
		.parent().siblings().children('span')
		.removeClass('hover');
		$('#para').children('p').css('display','none')
		.eq(cur_count).css('display','block');
		})
	$('#bg_img').hover(function(){
		clearIntervals();
		},function(){
			setIntervals();
			})	
	$('#child_title').hover(function(){
		clearIntervals();
		},function(){
			setIntervals();
			})	
	$('.btn').hover(function(){
		clearIntervals();
		},function(){
			setIntervals();
			})	
})
function backBtn(){
	if(aa!=null){
		cur_count=aa;
		cur_count++;
		}else{
			cur_count++;
			}
	//cur_count++;
	console.log(cur_count);
	if(cur_count>7){
		cur_count=0;
		$('#bg_img').attr('src',pa+'c'+cur_count+'.jpg');
		$('#page_list li span').eq(cur_count-1).
		addClass('hover').parent().
		siblings().children('span').
		removeClass('hover');
		$('#para').children('p').css('display','none')
		.eq(cur_count).css('display','block');
		}else{
			$('#bg_img').attr('src',pa+'c'+cur_count+'.jpg');
			$('#page_list li span').eq(cur_count-1).
			addClass('hover').parent().
			siblings().children('span').
			removeClass('hover');
			$('#para').children('p').css('display','none')
			.eq(cur_count).css('display','block');
		}
	}
function perBtn(){
	cur_count--;
	if(cur_count<0){
		cur_count=7;
		$('#bg_img').attr('src',pa+'c'+cur_count+'.jpg');
		$('#page_list li span').eq(cur_count-1).
		addClass('hover').parent().siblings().
		children('span').
		removeClass('hover');
		$('#para').children('p').css('display','none')
		.eq(cur_count).css('display','block');
		}else{
			$('#bg_img').attr('src',pa+'c'+cur_count+'.jpg');
			$('#page_list li span').eq(cur_count-1).
			addClass('hover').parent().
			siblings().children('span').
			removeClass('hover');
			$('#para').children('p').css('display','none')
			.eq(cur_count).css('display','block');
		}
	}