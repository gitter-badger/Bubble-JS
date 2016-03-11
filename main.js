
var nums = document.getElementsByTagName("td");
var index = 0;
var iteration = 9;

this.onload = function(){
	
	for(var i = 0; i < nums.length; i++){
		nums[i].innerHTML = prompt("Enter the number:");
	
	}
	
}

var step = document.getElementById("step");


step.onclick = function(){
	var num1 = parseInt(nums[index].innerHTML);
	var num2 = parseInt(nums[index + 1].innerHTML);
	
	drawColors(index);
	
	if(num1 > num2){
		swap(index,index + 1);
	}
	
	index++;
	
    // if compare all values in iteration
	if(index == iteration){
		index = 0;
		iteration--;
	}
	
	//if done all iteration  
	if(index == iteration && iteration == 0){
		for(var i = 0; i < nums.length; i++){
			nums[i].style.background = "#eee";
			step.disabled = true;
		}
	}
}

//drawing 2 values in yellow, all rest in white
function drawColors(index){
	
	for(var i = 0; i < nums.length; i++){
		
		if(i == index || i == (index + 1)){
			
			nums[i].style.background = "#ff0";
			
		}else{
			nums[i].style.background = "#fff";
		}
	}
	
}

//swapping 2 values in array and drawing them in red
function swap(num1,num2){
	
	nums[num1].style.background = "#f00";
	nums[num2].style.background = "#f00";
	
	var temp = nums[num1].innerHTML;
	nums[num1].innerHTML = nums[num2].innerHTML;
	nums[num2].innerHTML = temp;
	
	
}