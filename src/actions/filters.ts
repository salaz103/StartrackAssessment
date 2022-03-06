type SetSearchText = {
    type:"SET_TEXT",
    searchText:string
}


export const setText=(search:string):SetSearchText=>({
    type:"SET_TEXT",
    searchText:search
})
