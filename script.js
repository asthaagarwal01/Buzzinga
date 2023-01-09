var sec=document.getElementById("secs");
var min=document.getElementById("mins");
var s;
var m;
var mi=document.getElementById("in2").value;
alert("hellow");
function start()
{
    clearInterval(intr);
    intr=setInterval(clock,0);
    alert("hello");
}

function clock()
{
    s++;
    if(s<9)
    sec.innerHTML="0"+s;
    else if(s>9 && s<=60)
    sec.innerHTML=s;
    else if(s>60)
    {
        s=0;
        sec.innerHTML="0"+s;
        m++;
        if(m==mi)
        clearInterval(intr);
        if(m<9)
        min.innerHTML="0"+m;
        else if(m>9 && m<=60)
        min.innerHTML=m;
        
        
    }

}