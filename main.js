var names = [];
function submit(){
    // var display_name_guest_array=[];
    var Guest_Name = document.getElementById("name").value;
    names.push(Guest_Name);
    console.log(Guest_Name);
    
    
    console.log(names);
    var length = names.length;
    console.log(length);

    document.getElementById("dn").innerHTML = names.toString();

}


 function show(){
    var i = names.join("<br>");
    console.log(names);
    document.getElementById("dn").innerHTML= i.toString();
 }
