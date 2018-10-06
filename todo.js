let name = prompt("What's Your Name","Your Name");
//var name = "saksham";
let time = new Date();	
let greet,i;
let list = [];


if((time.getHours()) > 12){
	greet = "Good Evening, " + name+ "!";
	document.getElementById("time").innerHTML= time.getHours()+":"+time.getMinutes()+" pm";
	document.getElementById("greet").innerHTML = greet;
}
else{
	greet = "Good Morning, " + name + "!";
	document.getElementById("time").innerHTML= time.getHours()+":"+time.getMinutes()+" am";
	document.getElementById("greet").innerHTML = greet;
}

document.getElementById("last").innerHTML=`Thank You for Visiting Us,${name}......`;

function add(){
	var title = prompt("Enter The Message..");
	if(title ==""){
		alert("Please Enter The Appropriate Message..");
	}
	else{
			list.push(title);}							
}
function listShow(list){
	var text="<ul>";
	alert("Give us a moment....");
	document.getElementById('listBox').style.display="block";
	for (i=0; i<list.length; i++){
	text += "<li>" +"   "+list[i] + "<br>" +"</li>";
}
	text+="</ul>"
    document.getElementById("list").innerHTML = text;
	document.getElementById("list").style.display="block";

}
 var deletetodo = function(todos){
 	var title = prompt("Enter the todo to delete or the number of sequence");
	var index = todos.findIndex(function(todo){
		return todo.toLowerCase()===title.toLowerCase();
	})
	if(index!= -1){
	return todos.splice(index,1);}
}

	
	

	




