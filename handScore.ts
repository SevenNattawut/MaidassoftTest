function getHandScore(input: string): number {
    let pts: number = 0;
    let cards = new Map<string, number>();
    let scoresSet: number[] = [0, 0, 0, 0]; // H, C, D, S

    input.split(' ').forEach(card => {
        // 1-10: <card value> pts, J/Q/K : 10 pts, A: 11 pts
        let score:number = !isNaN(+card.slice(1)) ? Number(card.slice(1)) : card.slice(1) === "A" ? 11 : 10;
        cards.set(card, score)
    });

    //special cases (same rank), if three cards are Aces, get 35 pts.
    let keys = Array.from(cards.keys());
    // Ace
    if(keys[0].slice(1) === keys[1].slice(1) && keys[1].slice(1) === keys[2].slice(1) && keys[0].slice(1) === "A") {
        return 35;
    // Other cards
    } else if(keys[0].slice(1) === keys[1].slice(1) && keys[1].slice(1) === keys[2].slice(1) && keys[0] !== "A") {
        return 32.5;
    }

    // normal cases
    // get the score of each card and assign to the scoreSet
    for(let [card, score] of cards.entries()) {
        // check suit type
        switch(card.slice(0, 1)) {
            case "H":
                scoresSet[0] += score;
                break;
            case "C":
                scoresSet[1] += score;
                break;
            case "D":
                scoresSet[2] += score;
                break;
            default:
                scoresSet[3] += score;
                break;
        }
    }

    // get max score among 4 suits
    pts = Math.max(...scoresSet);

    return pts;
}