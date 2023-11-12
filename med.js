let nva = document.getElementById("nva")
let score = document.getElementById("s")
let medst = document.getElementById("medstt")
let scorecount = document.getElementById("score")
let targetplace = document.getElementById("targetplace")
scorecount.innerText = 0



medst.addEventListener("click", ()=>{





    x();


})





// document.addEventListener('DOMContentLoaded', function () {

//     let throwingImage = document.getElementById("throwingImage");

//     throwingImage.addEventListener("click", ()=>{
//         scorecount++

//     })

//     // Store the original position
//     const originalPosition = {
//       x: throwingImage.offsetLeft,
//       y: throwingImage.offsetTop,
//     };
  
//     // Function to throw the image
//     function throwImage() {
//       // Hide the image
//       throwingImage.style.display = 'none';
      
//       // Reset the image to its original position before each throw
//       throwingImage.style.transform = `translate(${originalPosition.x}px, ${originalPosition.y}px)`;
  
//       // Delay before making the image visible again
//       setTimeout(() => {
//         // Make the image visible again
//         throwingImage.style.display = 'block';
//       }, 500); // Adjust the delay as needed
  
//       // Set the transition after making the image visible
//       setTimeout(() => {
//         throwingImage.style.transition = 'transform 5s linear';
//         throwingImage.style.transform = `translate(${getRandomNumber()}vh, -100vh)`;
//       }, 600); // Adjust the delay as needed
//     }
  
//     // Loop to repeat the throwImage function 10 times
//     for (let i = 0; i < 10; i++) {
//       setTimeout(throwImage, i * 3000); // Adjust the delay as needed
//     }
  
    // Function to get a random number between -100 and 100
    function getRandomNumber() {
      return Math.random() * 100 - 100;
    }
//   });
  





    document.addEventListener('DOMContentLoaded', function () {
        let throwingImage = document.getElementById("throwingImage");
        let score = 0;
      
        // Store the original position
        const originalPosition = {
          x: throwingImage.offsetLeft,
          y: throwingImage.offsetTop,
        };
      
        // Function to throw the image
        function throwImage() {
          // Reset the image to its original position before each throw
          throwingImage.style.transition = 'none';
          throwingImage.style.transform = `translate(${originalPosition.x}px, ${originalPosition.y}px)`;
      
          // Trigger reflow to apply the initial position
          throwingImage.offsetHeight;
      
          // Set the transition for the throwing animation
          throwingImage.style.transition = 'transform 4s linear';
          throwingImage.style.transform = `translate(${getRandomNumber()}vh, -100vh)`;
    }
      
        // Function to handle image click
        function handleImageClick() {
            scorecount.innerText++;
          console.log("Score: " + score);
          throwImage(); // Reset the image after click
        }
      
        let imgbtn = document.getElementById("imgbtn")
        // Add click event listener to the image
        throwingImage.addEventListener('click', handleImageClick);
      
        // Loop to repeat the throwImage function 10 times
        for (let i = 0; i < 10; i++) {
          setTimeout(throwImage, i * 3000); // Adjust the delay as needed

         
        }

      


      });

    
      if (i == 10){
        alert("eee")
      }
     