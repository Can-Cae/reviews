const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const img= document.querySelector(".img")
const author= document.querySelector(".author")
const info= document.querySelector(".info")
const job= document.querySelector(".job")
const random= document.querySelector(".random")
const prev= document.querySelector(".prev")
const next= document.querySelector(".next")
let currentItem=0
const submitForm=document.querySelector(".submit-form")
const nameForm=document.querySelector(".name-form")
const jobForm=document.querySelector(".job-form")
const imageForm=document.querySelector(".image-form")
const decForm=document.querySelector(".description-form")

submitForm.addEventListener("click",formf)
function formf(){reviews.push( {name:nameForm.value,

 job:jobForm.value,
 img:imageForm.value,
 text:decForm.value})
 
  
}
/*variables*/
window.addEventListener("DOMContentLoaded",showperson)
next.addEventListener("click",nextf)
prev.addEventListener("click",prevf)
random.addEventListener("click",randomf)
function randomf(){
  currentItem=Math.floor(Math.random() *reviews.length)
  showperson()
}
function prevf(){
  currentItem--
  if (currentItem<0){
    currentItem=reviews.length - 1
  }
  showperson()

}

function nextf(){
currentItem++
if (currentItem>reviews.length - 1){
    currentItem=0
  }
showperson()
}
function showperson(){
  const item=reviews[currentItem]
img.src=item.img
author.textContent=item.name
info.textContent=item.text
job.textContent=item.job

}