export interface filterState {
    searchText: string
}


const defaultState = {
    searchText:''
}


export const filterReducer = (state:filterState = defaultState, action:any) => {
    switch (action.type) {
        case "SET_TEXT":
            return {...state,searchText:action.searchText}
        default:
            return state;
    }

}