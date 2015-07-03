
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
/*			$(function(){
				$('button').click(function(e) {
                    alert('亲，暂时还没有添加这个功能，敬请期待')
                });	
			})
*/			
		
		


		$(function(){
		function fn(){
			
				
				/*通过加工函数做入场延时*/
				$('.photos__list li').each(function(index, el) {
					$(el).css({'-ms-transform': 'translateX(0px)','-ms-transition-delay':index*500+'ms'})
					$(el).css({'-o-transform': 'translateX(0px)','-o-transition-delay':index*500+'ms'})
					$(el).css({'-moz-transform': 'translateX(0px)','-moz-transition-delay':index*500+'ms'})
					$(el).css({'-webkit-transform': 'translateX(0px)','-webkit-transition-delay':index*500+'ms'})
					$(el).css({'transform': 'translateX(0px)','transition-delay':index*500+'ms'})
				});
				
				
					$('.box_img.magictime').hover(function(e) {
					$(this).addClass('rotateRight')
				},function(){
					$(this).removeClass('rotateRight')
				});
	

			
				//$('.photos__list li').hover(function(){
//					// 鼠标移上，兄弟变成半透明
//					 $(this).siblings().children().stop().fadeTo(500,0.3)
//					
//					/* $(this).stop().fadeTo(500,1).siblings().fadeTo(500,0.3)*/	
//				},function(){
//					// 鼠标离开，所有li变成不透明
//					$('.photos__list li img').stop().fadeTo(500,1)
//				})/*.click(function(){
//					$(this).children().stop().slideUp().slideDown()
//				})*/
//			
				
	
			
		
		}		
			var num02=$('.education-experience__title').offset().top
			$(window).scroll(function(){
				if($(this).scrollTop()>=num02){
					fn();
			}
			})
		
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
    

