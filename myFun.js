function myFumction()
{
 
	var str = document.getElementById("inputTextToEdit").value;	
	var res = str.replace(/;/gi, "\",\"");
	document.getElementById("inputTextToSave").innerHTML = res;
	alert('There was a problem with the request.');
	
}
