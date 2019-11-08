const initialState = {
    width: 100,
    height: 200,
    color: "#FF00FF"
};

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    // ACTION 1 - Increment height by 10
    if (type === "CHANGE HEIGHT") {
        return {
            width: state.width,
            height: state.height + 10,
            color: state.color
        }
    }
    // ACTION 2 - Increment width by 10
    if (type === "CHANGE WIDTH") {
        return {
            width: state.width + 10,
            height: state.height,
            color: state.color
        }
    }

    // ACTION 3 - Change the color
    if (type === "CHANGE TO BLUE") {
        return {
            width: state.width,
            height: state.height,
            color: "#0000FF"
        }
    }

    if (type === "CHANGE TO RED") {
        return {
            width: state.width,
            height: state.height,
            color: "#FF0000"
        }
    }

    return state;
}