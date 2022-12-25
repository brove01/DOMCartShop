var f=false;
var k=false;
function incrementBtn(){
    var e1=document.getElementById("id1");
    value=e1.innerHTML;
    value;
    value++;
    document.getElementById("id1").innerHTML=value;
    var e1m=document.getElementById("price");
    var price=e1m.innerHTML;
    var total=parseFloat(price)+2.99;
    document.getElementById("price").innerHTML=parseFloat(total).toFixed(2);
    
}
function decrementBtn(){
    var e1=document.getElementById("id1");
    value=e1.innerHTML;
    if(value>1){
        value--;
    }
    document.getElementById("id1").innerHTML=value;
    var e1m=document.getElementById("price");
    var price=e1m.innerHTML;
    var total=price-2.99;
    if(total<2.99){
        total+=2.99;
    }
    document.getElementById("price").innerHTML=parseFloat(total).toFixed(2);
}
function incrementBtn2(){
    var e2=document.getElementById("id2");
    value=e2.innerHTML;
    value++;
    document.getElementById("id2").innerHTML=value;
    var e2m=document.getElementById("price2");
    var price=e2m.innerHTML;
    var total=parseFloat(price)+3.19;
    document.getElementById("price2").innerHTML=parseFloat(total).toFixed(2);
}
function decrementBtn2(){
    var e2=document.getElementById("id2");
    value=e2.innerHTML;
    if(value>1){
        value--;
    }
    
    document.getElementById("id2").innerHTML=value;
    var e2m=document.getElementById("price2");
    var price=e2m.innerHTML;
    var total=price-3.19;
    if(total<3.19){
        total+=3.19;
    }
    document.getElementById("price2").innerHTML=parseFloat(total).toFixed(2);
}
function removeAll(){
    el1=document.getElementById("one");
    el2=document.getElementById("two");
    par=document.getElementById("main");
    par.removeChild(el1);
    par.removeChild(el2);
    var x=document.getElementById("totalprice");
    var total=x.innerHTML;
    total=0;
    document.getElementById("totalprice").innerHTML=parseFloat(total).toFixed(2);
    var y=document.getElementById("it");
    var titem=y.innerHTML;
    titem=0;
    document.getElementById("it").innerHTML=parseFloat(titem);
}
function removeItm1(){
    el=document.getElementById("pf1");
    par=document.getElementById("one");
    par.removeChild(el);
    var y=document.getElementById("it");
    var titem=y.innerHTML;
    if (titem==1 || titem==0){
        titem=0;
    }else{
        titem=1;
    }
    var price=0;
    document.getElementById("it").innerHTML=parseFloat(titem);
    document.getElementById("price").innerHTML=parseFloat(price).toFixed(2);
    
   }
   
  
function removeItm2(){
    el=document.getElementById("pf2");
    par=document.getElementById("two");
    par.removeChild(el);
    
    var y=document.getElementById("it");
    var titem=y.innerHTML;
    if (titem==1 || titem==0){
        titem=0;
    }else{
        titem=1;
        
    }
   
    var price=0;
    document.getElementById("it").innerHTML=parseFloat(titem);
    document.getElementById("price2").innerHTML=parseFloat(price).toFixed(2);
    
}
function check(){
    var x=document.getElementById("totalprice");
    var total=x.innerHTML;
    var e1m1=document.getElementById("price")
    var price1=e1m1.innerHTML;
    var e1m2=document.getElementById("price2")
    var price2=e1m2.innerHTML;
    
    total=Number(price1)+Number(price2);
    document.getElementById("totalprice").innerHTML=parseFloat(total).toFixed(2);

}
function heart1(){
    var col=document.getElementById("he1");
    col.style.color="red";
}
function antiheart1(){
    var col=document.getElementById("he1");
    col.style.color="blue";
}
function heart2(){
    var col=document.getElementById("he2");
    col.style.color="red";
}
function antiheart2(){
    var col=document.getElementById("he2");
    col.style.color="blue";
}
