const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({type: null}); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 
let redButton = document.getElementById('red');
let blueButton = document.getElementById('blue');
let addWidthButton = document.getElementById('width');
let addHeightButton = document.getElementById('height');

redButton.addEventListener("click", function (e) {
    dispatch({ type: "CHANGE TO RED" })
})

blueButton.addEventListener("click", function (e) {
    dispatch({ type: "CHANGE TO BLUE" })
})

addWidthButton.addEventListener("click", function (e) {
    dispatch({ type: "CHANGE WIDTH" })
})

addHeightButton.addEventListener("click", function (e) {
    dispatch({ type: "CHANGE HEIGHT" })
})

