AOS.init(1200);
function icon(){
    var a=document.getElementsByClassName("icon");
    for(var i of a)
    {
        i.style.color="red";
    } 
}

function icon1(){
    var a=document.getElementsByClassName("icon1");
    for(var i of a)
    {
        i.style.color="red";
    } 
}
function icon2(){
    var a=document.getElementsByClassName("icon2");
    for(var i of a)
    {
        i.style.color="red";
    } 
}
function validate()
{
    var pie=document.f1.pies.value;
    if(isNaN(pie))
    {
        document.getElementById("numerr").innerHTML="*Enter only the number";
        return false;
    }
    else
    {
        displayAmt();
        return true;
    }
}

function displayAmt()
{
    var siz=document.f1.size1.value;
    var amt=0;
    var brand=document.f1.brd.value;
    var mdl=document.f1.model.value;
    var pie=document.f1.pies.value;
    if(siz==32)
    {
        if (mdl=="LED")
        {
            if(brand=="sony")
            {
                amt= 28000;
            }
            else if(brand=="lg")
            {
                amt= 27000;
            }
            else
            {
                amt= 22000;
            }
        }
        else if(mdl=="OLED")
        {
            if(brand=="sony")
            {
                amt= 32000;
            }
            else if(brand=="lg")
            {
                amt= 30000;
            }
            else
            {
                amt= 23000;
            }
        }
        else
        {
            if(brand=="sony")
            {
                amt= 33000;
            }
            else if(brand=="lg")
            {
                amt= 31000;
            }
            else
            {
                amt= 25000;
            }
        }
    }
    else if(siz==48)
    {
    if (mdl=="LED")
    {
    if(brand=="sony")
    {
    amt= 38000;
    }
    else if(brand=="lg")
    {
    amt= 37000;
    }
    else
    {
    amt= 32000;
    }
    }
    else if(mdl=="OLED")
    {
        if(brand=="sony")
        {
            amt= 42000;
        }
        else if(brand=="lg")
        {
            amt= 40000;
        }
        else
        {
            amt= 43000;
        }
    }
    else
    {
        if(brand=="sony")
        {
            amt= 43000;
        }
        else if(brand=="lg")
        {
         amt= 41000;
        }
        else
        {
            amt= 35000;
        }
    }
}
    else
    {
        document.getElementById("number").innerHTML="*other size is unavailable";
        return false;
    }
    rate=amt*pie;
    alert("You have to Pay Rs."+rate);
    window.open("welcome.html");
}
