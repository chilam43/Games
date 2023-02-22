let win = 0
let draw = 0
let lost = 0
let round = 0

let options = ['Scissor', 'Paper', 'Rock']

function play(hand) {
    round++
    console.log("===== Round " + round + " =====")

    let computerIdx = Math.floor(Math.random() * options.length)
    let computer = options[computerIdx]

    let handIdx = options.indexOf(hand)

    if (hand == computer) {
        draw++
        console.log('draw', { hand, computer })
    } else if (
        ((handIdx + 1) % options.length) == computerIdx
    ) {
        win++
        console.log('win', { hand, computer })

    } else {
        lost++
        console.log('lose', { hand, computer })

    }

    console.log("Win :" + " " + win + " " + "draw" + " " + draw + " lost" + " " + lost)
}



play("Paper")


