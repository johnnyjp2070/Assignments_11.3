function showAttribute(){
    var id_a = document.getElementById('google').getAttribute('id');
    var target_a = document.getElementById('google').getAttribute('target');
    var href_a = document.getElementById('google').getAttribute('href');

    var di = document.getElementById('attrs');
    di.innerHTML = id_a + "<br>" + target_a + "<br>" + href_a;
};

function removeTag() {
    var div = document.getElementById('attrs');
    div.innerHTML = "";
}