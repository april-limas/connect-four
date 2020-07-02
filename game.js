const board = document.getElementById("board")
const columns = document.querySelectorAll(".columns")
const players = document.querySelectorAll(".players")
const icon = document.getElementById("icon")
const wrapper = document.getElementById("wrapper")


let currentPlayer
let currentPlayerId

for (let i = 0; i < players.length; i++) {
    let player = players[i]

    player.addEventListener("dragstart", function (ev) {
        // console.log("dragstart")
        currentPlayer = this
        currentPlayerId = currentPlayer.id
        ev.dataTransfer.setData("color", ev.target.dataset.color)
        setTimeout(function () {
            player.style.display = "none"
        }, 0)
    })
    player.addEventListener("dragend", function () {
        setTimeout(function () {
            currentPlayer.style.display = "block"
            currentPlayer = null
        }, 0)
        
    })
}



for (let j = 0; j < columns.length; j++) {
    let column = columns[j]

    column.addEventListener("dragover", function (ev) {
        ev.preventDefault();
    })

    column.addEventListener("dragenter", function (ev) {
        ev.preventDefault();
    })

    column.addEventListener("drop", function (ev) {
        ev.preventDefault();
        // console.log("drop")
        //   ev.target.classList.add('grab')
        let target = ev.currentTarget;

        let children = target.childNodes;
       
        // let targetLastChild = target.lastElementChild
        for (let i = 11; i < children.length; i -= 2) {
            let currentChip = children[i]
            if (currentChip.classList.contains("yellow") || currentChip.classList.contains("red")) {
                
                continue
            } else {
                // let fillCircle = document.getElementById(children[i].id)
                let color = ev.dataTransfer.getData("color")
                currentChip.classList.add(color)
               
            // vertical
                let down1 = parseInt(currentChip.id) + 1
                let downOneString = down1.toString()
                let downOneId = document.getElementById(downOneString)

                let down2 = parseInt(currentChip.id) + 2
                let downTwoString = down2.toString()
                let downTwoId = document.getElementById(downTwoString)

                let down3 = parseInt(currentChip.id) + 3
                let downThreeString = down3.toString()
                let downThreeId = document.getElementById(downThreeString)                  

            // horizontal right
                let right1 = parseInt(currentChip.id) + 10
                let rightOneString = right1.toString()
                let rightOneId = document.getElementById(rightOneString)

                let right2 = parseInt(currentChip.id) + 20
                let rightTwoString = right2.toString()
                let rightTwoId = document.getElementById(rightTwoString)

                let right3 = parseInt(currentChip.id) + 30
                let rightThreeString = right3.toString()
                let rightThreeId = document.getElementById(rightThreeString)
                 

            // horizontal left  
                let left1 = parseInt(currentChip.id) - 10
                let leftOneString = left1.toString()
                let leftOneId = document.getElementById(leftOneString)

                let left2 = parseInt(currentChip.id) - 20
                let leftTwoString = left2.toString()
                let leftTwoId = document.getElementById(leftTwoString)

                let left3 = parseInt(currentChip.id) - 30
                let leftThreeString = left3.toString()
                let leftThreeId = document.getElementById(leftThreeString)

                

            // Diagonal Right Down
                let slantRightDown1 = parseInt(currentChip.id) + 11
                let slantRightDownOneString = slantRightDown1.toString()
                let slantRightDownOneId = document.getElementById(slantRightDownOneString)

                let slantRightDown2 = parseInt(currentChip.id) + 22
                let slantRightDownTwoString = slantRightDown2.toString()
                let slantRightDownTwoId = document.getElementById(slantRightDownTwoString)

                let slantRightDown3 = parseInt(currentChip.id) + 33
                let slantRightDownThreeString = slantRightDown3.toString()
                let slantRightDownThreeId = document.getElementById(slantRightDownThreeString)

            // Diagonal Left Down
                let slantLeftDown1 = parseInt(currentChip.id) - 9
                let slantLeftDownOneString = slantLeftDown1.toString()
                let slantLeftDownOneId = document.getElementById(slantLeftDownOneString)

                let slantLeftDown2 = parseInt(currentChip.id) - 18
                let slantLeftDownTwoString = slantLeftDown2.toString()
                let slantLeftDownTwoId = document.getElementById(slantLeftDownTwoString)

                let slantLeftDown3 = parseInt(currentChip.id) - 27
                let slantLeftDownThreeString = slantLeftDown3.toString()
                let slantLeftDownhreeId = document.getElementById(slantLeftDownThreeString)

            // Diagonal Right Up
                let slantRightUp1 = parseInt(currentChip.id) + 9
                let slantRightUpOneString = slantRightUp1.toString()
                let slantRightUpOneId = document.getElementById(slantRightUpOneString)

                let slantRightUp2 = parseInt(currentChip.id) + 18
                let slantRightUpTwoString = slantRightUp2.toString()
                let slantRightUpTwoId = document.getElementById(slantRightUpTwoString)

                let slantRightUp3 = parseInt(currentChip.id) + 27
                let slantRightUpThreeString = slantRightUp3.toString()
                let slantRightUpThreeId = document.getElementById(slantRightUpThreeString) 

            // Diagonal Left Up
                let slantLeftUp1 = parseInt(currentChip.id) - 11
                let slantLeftUpOneString = slantLeftUp1.toString()
                let slantLeftUpOneId = document.getElementById(slantLeftUpOneString)

                let slantLeftUp2 = parseInt(currentChip.id) - 22
                let slantLeftUpTwoString = slantLeftUp2.toString()
                let slantLeftUpTwoId = document.getElementById(slantLeftUpTwoString)

                let slantLeftUp3 = parseInt(currentChip.id) - 33
                let slantLeftUpThreeString = slantLeftUp3.toString()
                let slantLeftUpThreeId = document.getElementById(slantLeftUpThreeString) 

                if (downOneId !== null && downTwoId !== null && downThreeId !== null) {
                    if (currentChip.classList.contains("yellow") && downOneId.classList.contains("yellow") && downTwoId.classList.contains("yellow") && downThreeId.classList.contains("yellow")) {
                            console.log("Yellow wins!")
                            
                    } else if (currentChip.classList.contains("red") && downOneId.classList.contains("red") && downTwoId.classList.contains("red") && downThreeId.classList.contains("red")) {
                            console.log("Red wins!")
                    } else {
                        console.log ("Try again")
                    }
                   
                }
                
                if (currentChip.classList.contains("yellow") && rightOneId.classList.contains("yellow") && rightTwoId.classList.contains("yellow") && rightThreeId.classList.contains("yellow")) {
                    console.log("Yellow wins!")
                } else if (currentChip.classList.contains("red") && rightOneId.classList.contains("red") && rightTwoId.classList.contains("red") && rightThreeId.classList.contains("red")) {
                    console.log("Red wins!")
                } else {
                    console.log("Try again")
                }
                 
                break
            }
        }
        
    })
}
