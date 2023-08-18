function getQuestionPart(phrases:string[]):string[] {
    let commonWords:string[] = [];
    // find potential common words
    for (let i = 0; i < phrases[0].length; i++) {
        for (let j = i + 1; j <= phrases[0].length; j++) {
            let seq = phrases[0].substring(i, j);
            if (phrases.slice(1).every(word => word.includes(seq))) {
                commonWords.push(seq);
            }
        }
    }
    
    // select the longest common word (big word, not some alphabets)
    let commonWord:string = commonWords.reduce((maxSeq, seq) => seq.length > maxSeq.length ? seq : maxSeq, "");

    // remove common word from every members in phases array
    phrases.forEach((phrase, index, array) => {
        array[index] = phrase.replace(commonWord, "").trim();
    });

    return phrases;
}