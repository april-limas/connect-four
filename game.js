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
                let playerChip = parseInt(currentChip.id)

                // vertical down
                checkForWins(playerChip, currentChip)
                break

                // let down2 = parseInt(currentChip.id) + 2
                // let downTwoString = down2.toString()
                // let downTwoId = document.getElementById(downTwoString)

                // let down3 = parseInt(currentChip.id) + 3
                // let downThreeString = down3.toString()
                // let downThreeId = document.getElementById(downThreeString)

                // vertical up
                // let up1 = parseInt(currentChip.id) - 1
                // let upOneString = up1.toString()
                // let upOneId = document.getElementById(upOneString)

                // let up2 = parseInt(currentChip.id) - 2
                // let upTwoString = up2.toString()
                // let upTwoId = document.getElementById(upTwoString)

                // let up3 = parseInt(currentChip.id) - 3
                // let upThreeString = up3.toString()
                // let upThreeId = document.getElementById(upThreeString)



                // horizontal right
                // let right1 = parseInt(currentChip.id) + 10
                // let rightOneString = right1.toString()
                // let rightOneId = document.getElementById(rightOneString)

                // let right2 = parseInt(currentChip.id) + 20
                // let rightTwoString = right2.toString()
                // let rightTwoId = document.getElementById(rightTwoString)

                // let right3 = parseInt(currentChip.id) + 30
                // let rightThreeString = right3.toString()
                // let rightThreeId = document.getElementById(rightThreeString)


                // horizontal left  
                // let left1 = parseInt(currentChip.id) - 10
                // let leftOneString = left1.toString()
                // let leftOneId = document.getElementById(leftOneString)

                // let left2 = parseInt(currentChip.id) - 20
                // let leftTwoString = left2.toString()
                // let leftTwoId = document.getElementById(leftTwoString)

                // let left3 = parseInt(currentChip.id) - 30
                // let leftThreeString = left3.toString()
                // let leftThreeId = document.getElementById(leftThreeString)



                // Diagonal Right Down
                // let slantRightDown1 = parseInt(currentChip.id) + 11
                // let slantRightDownOneString = slantRightDown1.toString()
                // let slantRightDownOneId = document.getElementById(slantRightDownOneString)

                // let slantRightDown2 = parseInt(currentChip.id) + 22
                // let slantRightDownTwoString = slantRightDown2.toString()
                // let slantRightDownTwoId = document.getElementById(slantRightDownTwoString)

                // let slantRightDown3 = parseInt(currentChip.id) + 33
                // let slantRightDownThreeString = slantRightDown3.toString()
                // let slantRightDownThreeId = document.getElementById(slantRightDownThreeString)

                // Diagonal Left Down
                // let slantLeftDown1 = parseInt(currentChip.id) - 9
                // let slantLeftDownOneString = slantLeftDown1.toString()
                // let slantLeftDownOneId = document.getElementById(slantLeftDownOneString)

                // let slantLeftDown2 = parseInt(currentChip.id) - 18
                // let slantLeftDownTwoString = slantLeftDown2.toString()
                // let slantLeftDownTwoId = document.getElementById(slantLeftDownTwoString)

                // let slantLeftDown3 = parseInt(currentChip.id) - 27
                // let slantLeftDownThreeString = slantLeftDown3.toString()
                // let slantLeftDownhreeId = document.getElementById(slantLeftDownThreeString)

                // Diagonal Right Up
                // let slantRightUp1 = parseInt(currentChip.id) + 9
                // let slantRightUpOneString = slantRightUp1.toString()
                // let slantRightUpOneId = document.getElementById(slantRightUpOneString)

                // let slantRightUp2 = parseInt(currentChip.id) + 18
                // let slantRightUpTwoString = slantRightUp2.toString()
                // let slantRightUpTwoId = document.getElementById(slantRightUpTwoString)

                // let slantRightUp3 = parseInt(currentChip.id) + 27
                // let slantRightUpThreeString = slantRightUp3.toString()
                // let slantRightUpThreeId = document.getElementById(slantRightUpThreeString)

                // Diagonal Left Up
                // let slantLeftUp1 = parseInt(currentChip.id) - 11
                // let slantLeftUpOneString = slantLeftUp1.toString()
                // let slantLeftUpOneId = document.getElementById(slantLeftUpOneString)

                // let slantLeftUp2 = parseInt(currentChip.id) - 22
                // let slantLeftUpTwoString = slantLeftUp2.toString()
                // let slantLeftUpTwoId = document.getElementById(slantLeftUpTwoString)

                // let slantLeftUp3 = parseInt(currentChip.id) - 33
                // let slantLeftUpThreeString = slantLeftUp3.toString()
                // let slantLeftUpThreeId = document.getElementById(slantLeftUpThreeString)

            
            }
        }

    })
}

