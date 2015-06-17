
		$(function(){
			
			//这是固定导航栏
			var num=$('.main-nav').offset().top
			$(window).scroll(function(e) {
			
            if($(this).scrollTop()>=num){
				$('.main-nav').addClass('main-nav-move')	
				$('.whatido').css({"margin-top":"40px"})
			}else{
				$('.main-nav').removeClass('main-nav-move')
				$('.whatido').css({"margin-top":"0px"})	
		
			}
			})
			
			//这是导航栏效果
			 var index=0;
			 var num01=$(".main-nav li").width()+4;
			$(".main-nav li").click(function(){
				index=$(".main-nav li").index(this);
				$(".main-nav li").eq(index).addClass("cur").siblings(".main-nav li").removeClass("cur");
				$(".float").stop(true).animate({"left":(index*(num01))+"px"},400);
			});
			$(".main-nav li").mouseover(function(){
				$(".float").stop(true).animate({"left":($(".main-nav li").index(this)*(num01))+"px"},400);
			})
			$(".main-nav li").mouseleave(function(){
				$(".float").stop(true).animate({"left":(index*(num01))+"px"},400);
			})
			
			//这是按钮提醒
			$(function(){
				$('button').click(function(e) {
                    alert('亲，暂时还没有添加这个功能，敬请期待')
                });	
			})
			
			
			//这是返回顶部
			$(function(){
        /* 判断滚动条位置 */
            $(window).scroll(function(){	
                if($(this).scrollTop()!=0){		
                    $("#gototop").addClass("show");
                }else{
                    $("#gototop").removeClass("show");	
                }
            })
        /* 返回顶部 */
            $("#gototop").click(function() {
                $('body,html').animate({scrollTop:0},500);
            })
        })
			
    	
        });
    

