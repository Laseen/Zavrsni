const arrowL = ("#arrow-left");  
    const arrowR = ("#arrow-right");

    function buttons(){  

    arrowL.on("click",function(){
    selectThumbnail(this);
            });
    
    arrowR.on("click",function(){
        selectThumbnail(this);
            });

    };
    
    
    function selectThumbnail(thumbnail){
    
      ("#thumbnail-container > .thumbnail.-main").removeClass("-main");
        
      thumbnail.addClass("-main");
    
    }