function checkForWins (playerChip, currentChip) {
    if (winVerticallyDown(playerChip, currentChip)) {
        
    } else if (winVerticallyUp(playerChip, currentChip)) {
        console.log("You win!")
    } else if (winHorizontallyRight(playerChip, currentChip)) {
        console.log("You win!")
    } else if (winHorizontallyLeft(playerChip, currentChip)) {
        console.log("You win!")
    } else if (winDiagonallyRightDown(playerChip, currentChip)) {
        console.log("You win!")
    } else if (winDiagonallyLeftDown(playerChip, currentChip)) {
        console.log("You win!")
    } else if (winDiagonallyRightUp(playerChip, currentChip)) {
        console.log("You win!")
    } else if (winDiagonallyLeftUp(playerChip, currentChip)) {
        console.log("You win!")
    } else {
        checkingForTie()   
    }
}

function winVerticallyDown(playerChip, currentChip) {
    let downOneId = document.getElementById((playerChip + 1).toString())
    if (downOneId !== null) {
        let downTwoId = document.getElementById((playerChip + 2).toString())
        let downThreeId = document.getElementById((playerChip + 3).toString())
        if (downTwoId !== null && downThreeId !== null) {
            if (currentChip.classList.contains("yellow") && downOneId.classList.contains("yellow") && downTwoId.classList.contains("yellow") && downThreeId.classList.contains("yellow")) {
                setTimeout(function () {
                    alert("Yellow wins!") 
                }, 300)
                return true
            } else if (currentChip.classList.contains("red") && downOneId.classList.contains("red") && downTwoId.classList.contains("red") && downThreeId.classList.contains("red")) {
                alert("Red wins!")
                return true
            } else {
                console.log("Didn't win downwards") 
                return false
            }
        }
    }

}

function winVerticallyUp(playerChip, currentChip) {
    let upOneId = document.getElementById((playerChip - 1).toString())
    if (upOneId !== null) {
        let upTwoId = document.getElementById((playerChip - 2).toString())
        let upThreeId = document.getElementById((playerChip - 3).toString())
        if (upTwoId !== null && upThreeId !== null) {
            if (currentChip.classList.contains("yellow") && upOneId.classList.contains("yellow") && upTwoId.classList.contains("yellow") && upThreeId.classList.contains("yellow")) {
                alert("Yellow wins!")
            } else if (currentChip.classList.contains("red") && upOneId.classList.contains("red") && upTwoId.classList.contains("red") && upThreeId.classList.contains("red")) {
                alert("Red wins!")
            } else {
                console.log("Didn't win upwards")
            }
        }
    }

}

function winHorizontallyRight(playerChip, currentChip) {
    let rightOneId = document.getElementById((playerChip + 10).toString())
    if (rightOneId !== null) {
        let rightTwoId = document.getElementById((playerChip + 20).toString())
        let rightThreeId = document.getElementById((playerChip + 30).toString())
        if (rightTwoId !== null && rightThreeId !== null) {
            if (currentChip.classList.contains("yellow") && rightOneId.classList.contains("yellow") && rightTwoId.classList.contains("yellow") && rightThreeId.classList.contains("yellow")) {
                alert("Yellow wins!")
            } else if (currentChip.classList.contains("red") && rightOneId.classList.contains("red") && rightTwoId.classList.contains("red") && rightThreeId.classList.contains("red")) {
                alert("Red wins!")
            } else {
                console.log("Didn't win rightwards")
            }
        }
    }

}

function winHorizontallyLeft(playerChip, currentChip) {
    let leftOneId = document.getElementById((playerChip - 10).toString())
    if (leftOneId !== null) {
        let leftTwoId = document.getElementById((playerChip - 20).toString())
        let leftThreeId = document.getElementById((playerChip - 30).toString())
        if (leftTwoId !== null && leftThreeId !== null) {
            if (currentChip.classList.contains("yellow") && leftOneId.classList.contains("yellow") && leftTwoId.classList.contains("yellow") && leftThreeId.classList.contains("yellow")) {
                alert("Yellow wins!")
            } else if (currentChip.classList.contains("red") && leftOneId.classList.contains("red") && leftTwoId.classList.contains("red") && leftThreeId.classList.contains("red")) {
                alert("Red wins!")
            } else {
                console.log("Didn't win leftwards")
            }
        }
    }

}

