function button_clicked(){
    var e = document.getElementById("imageholder");
    e.innerHTML = '<img id="image" src="baby.jpg" alt="no-image" style=" height: 500px; width: 500px; display: block;margin-left: auto;margin-right: auto;width: 50%;">'
    var l = document.getElementById("label");
    l.innerText = "Baby Casey due on the 25th of August!!!!"
    document.getElementById("button").remove();
}