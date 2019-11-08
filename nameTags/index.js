const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 
const newNametag = document.getElementById("nameForm")

newNametag.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // if () {
        console.log(newNametag[0].value)
        dispatch({ type: "CHANGE TO INPUT VALUE" })

    // }
});

