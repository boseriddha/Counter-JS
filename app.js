// Initial Count
let count = 0;

// Getting all the buttons
const btns = document.querySelectorAll(".btn");

// Getting the text
const num = document.querySelector(".num");

// Adding event listeners
btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")) {
            count--;
        } else if(styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        num.textContent = count;
        if(num.textContent < 0) {
            num.style.color = "red";
        } else if(num.textContent == 0) {
            num.style.color = "black";
        } else {
            num.style.color = "green";
        }
    });
});