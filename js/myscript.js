		$(function(){

			// gnb 클릭시 호버활성화
			var menu =$("#gnb li");
			var ht =$(window).height();
			$(window).resize(function(){
				ht =$(window).height();
			})

			menu.click(function(){
				var tg =$(this);
				var i =tg.index();
				var nowTop =ht*i;

			menu.removeClass("active");
			tg.addClass("active");

			//  gnb 클릭시 호버 활성화 다른방법
			// var nav=$("#gnb li");

   //          nav.click(function(){
   //             nav.removeClass("active");
   //             $(this).addClass("active");

			// 버튼클릭시 해당 컨텐츠로 스르륵이동
			$("html,body").animate({scrollTop:nowTop});
			})

			$(window).scroll(function(){
				var myScrollTop = $(window).scrollTop();
				if(myScrollTop>=0 && myScrollTop<ht){
					menu.removeClass("active");
					menu.eq(0).addClass("active");
				}else if(myScrollTop>=ht && myScrollTop<ht*2){
					menu.removeClass("active");
					menu.eq(1).addClass("active");
				}else if(myScrollTop>=ht*2 && myScrollTop<ht*3){
					menu.removeClass("active");
					menu.eq(2).addClass("active");
				}else{
					menu.removeClass("active");
					menu.eq(3).addClass("active");
				}
			})
			//마우스휠에 반응하여 스르륵 이동
			$("section").on("mousewheel",function(event, delta){
				if(delta>0){
					//마우스휠을 올렸을 때 실행구문
					var prev = $(this).prev().offset().top;
					$("html,body").stop().animate({"scrollTop":prev},500,"linear");
				}else if(delta<0){
					//마우스휠을 내렸을 때 실행구문
					var next = $(this).next().offset().top;
					$("html,body").stop().animate({"scrollTop":next},500,"linear");
				}
			})

			// FAQ
			$(".delivery").hide();
			$(".faq_bt_1").click(function(){
				$(".delivery").show();
			})
			$(".delivery_x_btn").click(function(){
				$(".delivery").hide();
			})

			$(".cancel").hide();
			$(".faq_bt_2").click(function(){
				$(".cancel").show();
			})
			$(".cancel_x_btn").click(function(){
				$(".cancel").hide();
			})

			$(".money").hide();
			$(".faq_bt_3").click(function(){
				$(".money").show();
			})
			$(".money_x_btn").click(function(){
				$(".money").hide();
			})

			$(".x_btn").click(function(){
				$(".event").hide();
			})


			// 나만의 케이크 탭 케로셀 
			var step1_img = $(".content .step1 li");
			var step2_img = $(".content .step2 li");
			var step3_img = $(".content .step3 li");
			var step5_img = $(".content .step5 li");
			var carousel_Btn=$(".content .step1_btn_set li");
			var current=0;
	

			carousel_Btn.click(function(){
				var tg = $(this);
				var i =tg.index();
				

				if(current==i) return 0;
		
				move(i);

				function move(i){

					var currentImg1 = step1_img.eq(current);
					var nextImg1 =step1_img.eq(i);
					var currentImg2 =step2_img.eq(current);
					var nextImg2 =step2_img.eq(i);
					var currentImg3 =step3_img.eq(current);
					var nextImg3 =step3_img.eq(i);
					var currentImg4 =step5_img.eq(current);
					var nextImg4 =step5_img.eq(i);

					currentImg1.css("left",0).animate({"left":"-100%"});
					nextImg1.css("left","100%").animate({"left":0});
					currentImg2.css("left",0).animate({"left":"-100%"});
					nextImg2.css("left","100%").animate({"left":0});
					currentImg3.css("left",0).animate({"left":"-100%"});
					nextImg3.css("left","100%").animate({"left":0});
					currentImg4.css("left",0).animate({"left":"-100%"});
					nextImg4.css("left","100%").animate({"left":0});
					current=i;
				}
			})

			// 리뷰 케로셀
			var carousel_img =$(".write li");
			var carousel_btn =$(".write_btn li");
			var current = 0;
			var i=0;

			carousel_btn.click(function(){
				var tg =$(this);
				var i =tg.index();
				if(current==i) return 0; 

				move(i);

				function move(i){
					var currentImg = carousel_img.eq(current);
					// 현재보여지고있는 이미지
					var nextImg = carousel_img.eq(i);
					currentImg.stop().css("left",0).animate({"left":"-100%"});
					nextImg.stop().css("left","100%").animate({"left":0});
					current = i;
				}
			})
			// 나만의 특별한 케이크
			$(".special_cake").hide();
			$(".special_btn").click(function(){
				$(".special_cake").show();
			})
			$(".special_cake_x_btn").click(function(){
				$(".special_cake").hide();
			})
		
			var contents =$("#tab_contents .content");
			var tb =$("ul li");

			contents.hide();
			contents.eq(0).show();

			tb.click(function(){
				var i =$(this).index();

				contents.hide();
				contents.eq(i).show();

				tb.removeClass("active");
				tb.eq(i).addClass("active");
			})

			var step1_user_val = $(".receipt input:nth-child(1)");
			var step2_user_val = $(".receipt input:nth-child(3)");
			var step3_user_val = $(".receipt input:nth-child(5)");
			var step4_user_val = $(".receipt input:nth-child(7)");
			var step5_user_val = $(".receipt input:nth-child(9)");
			var sum_btn = $("#sum_btn");
			var sum_result = $("#sum_result");
			var step1_cost = 0 ;
			var step2_cost = 0 ;
			var step3_cost = 0 ;
			var step4_cost = 0 ;
			var step5_cost_1 = 0 ;
			var step5_cost_2 = 0 ;
			var step5_cost_3 = 0 ;

			// 나의 특별한 케이크 선택완료창
			$(".content .step1 li").click(function(e){
				step1_cost = $(this).attr("data-cost");
				alert("선택완료! 다음단계로 넘어가요 :)");
				e.preventDefault();
				step1_user_val.attr("value",step1_cost);zr
			})
			$(".content .step2 li").click(function(e){
				step2_cost = $(this).attr("data-cost");
				alert("선택완료! 다음단계로 넘어가요 :)");
				e.preventDefault();
				step2_user_val.attr("value",step2_cost);
			})
			$(".content .step3 li").click(function(e){
				step3_cost = $(this).attr("data-cost");
				alert("선택완료! 다음단계로 넘어가요 :)");
				e.preventDefault();
				step3_user_val.attr("value",step3_cost);
			})
			$(".content .step4_check").click(function(e){
				step4_cost = $(this).attr("data-cost");
				alert("선택완료! 다음단계로 넘어가요 :)");
				e.preventDefault();
				$("textarea").val("");
				step4_user_val.attr("value",step4_cost);
			})

			var step5_cost_1_sum = 0;
			var step5_cost_2_sum = 0;
			var step5_cost_3_sum = 0;

			$(".content .step5 li").click(function(e){
				if($(this).index()==0){
					step5_cost_1 = Number($(this).attr("data-cost"))
					step5_cost_1_sum+=step5_cost_1;
				}else if($(this).index()==1){
					step5_cost_2 = Number($(this).attr("data-cost"));
					step5_cost_2_sum+=step5_cost_2;
				}else if($(this).index()==2){
					step5_cost_3 = Number($(this).attr("data-cost"));
					step5_cost_3_sum+=step5_cost_3;
				}
				step5_cost = step5_cost_1_sum + step5_cost_2_sum + step5_cost_3_sum;
				
				// step5_cost = step5_cost);
				alert("선택완료! 추가옵션을 더 선택하거나 우측 영수증의 총합버튼을 클릭하여 총결제액을 확인해 주세요 :)");
				e.preventDefault();
				step5_user_val.attr("value",step5_cost);
			})

			//총합버튼 클릭
			sum_btn.click(function(e){
				e.preventDefault();
				step1_cost = Number(step1_cost);
				step2_cost = Number(step2_cost);
				step3_cost = Number(step3_cost);
				step4_cost = Number(step4_cost);
				step5_cost = Number(step5_cost);

				var user_sum =  step1_cost+step2_cost+step3_cost+step4_cost+step5_cost;
				sum_result.attr("value",user_sum);
				alert("최종금액 확인 후 결제를 진행해 주세요 :)");
			})

			// 리뷰 작성 완료창
			$("#review input").click(function(e){
				alert("소중한 리뷰 감사합니다.");
				e.preventDefault();
				$("textarea").val("");
			})

			// 오늘의 케이크 이벤트 선택고정 
			var cake_img =$(".cake_img li");
			$(".cake_check").hide();
			cake_img.eq(0).click(function(){
				cake_img.css("background-image","");
				$(this).css("background-image","url(../img/sub/cake_1_hover.png)");
				$(".cake_check").show();
				// $("#write").val("");
			})
			$(".cake_check input#confirmBtn").click(function(e){
				alert("참여되었습니다. 감사합니다.");
				e.stopPropagation();
				e.preventDefault();
				$(".cake_check").hide();
			})
			$(".cake_check").hide();
			cake_img.eq(1).click(function(){
				cake_img.css("background-image","");
				$(this).css("background-image","url(../img/sub/cake_2_hover.png)");
				$(".cake_check").show();
			})
			$(".cake_check").hide();
			cake_img.eq(2).click(function(){
				cake_img.css("background-image","");
				$(this).css("background-image","url(../img/sub/cake_3_hover.png)");
				$(".cake_check").show();
			})

			// 동영상 숨기기
			$(".vedio_cancel_x_btn").click(function(){
				$(".vedio").hide();
			})
		
	})