const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store.

let sortLikesBtn = document.getElementById("sortLikes");
let sortRetweetsBtn = document.getElementById("sortRetweets");
let sortRepliesBtn = document.getElementById("sortReplies");

sortLikesBtn.addEventListener("click", function(e) {
    console.log('sort like')
    dispatch({ type: "SORT LIKES" })
})

sortRetweetsBtn.addEventListener("click", function(e) {
    console.log('sort retweet')
    dispatch({ type: "SORT RETWEETS" })
})

sortRepliesBtn.addEventListener("click", function(e) {
    console.log('sort replies')
    dispatch({ type: "SORT REPLIES" })
})





