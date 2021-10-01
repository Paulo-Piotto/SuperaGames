function byScore(a,b){
    return a.score < b.score ? 1 : a.score > b.score ? -1 : 0;
}

function byPrice(a,b){
    return a.price < b.price ? 1 : a.price > b.price ? -1 : 0;
}

function byName(a,b){
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
}

function byRandom(a,b){
    return 0.5 - Math.random();
}

export {
    byScore,
    byPrice,
    byName,
    byRandom
}
