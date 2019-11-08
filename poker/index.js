const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 
let randomCardFirst = document.getElementById("card1Button")
let randomCardSecond = document.getElementById("card2Button")

randomCardFirst.addEventListener("click", function (e) {
    dispatch({ type: "CHANGE FIRST CARD" })
})

randomCardSecond.addEventListener("click", function (e) {
    dispatch({ type: "CHANGE SECOND CARD" })
})