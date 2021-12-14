"use strict"

function getVoteCount(obj){
    let arr = Object.values(obj);
    return arr[0] - arr[1];
};
console.log(getVoteCount({upvotes: 2, downvotes: 33}))
