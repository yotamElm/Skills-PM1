//function Reset() {
   // console.log( document.getElementsByClassName('a').style)
   // document.getElementById("a").style.backgroundColor = "white"
   // document.getElementById("b").style.backgroundColor = "white"
   // document.getElementById("c").style.backgroundColor = "white"

    //document.getElementsByClassName('a').style.backgroundColor = "white";
 //}


 function Reset() {

// this is a comment//

    var elements =document.querySelectorAll('.a,.b,.c')
    for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "white";
	}
 
    /*	var elements = document.getElementsByClassName('.a'); // get all elements
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "white";
	}

    var elements = document.getElementsByClassName('b'); // get all elements
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "white";
	}
    var elements = document.getElementsByClassName('c'); // get all elements
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "white";
	}
    */
}
