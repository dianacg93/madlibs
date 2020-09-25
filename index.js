function madlibs(story){
    if (Number(story) === 1 || story.toLowerCase() === "story one"){
        let adjective = prompt("Type an adjective");
        let place = prompt("Type a general place");
        let vehicle = prompt("Type a vehicle name");
        let gameName = prompt("Type the name of a game");
        let noun = prompt("Type a plural noun");
        let ingVerb1 = prompt("Type an 'ing' verb");
        let ingVerb2 = prompt("Type another 'ing' verb");
        let food = prompt("Type a food name (plural)");
        let sport = prompt("Type the name of a sport");
        let ingVerb3 = prompt("Type another 'ing' verb");
        let emotion = prompt("Type an emotion");
        let number = Number(prompt("Type a number"));
        story = `A vacation is when you take a trip to some ${adjective} place near an amazing ${place}. A good vacation place is one where you can ride ${vehicle} or play ${gameName} or go hunting for ${noun}. I like to spend my time ${ingVerb1} or ${ingVerb2}. When parents go on a vacation, they spend their time eating three ${food} a day. Usually, fathers play ${sport}, and mothers spend their time ${ingVerb3}. Adults need vacations more than kids because adults are always very ${emotion} because they have to work ${number} hours every day all year just to afford their vacations!`;
        alert(story)
    } else if (Number(story) === 2 || story.toLowerCase() === "story two"){
        let adjective1 = prompt("Type an adjective");
        let famousPlace = prompt("Type a famous place");
        let pluralNoun = prompt("Type a plural noun");
        let adjective2 = prompt("Type another adjective");
        let food = prompt("Type a food (plural)");
        let emotion = prompt("Type an emotion");
        let ingVerb1 = prompt("Type an 'ing' verb");
        let commonPlace = prompt("Type a famous place");
        let adjective3 = prompt("Type another adjective");
        let noun1 = prompt("Type a noun");
        let adjective4 = prompt("Type another adjective");
        let noun2 = prompt("Type another noun");
        let famMember = prompt("Type a family member");
        let adjective5 = prompt("Type another adjective");
        story = `Today we took a ${adjective1} fieldtrip to ${famousPlace}. They're famous for making ${pluralNoun} and for cooking ${adjective2} ${food}. Eating all that food made me feel ${emotion}. Next we enjoyed the local tradition of ${ingVerb1} in the middle of the ${commonPlace}! Finally, we went shopping for souvenirs. I bought a ${adjective3} ${noun1} for myself, and a ${adjective4} ${noun2} for my favorite ${famMember}. I'll definitely never forget this ${adjective5} trip!`
        alert(story)
    } else {
        alert("Please provide a valid input.")
        location.reload()
    }
}

let player = prompt("Would you like 'Story One' or 'Story Two'?");
madlibs(player);