const initialState = [
    {
        value: "K",
        suit: "C"
    },
    {
        value: "K",
        suit: "D"
    }
];




function getValue () {
const firstValues = [2,3,4,5,6,7,8,9,10,"A","J","K","Q"]
var valueOne = firstValues[Math.floor(Math.random()*firstValues.length)];
return valueOne
}

function getSuit () {
    const secondValues = ["C","S","D","H"]
var valueTwo = secondValues[Math.floor(Math.random()*secondValues.length)];
return valueTwo 
}


const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!

    const { type } = action;

    // ACTION - Change either card to a random new one (Try implementing one action that both buttons dispatch)
    if (type === "CHANGE FIRST CARD") {
        return [
            {
            value: getValue(),
            suit: getSuit()
        },
        state[1]
    ]
    }

    if (type === "CHANGE SECOND CARD") {
        return [
            state[0],
            {
            value: getValue(),
            suit: getSuit()
        }
    ]
    }
    
    return state;
}


