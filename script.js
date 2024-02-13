// task 1
const imgs=document.querySelectorAll(".icons img");
let bg=document.querySelector(".task-one-container");
let image=document.querySelector(".image img");
const arrimgs=Array.from(imgs);
arrimgs.forEach((e,i)=>{
    e.addEventListener("click",()=>{
        image.src=`${e.src}`;
        switch (i) {
            case 0:
                bg.style.backgroundColor="red";
                break;
                case 1:
                    bg.style.backgroundColor="blue";
                    break;
                case 2:
                bg.style.backgroundColor="grey";
                break;
                case 3:
                bg.style.backgroundColor="beige";
                break;
            default:
                bg.style.backgroundColor="yellow";

                break;
        }
    })
    
})
// task 2
const icon=document.querySelector("#mode-icon img");
const content=document.querySelector("#task-two-content");
icon.addEventListener("click",()=>{
    if (icon.src == "file:///C:/Users/RAZAN/Desktop/ST-L2-Task2/ST-L2-Task2/assets/images/icons/sun.svg" ) {
        icon.src="./assets/images/moon-regular.svg";
        content.classList.remove("dark-theme");
        content.classList.add("light-theme");
    } else {
        icon.src="file:///C:/Users/RAZAN/Desktop/ST-L2-Task2/ST-L2-Task2/assets/images/icons/sun.svg";
        content.classList.remove("light-theme");
        content.classList.add("dark-theme");
    }
})
// task 3
const question=document.querySelectorAll(".question-box");
const arrayquestion=Array.from(question);
const arrow=document.querySelectorAll(".question-box i");
const arrayarrow=Array.from(arrow);
const answer=document.querySelectorAll(".answer");
const arrayanswer=Array.from(answer);
arrayquestion.forEach((e,i)=>{
    e.addEventListener("click",()=>{
        let x=arrow[i].classList;
        let ar=Array.from(x);
        if (ar.includes("fa-chevron-down")==true) {
            arrow[i].classList.remove("fa-chevron-down");
            arrow[i].classList.add("fa-chevron-up");
            arrayanswer[i].style.display="block";                     
        } else{
        if(ar.includes("fa-chevron-up")==true){
            arrow[i].classList.remove("fa-chevron-up");
            arrow[i].classList.add("fa-chevron-down");
            arrayanswer[i].style.display="none"; 
        }
        }       
    })
})
// task 4
let stars=document.querySelectorAll(".stars i");
let starsArray=Array.from(stars);
let description=document.querySelector(".description");
starsArray.forEach((e,i)=>{
    e.addEventListener("click",()=>{
        let re=Array.from(starsArray[i].classList).includes("active");
        if (re == true) {
            for (let index = i; index < starsArray.length; index++) {
                starsArray[index].classList.remove("active");
                switch (i) {
                    case 0:
                        description.innerHTML="I JUST HATE IT";
                        break;
                    case 1:
                        description.innerHTML="i dont like it";
                    break;    
                    case 2:
                        description.innerHTML="it is awesome";
                    break;       
                    default:           
                     description.innerHTML="I LoVE IT";
                        break;
                   }
            }
        } else{
            for (let index = 0; index <= i; index++) {
                starsArray[index].classList.add("active")
               }
               switch (i) {
                case 0:
                    description.innerHTML="I JUST HATE IT";
                    break;
                case 1:
                    description.innerHTML="i dont like it";
                break;    
                case 2:
                    description.innerHTML="it is awesome";
                break;       
                default:           
                 description.innerHTML="I LoVE IT";
                    break;
               }
        }

    })
})
// task 5
const items=document.querySelectorAll(".tabs_wrap ul li");
let femaleTab=document.querySelector(".female-tab");
let maleTab=document.querySelector(".male-tab");
let active=document.querySelector(".active");
let itemsArray=Array.from(items);
itemsArray.forEach(e=>{
    e.addEventListener("click",()=>{
        active.classList.remove("active");
        e.classList.add("active");
        if (Array.from(e.classList).includes("male")) {
            femaleTab.style.display="none";
            maleTab.style.display="block";
        } else  if (Array.from(e.classList).includes("female")) {
            femaleTab.style.display="block";
            maleTab.style.display="none";
        }else  if (Array.from(e.classList).includes("both")) {
            femaleTab.style.display="block";
            maleTab.style.display="block";
        }
    })
})
// task 6
const images=document.querySelectorAll(".carousel img");
const prev=document.querySelector("#prev");
const next=document.querySelector("#next");
let count=0;
next.addEventListener("click",()=>{
    count++;
    images.forEach(el=>{
            el.style.transform="translateX(-"+count*100+"%)";
    })
})
prev.addEventListener("click",()=>{
    count--;
    images.forEach(el=>{
        el.style.transform="translateX(-"+count*100+"%)";  
    })
})
// task 7
const smallImg=document.querySelectorAll(".small-img");
const mainImg=document.querySelectorAll("#mainImg");
smallImg.forEach(e =>{
    e.addEventListener("click",()=>{
        mainImg[0].src=e.src;   
    })
})