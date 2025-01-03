function toggleLike(button){
    if (button.textContent === "❤️ Like") {
        button.textContent = "💔 Unlike";
        button.style.backgroundColor = "#e63939";
    } else {
        button.textContent = "❤️ Like";
        button.style.backgroundColor = "#ff4d4d";
    } 
}
