let count  = 0

const button = document.getElementById("increase")
const button2 = document.getElementById("reset")
const button3 = document.getElementById("decrease")
const countHolder = document.getElementById("count")
countHolder.innerHTML = count;

button.addEventListener("click", function() {
    countHolder.innerHTML = ++count;
    }
)

button3.addEventListener("click", function() {
    countHolder.innerHTML = --count;
    }
)

// button2.addEventListener("click", function() {
//     document.getElementById("count").value = ""
//     }
// )
