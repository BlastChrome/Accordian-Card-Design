
// variables Node Lists
let arrows_u = document.querySelectorAll(".arrow-u");  
let arrows_d = document.querySelectorAll(".arrow-d");  
let header = document.querySelectorAll(".text-block-header");
let text = document.querySelectorAll(".text-block-body");

console.log(arrows_u);
console.log(header);


let hide = () => {
    for(let i = 0; i < arrows_u.length; i++){
        arrows_u[i].addEventListener("click", function () {
            console.log("arrow clicked " + i); 
            arrows_u[i].classList.toggle("hide"); 
            arrows_d[i].classList.toggle("hide"); 
            text[i].classList.toggle("hide"); 
            header[i].classList.toggle("bold");
            
        })
    }
} 

let show = () => {
    for(let i = 0; i < arrows_d.length; i++){
        arrows_d[i].addEventListener("click", function () {
            console.log("arrow clicked " + i); 
            arrows_u[i].classList.toggle("hide"); 
            arrows_d[i].classList.toggle("hide"); 
            text[i].classList.toggle("hide");
            header[i].classList.toggle("bold");
        })
    }
}

hide();
show();

