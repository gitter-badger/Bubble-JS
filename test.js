describe('swap',function(){
	
	var array = [5,8,0,9];
	var num1 = 1;
	var num2 = 2;
	
	var startNum1 = array[num1];
	var startNum2 = array[num2];
	
	var temp = array[num1];
	array[num1] = array[num2];
	array[num2] = temp;
	
	var endNum1 = array[num1];
	var endNum2 = array[num2];
	
	it('should swap correctly', function(){
		
		assert(startNum1 == endNum2 && startNum2 == endNum1);
	});
});