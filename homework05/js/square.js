
		
		// 50개의 작은네모를 위치랜덤으로 반복생성하는 함수
		function addSquare(){
			for(var i=0; i<50; i++){
				var index = 0; //zindex를 0으로 초기화 
				// newSquare 객체 생성 : 작은네모를 의미하는 <div> 
				var newSquare = document.createElement("div");
				
				//큰 네모(id: myCanvas)<div>의 자식요소로 newSquare(작은네모 <div>) 추가하기.
				document.getElementById("myCanvas").appendChild(newSquare); 
			
				//작은네모<div>들을 의미하는 allItems 리스트를 생성 
				var allItems = document.querySelectorAll("div div div");
				
				//i번째 allItems의 class name을 coloredSquare로 지정 
				allItems[i].className = 'coloredSquare rounded';
				
				
				//i번째 allItems의 id속성을 i로 지정
				allItems[i].setAttribute("id",i);
				
				//작은네모의 css를 변경하여 위치를 랜덤으로 지정 
				$(".coloredSquare").css("left", function(k){
					return k + Math.floor((Math.random()*400)); });
				$(".coloredSquare").css("top", function(k){
					return k + Math.floor((Math.random()*300)); });
				
				//클릭한 요소 맨앞으로 보내기 
				$(allItems[i]).css("z-index", index);
				
				$(allItems[i]).click(function(){
					$(this).css("z-index", index++);
				});
				
				//더블클릭한 요소 삭제하기 
				$(allItems[i]).dblclick(function(){
					$(this).remove();
				})
				
				};
			}
		
	
		// 작은네모 각각 색을 랜덤변경하는 함수 
		function changeColors(){
			
			//작은네모<div>들을 의미하는 allItems 리스트를 생성 
			var allItems = document.querySelectorAll("div div div");
			
			//작은 네모 하나씩 색변경 
			for(var i=0; i < allItems.length; i++){
				//색을 랜덤생성 
				var index = 0; //zindex를 0으로 
				var randomColor = Math.floor(Math.random()*16777215).toString(16);	
				$(allItems[i]).css("background-color",'#' + randomColor);
				
				//클릭한 요소 맨앞으로 보내기
				$(allItems[i]).css("z-index", index);
				
				$(allItems[i]).click(function(){
					$(this).css("z-index", index++);
				});
			}
			//다시 addsquare눌렀을때 색 원상복구하기
			$("#add").click(function(event){
				$(allItems).css("background-color","#85e085");
			})
			
			

			}
			
		
		


	