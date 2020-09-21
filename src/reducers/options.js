const optionsReducerDefaultState = {
    reaction: 'all' // reaction --> selected tab in reaction details popup
};

export default (state = optionsReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};