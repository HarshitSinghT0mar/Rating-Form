const ratingBtnContainer = document.getElementById("select-rating");
const ratingBtns = document.querySelectorAll(".rating-btn");
const submitBtn = document.getElementById("submit-btn");
const thankYouCard = document.querySelector(".thank-you-card");
const formCard = document.querySelector(".form-card");
const ratingDetails = document.querySelector(".rating-details");
const errorMessage=document.querySelector(".error-message")

let rating;

// thankYouCard.style.display = "none";
// errorMessage.style.display="none"

ratingBtnContainer.onclick=(e)=>{
    e.preventDefault();
    const btn=e.target;
    rating=btn.value

    // btn.classList.add('rating-btn-active') 
    //adding in btn would result in a bug where if you click between the gaps of the buttons, that also changes add class as its inside btn container

    ratingBtns.forEach((button)=>{
        button!==btn?button.classList.remove("rating-btn-active"):button.classList.add("rating-btn-active")
       
    })

}
    

submitBtn.onclick = (e) => {
    if(rating)
 { thankYouCard.style.display = "flex";
  formCard.style.display = "none";
  ratingDetails.textContent = `You selected ${rating} out of 5`;}
  else{
    errorMessage.style.display="inline"
    errorMessage.textContent="Please enter the rating"
  }
 
};
