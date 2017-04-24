var changed = true;
var list = ["Apple", "Pear", "Berry", "Plum"] 
alphabetize(list)
function alphabetize(x){
	while(changed){
		changed = false
			for(var i = 0; i < list.length;i++){
				if(list[i] > list[i + 1]){
			
					var temp = x[i + 1];
					x[i + 1] = x[i]
					x[i] = temp
					changed = true
				
		}
	}
	
	}
	for(var i = 0; i < list.length;i++){
	document.write(list[i]);
	}
 }