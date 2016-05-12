var createMask=(function(pvalue,buttonvalue,fn,hasclose,closefn){
	var maskdiv;
  var p;
  var div;
  var i;
  var button; 
	return function(pvalue,buttonvalue,fn,hasclose,closefn){
		if(!maskdiv){
           maskdiv=document.createElement('div');
           maskdiv.style.width=document.body.clientWidth > window.innerWidth ? (document.body.clientWidth+"px"):(window.innerWidth+"px");
           maskdiv.style.height=document.body.clientHeight > window.innerHeight ? (document.body.clientHeight+"px"):(window.innerHeight+"px");
           maskdiv.style.position="absolute";
           maskdiv.style.top=0;
           maskdiv.style.zIndex=30000;
           maskdiv.style.backgroundColor="rgba(0,0,0,0.5)";
           div=document.createElement('div');
           p=document.createElement('p');
           var ptext=document.createTextNode(pvalue);
           var buttontext=document.createTextNode(buttonvalue);
           button=document.createElement("button");
           p.style.fontSize="20px";
           p.style.marginTop="30px";
           p.style.maxHeight="90px";
           p.style.minHeight="55px";
           p.style.overflow="hidden";
           p.appendChild(ptext);
           button.appendChild(buttontext);
           button.style.margin="20px 0";
           button.style.padding="10px 30px";
           button.style.outline="0px";
           button.style.border="1px solid #ccc";
           button.style.background="#337ab7";
           button.style.color="#fff";
           button.style.cursor="pointer";
           button.style.borderRadius="5px";
           button.onclick=function(){maskdiv.style.display="none"; 
           if(typeof fn =='function'){
                 fn();
                }
             };
           div.style.position="absolute";
           div.style.margin="auto";
           div.style.top="150px";
           div.style.left=0;
           div.style.right=0;
           div.style.background="#fff";
           div.style.width=400+"px";
           div.style.height=200+"px";
           div.style.borderRadius="10px";
           div.style.padding="20px";
           div.style.textAlign="center";
           if(hasclose){
             i=document.createElement('i');
             i.className="icon icon-cross";
             i.style.float="right";
             i.style.position="absolute";
             i.style.top="10px";
             i.style.right="10px";
             i.style.cursor="pointer";
             i.innerText="关闭";
             i.onclick=function(){maskdiv.style.display="none";
                if(typeof closefn=='function'){
                  closefn();
                }
              };
              div.appendChild(i);
          }
           
           div.appendChild(p);
           div.appendChild(button);
           maskdiv.appendChild(div);
           console.log(document.body.clientHeight );
           document.body.appendChild(maskdiv);
           window.onresize=function(){
              maskdiv.style.width=document.body.clientWidth > window.innerWidth ? (document.body.clientWidth+"px"):(window.innerWidth+"px");
              maskdiv.style.height=document.body.clientHeight > window.innerHeight ? (document.body.clientHeight+"px"):(window.innerHeight+"px");
           }

		}else{
      maskdiv.style.width=document.body.clientWidth > window.innerWidth ? (document.body.clientWidth+"px"):(window.innerWidth+"px");
      maskdiv.style.height=document.body.clientHeight > window.innerHeight ? (document.body.clientHeight+"px"):(window.innerHeight+"px");
      p.innerText=pvalue;
      button.innerText=buttonvalue;
      button.onclick=function(){maskdiv.style.display="none";
         if(typeof fn =='function'){
                 fn();
                }
       };
      if(i){
        console.log(hasclose);
        if(!hasclose){i.style.display="none";}else{
          i.style.display="";
          i.onclick=function(){maskdiv.style.display="none";
               if(typeof closefn=='function'){
                  closefn();
                }
             };
        }
      }else{
            if(hasclose){
             i=document.createElement('i');
             i.className="icon icon-cross";
             i.style.float="right";
             i.style.cursor="pointer";
             i.innerText="关闭";
             i.style.position="absolute";
             i.style.top="10px";
             i.style.right="10px";
             i.onclick=function(){maskdiv.style.display="none";
               if(typeof closefn=='function'){
                  closefn();
                }
             };
              div.appendChild(i);
          }
      }
    }
		maskdiv.style.display="block";
		return maskdiv;
	}

})();
