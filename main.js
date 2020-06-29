let connect4 = document.getElementById("connect4")

for (let rowNum = 1; rowNum <= 6; rowNum++) {
let block = ""

    for (let columnNum = 1; columnNum <= 7; columnNum++) {
        block += `<div class="block wall"></div>`
    }

    connect4.innerHTML += `<div class="row">${block}</div>` 
}



