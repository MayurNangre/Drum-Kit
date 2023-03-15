//  ----------1st Method ----------

// for(let i=0;i<document.querySelectorAll(".drum").length;i++){


//    document.querySelectorAll("button")[i].addEventListener("click", function (){
      
//       if(i===0){
//          var audio = new Audio('sounds/crash.mp3');
//          audio.play();
//       }
//       if(i===1){
//          var audio = new Audio('sounds/kick-bass.mp3');
//          audio.play();
//       }
//       if(i===2){
//          var audio = new Audio('sounds/snare.mp3');
//          audio.play();
//       }
//       if(i===3){
//          var audio = new Audio('sounds/tom-1.mp3');
//          audio.play();
//       }
//       if(i===4){
//          var audio = new Audio('sounds/tom-2.mp3');
//          audio.play();
//       }
//       if(i===5){
//          var audio = new Audio('sounds/tom-3.mp3');
//          audio.play();
//       }
//       if(i===6){
//          var audio = new Audio('sounds/tom-4.mp3');
//          audio.play();
//       }
      
//    });
   

// }


//  ----------2nd Method ----------------


for(let i=0;i<document.querySelectorAll(".drum").length;i++){

   document.querySelectorAll(".drum")[i].addEventListener("click", function (){
   
      addmusic(this.innerHTML)

      addAnimation(this.innerHTML);
      
   })
}


document.addEventListener("keypress", function(event){
   console.log(event.key);

   addmusic(event.key);

   addAnimation(event.key);
   
})

function addmusic(key){

   switch (key) {
      case "w":
         var audio = new Audio('sounds/crash.mp3');
         audio.play();
         break;
        
      case "a":
         var audio = new Audio('sounds/kick-bass.mp3');
         audio.play();
         break;

      case "s":
         var audio = new Audio('sounds/snare.mp3');
         audio.play();
         break;

      case "d":
         var audio = new Audio('sounds/tom-1.mp3');
         audio.play(); 
         break;

      case "j":
         var audio = new Audio('sounds/tom-2.mp3');
         audio.play(); 
         break;

      case "k":
         var audio = new Audio('sounds/tom-3.mp3');
         audio.play(); 
         break;

      case "l":
         var audio = new Audio('sounds/tom-4.mp3');
         audio.play(); 
         break;  

      default:
         break;
   }

}


function addAnimation(key){

   var activeButton = document.querySelector("." + key);

   activeButton.classList.add("pressed");

   setTimeout(function(){
      activeButton.classList.remove("pressed");
   }, 100)


}

// ----------------------------------------------------------------------------

// function SchoolStudent(name, age, marks) {
//    this.name = name;
//    this.age = age;
//    this.marks = marks;
//    this.project = function() {
//       alert("The project is on the way");
//       var audio = new Audio('sounds/tom-4.mp3');
//       audio.play();
//    };
// }jkk

// let student1 = new SchoolStudent("mayur", 22, 95) 
// console.log(student1.project)




