const gameContainer = document.querySelector(".container");
const user_result = document.querySelector(".user_result img");
const computer_result = document.querySelector(".computer_result img");
const result = document.querySelector(".result");
const option = document.querySelectorAll(".option_image");

option.forEach((image, index) => {
  image.addEventListener("click", () => {
    image.classList.add("active");

    gameContainer.classList.add("start");

    // Reset gambar 
    user_result.src = computer_result.src = "batu.png";
    result.textContent = "Wait...";

    option.forEach((image2, index2) => {
      if (index !== index2) {
        image2.classList.remove("active");
      }
    });

    let time = setTimeout(() => {
      gameContainer.classList.remove("start");
      
      let imageSrc = image.querySelector("img").src;
      user_result.src = imageSrc;

      let randomNumber = Math.floor(Math.random() * 3);

      
      let computerImages = ["batu.png", "gunting.png", "kertas.png"];
      computer_result.src = computerImages[randomNumber];

      let computerValue = ["R", "S", "P"][randomNumber]; 
      let userValue = ["R", "S", "P"][index];

      let outcomes = {
        RR: "Draw",
        RS: "User",      
        RP: "Computer",  
        SS: "Draw",
        SR: "Computer",  
        SP: "User",      
        PP: "Draw",
        PR: "User",      
        PS: "Computer",  
      };

      let outcomeValue = outcomes[userValue + computerValue];

      result.textContent =
        userValue === computerValue ? "Match Draw" : `${outcomeValue} Wins!`;
    }, 2500);
  });
});