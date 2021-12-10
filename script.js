function copy(){
    var link = document.getElementById("linkField");
    link.select();
    navigator.clipboard.writeText(link.value);
}