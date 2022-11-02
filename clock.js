<script>
function clockFunction() {
    const timer = new Date();
    var h = timer.getHours(h);
    var m = timer.getMinutes(m);
    var s = timer.getSeconds(s);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById
    ("clock").innerHTML = 
    h + ":" + m + ":" + s;
    setTimeout(clockFunction,1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i}
    return i;
}
</script>
