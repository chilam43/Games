
// ////////生成52張牌///
// const suits = ["Diamond", "Club", "Heart", "Spade"];
// const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

// let cardSet = []

// for (let i = 0; i < suits.length; i++) {

//     let suitsA = suits[i]
//     for (let j = 0; j < ranks.length; j++) {
//         let ranksA = ranks[j]

//         cardSet.push([suitsA, ranksA])
//     }
// }

// console.log(cardSet);
// console.log(cardSet.length);



// ///比較大細/////


// // function compare(cardA, cardB) {
// //     const suits = ["Diamond", "Club", "Heart", "Spade"];
// //     const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
// //     const [suitA, rankA] = cardA
// //     const [suitB, rankB] = cardB
// //     let result = suits.indexOf(suitA) - suits.indexOf(suitB)
// //     if (result !== 0) { console.log(result) }
// //     else { console.log(ranks.indexOf(rankA) - ranks.indexOf(rankB)) }

// // }
// ////////////派牌

// // let playA = []
// // let playB = []
// // let playC = []
// // let playD = []


// // function cards() {
// //     ////洗牌
// //     let cardArray = []
// //     for (let k = 0; k < 52; k++) {
// //         let num = Math.floor((Math.random() * 52))
// //         if (cardArray.includes(num)) { k-- }
// //         else cardArray.push(num)
// //     }


// //     ////派牌俾a
// //     for (let i = 0; i < 13; i++) {

// //         playA.push(cardSet[cardArray[i]])
// //     }


// //     ////派牌俾a
// //     for (let j = 13; j < 26; j++) {

// //         playB.push(cardSet[cardArray[j]])
// //     }

// //     ////派牌俾c
// //     for (let k = 26; k < 39; k++) {

// //         playC.push(cardSet[cardArray[k]])
// //     }

// //     ////派牌俾d
// //     for (let l = 39; l < 52; l++) {

// //         playD.push(cardSet[cardArray[l]])
// //     }
// // }






// // let game = cards()
// // console.log(playA)
// // console.log(playA.length)
// // console.log(playB)
// // console.log(playB.length)
// // console.log(playC)
// // console.log(playC.length)
// // console.log(playD)
// // console.log(playD.length)


// ///21點
class Points {
    cardArray
    cardSet
    playerA
    score


    constructor() {
        this.cardArray = []
        this.cardSet = []
        this.playerA = []
        this.score = 0
        this.shape = ["Diamond", "Club", "Heart", "Spade"];
        this.value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    }

    createCard() {
        const suits = ["Diamond", "Club", "Heart", "Spade"];
        const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        for (let i = 0; i < suits.length; i++) {

            let suitsA = suits[i]
            for (let j = 0; j < ranks.length; j++) {
                let ranksA = ranks[j]

                this.cardSet.push([suitsA, ranksA])
            }
        }
        return this.cardSet

    }
    shuffle() {
        for (let k = 0; k < 52; k++) {
            let num = Math.floor((Math.random() * 52))
            if (this.cardArray.includes(num)) { k-- }
            else this.cardArray.push(num)
        }
        return this.cardArray
    }

    distributeCard() {
        for (let i = 0; i < 2; i++) {
            let twoCards = this.cardArray.shift()



            this.score = this.score + ((+(this.value.indexOf((this.cardSet[twoCards])[1]))) + 1)

            this.playerA.push(this.cardSet[twoCards])



        }
        console.log("now point is", this.score)
        if (this.score >= 21) {
            console.log("end");
        }
        return this.playerA
    }
    getCard() {
        let card = this.cardArray.shift()
        this.score = this.score + ((+(this.value.indexOf((this.cardSet[card])[1]))) + 1)
        this.playerA.push(this.cardSet[card])

        if (this.score >= 21) {
            return console.log("now point is", this.score, "end of Game"), this.playerA
        }
        else {
            return console.log("now point is", this.score,), this.playerA

        }
    }


}

let player = new Points
player.createCard()
player.shuffle()
console.log("Player A: ", player.distributeCard())
console.log(player.getCard())
console.log(player.getCard())