function winDiagonallyRightDown(playerChip, currentChip) {
    let slantRightDownOneId = document.getElementById((playerChip + 11).toString())
    if (slantRightDownOneId !== null) {
        let slantRightDownTwoId = document.getElementById((playerChip + 22).toString())
        let slantRightDownThreeId = document.getElementById((playerChip + 33).toString())
        if (slantRightDownTwoId !== null && slantRightDownThreeId !== null) {
            if (currentChip.classList.contains("yellow") && slantRightDownOneId.classList.contains("yellow") && slantRightDownTwoId.classList.contains("yellow") && slantRightDownThreeId.classList.contains("yellow")) {
                alert("Yellow wins!")
            } else if (currentChip.classList.contains("red") && slantRightDownOneId.classList.contains("red") && slantRightDownTwoId.classList.contains("red") && slantRightDownThreeId.classList.contains("red")) {
                alert("Red wins!")
            } else {
                console.log("Didn't win slantRightDownwards")
            }
        }
    }

}

function winDiagonallyLeftDown(playerChip, currentChip) {
    let slantLeftDownOneId = document.getElementById((playerChip - 9).toString())
    if (slantLeftDownOneId !== null) {
        let slantLeftDownTwoId = document.getElementById((playerChip - 18).toString())
        let slantLeftDownThreeId = document.getElementById((playerChip - 27).toString())
        if (slantLeftDownTwoId !== null && slantLeftDownThreeId !== null) {
            if (currentChip.classList.contains("yellow") && slantLeftDownOneId.classList.contains("yellow") && slantLeftDownTwoId.classList.contains("yellow") && slantLeftDownThreeId.classList.contains("yellow")) {
                alert("Yellow wins!")
            } else if (currentChip.classList.contains("red") && slantLeftDownOneId.classList.contains("red") && slantLeftDownTwoId.classList.contains("red") && slantLeftDownThreeId.classList.contains("red")) {
                alert("Red wins!")
            } else {
                console.log("Didn't win slantLeftDownwards")
            }
        }
    }

}

function winDiagonallyRightUp(playerChip, currentChip) {
    let slantRightUpOneId = document.getElementById((playerChip + 9).toString())
    if (slantRightUpOneId !== null) {
        let slantRightUpTwoId = document.getElementById((playerChip + 18).toString())
        let slantRightUpThreeId = document.getElementById((playerChip + 27).toString())
        if (slantRightUpTwoId !== null && slantRightUpThreeId !== null) {
            if (currentChip.classList.contains("yellow") && slantRightUpOneId.classList.contains("yellow") && slantRightUpTwoId.classList.contains("yellow") && slantRightUpThreeId.classList.contains("yellow")) {
                alert("Yellow wins!")
            } else if (currentChip.classList.contains("red") && slantRightUpOneId.classList.contains("red") && slantRightUpTwoId.classList.contains("red") && slantRightUpThreeId.classList.contains("red")) {
                alert("Red wins!")
            } else {
                console.log("Didn't win slantRightUpwards")
            }
        }
    }

}

function winDiagonallyLeftUp(playerChip, currentChip) {
    let slantLeftUpOneId = document.getElementById((playerChip - 11).toString())
    if (slantLeftUpOneId !== null) {
        let slantLeftUpTwoId = document.getElementById((playerChip - 22).toString())
        let slantLeftUpThreeId = document.getElementById((playerChip - 33).toString())
        if (slantLeftUpTwoId !== null && slantLeftUpThreeId !== null) {
            if (currentChip.classList.contains("yellow") && slantLeftUpOneId.classList.contains("yellow") && slantLeftUpTwoId.classList.contains("yellow") && slantLeftUpThreeId.classList.contains("yellow")) {
                alert("Yellow wins!")
            } else if (currentChip.classList.contains("red") && slantLeftUpOneId.classList.contains("red") && slantLeftUpTwoId.classList.contains("red") && slantLeftUpThreeId.classList.contains("red")) {
                alert("Red wins!")
            } else {
                console.log("Didn't win slantLeftUpwards")
            }
        }
    }

}

function checkingForTie() {
    let boardChildren = board.childNodes
    let count = 0
    for (let col = 1; col < boardChildren.length; col+=2) {
        let colChildren = boardChildren[col].childNodes
        for (let row = 1; row < colChildren.length; row+=2) {
            if (colChildren[row].classList.contains("yellow") || colChildren[row].classList.contains("red")) {

                count += 1
            }

        }
        console.log(count)
        if (count === 42) {
            setTimeout(function () {
                alert("tie game") 
            }, 300)
            setTimeout(function () {
                location.reload()
            }, 300)
        }
    
    }
}
