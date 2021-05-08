
(function(){

    let cont = document.getElementById('cont');

    let imagesPartner = [
        'p01.jpg',
        'p02.jpg',
        'p03.jpg',
        'p04.jpg',
        'p05.jpg',
        'p06.jpg',
        'p07.jpg'
    ];

    let i = 0;

    for (i; i < 3; i++) {
        createImage(i); 
    };

    let m = i-3;
    let switched = true;


    //--------Правая кнопка перелистывания ----------------------
    let caruselRight = document.getElementById("caruselRight");
    caruselRight.addEventListener('click',
        () => {
            if(switched){

                switched = false;
                let k = imagesPartner.length-1 - m ;
                let img = createImage(k, 'first');
                let images = setOfsset('right', img);
                setTimeout(() =>{
                    let counters = changeImg(images[3],m,i);
                    m = counters[0];
                    i = counters[1];
                }, 2500)
            }
        }
    );




    //--------Левая кнопка перелистывания ----------------------

    let caruselLeft = document.getElementById("caruselLeft");
    caruselLeft.addEventListener('click',
        () => {
            if(switched){
                switched = false;
                let img = createImage(i, 'last');
                let images= setOfsset('left', img);
                setTimeout(() =>{
                    let counters = changeImg(images[0],i,m);
                    i = counters[0];
                    m = counters[1];
                }, 2500)
            }
            
        }
    );



    //--------------Добавление в DOM-----------------------------------
    function createImage(i,position = 'none'){
        let img = document.createElement("img");
        img.setAttribute('src', `partner/${imagesPartner[i]}`);
        if(position ==='last'){
            cont.append(img); 
            img.style.left = 3*img.offsetWidth+ 'px';
        }
        if(position ==='first'){ 
            cont.prepend(img); 
            img.style.left = (-1)*img.offsetWidth+ 'px';
        }
        if(position ==='none'){
            cont.append(img);
            img.style.left = i*img.offsetWidth+ 'px';
        } 
        
        return img;
        
    }

    //-------функция Задания Смещения -------------------------------
    function setOfsset(direction,img){
        let images= cont.getElementsByTagName("img");
        for (let i = 0; i < images.length; i++) {
        let left =  images[i].offsetLeft;
        if(direction === 'left') images[i].style.left = (left - img.offsetWidth) + 'px'; 
        if(direction === 'right') images[i].style.left = (left + img.offsetWidth) + 'px';
        }
    return images;
    }


    //--------
    function changeImg(element, countInc, countDec){

            element.remove();
            countInc++; 
            countDec--;
            if(countInc >= imagesPartner.length){
                countInc=0;
            };    
        if(countDec < 0) countDec = imagesPartner.length-1; 
            switched=true;
        return [countInc,countDec];

    }

}());




let images = [
    'p01.jpg',
    'p02.jpg',
    'p03.jpg',
    'p04.jpg',
    'p05.jpg',
    'p06.jpg'
];


let looking = document.querySelectorAll(".look span");


for (let i = 0; i < looking.length; i++) {
  
    looking[i].addEventListener('click', ()=>{
        let div = document.createElement('div');
        
        div.classList.add("looking");
        let img =  document.createElement('img');
        img.setAttribute('src', `partner/${images[i]}`);

        let cross = document.createElement('div');
        cross.classList.add("cross");
        cross.innerText="X";
        
        div.append(img);
        div.append(cross);
        cross.addEventListener('click', ()=>{
           document.querySelector(".looking").remove(); 
        })
        document.getElementById('page').append(div);
        setTimeout(()=>{
            document.querySelector(".looking").classList.add('looking2');
            
        },0)
       
        
    })
    
}


let fixBtn = document.getElementsByClassName('fix')[0];
window.addEventListener('scroll', function() {
   if( window.pageYOffset > 50){
    fixBtn.style.display = 'block';
   }else {
    fixBtn.style.display = 'none';
   }
  });
  


  let stopAct;
  let listener = ()=>{

    if(window.pageYOffset > 0){
        stopAct = setTimeout(()=>{
        window.scrollBy(0,-70);
        listener();
        },30);
    }else{
        clearTimeout(stopAct); 
    }
    
}
  fixBtn.addEventListener('click', listener,false);

