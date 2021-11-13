const slides = document.getElementsByClassName("slides")
console.log("helloworld")
function test() {
  const header = document.getElementById("slide-2")  
  header.classList.toggle("header-selected");
}
var index = 0
const slide1 = document.getElementById("slide-1")
const slide2 = document.getElementById("slide-2")
const slide3 = document.getElementById("slide-3")
const slide4 = document.getElementById("slide-4")
function changeSlide(){
  console.log(index)
  // console.log(slide1)
  // console.log(slide2)
  // console.log(slide3)
  // console.log(slide4)
  // console.log(slide1)
  index++;
  if (index >=4){
    index = 0
  }

  switch (index){
    case 0:
      console.log("case 0")
      slide1.classList.add("header-selected")
      slide2.classList.remove("header-selected")
      slide3.classList.remove("header-selected")
      slide4.classList.remove("header-selected")
      break;
    case 1:
      console.log("case 1")
      slide1.classList.remove("header-selected")
      slide2.classList.add("header-selected")
      slide3.classList.remove("header-selected")
      slide4.classList.remove("header-selected")
      break;
    case 2:
      console.log("case 2")
      slide1.classList.remove("header-selected")
      slide2.classList.remove("header-selected")
      slide3.classList.add("header-selected")
      slide4.classList.remove("header-selected")
      break;
    case 3:
      console.log("case 3")
      slide1.classList.remove("header-selected")
      slide2.classList.remove("header-selected")
      slide3.classList.remove("header-selected")
      slide4.classList.add("header-selected")
      break;
  }
}

setInterval("changeSlide()",2000)