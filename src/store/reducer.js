

const initialState = {
    count_item:0,
    checkoutitem :[],
    color_logo_class:"color_logo_class_white"
};

const reducer = (state=initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case 'add_item':
            newState.count_item += 1
            newState.checkoutitem=action.value
            console.log(newState.checkoutitem)
            break;

        case 'update_logo':
            newState.color_logo_class= action.value;
            break;
    }
    return newState;
};

export default reducer;
