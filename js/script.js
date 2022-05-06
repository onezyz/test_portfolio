const test = document.querySelector(".test");
const test2 = document.querySelector("span");

test.addEventListener("click",function(){
    alert("경고창!");
});
test.addEventListener("mouseenter",function(){
    alert("마우스 올림");
});