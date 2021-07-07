

export default (state = [], action) => {

  let objIndex = state.findIndex((obj => obj.id === action.quoteId));

  switch(action.type){
    case 'ADD_QUOTE':
      return state.concat(action.quote)
    case 'REMOVE_QUOTE':
      return state.filter(quote=>quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
    
      return [ 
        ...state.slice(0,objIndex),
        {...state[objIndex],
           votes: state[objIndex].votes +1},
           ...state.slice(objIndex + 1),
      ]
    case 'DOWNVOTE_QUOTE':

      if(state[objIndex].votes === 0){
        return state;
      }else{
        return [ 
          ...state.slice(0,objIndex),
          {...state[objIndex],
             votes: state[objIndex].votes -1},
             ...state.slice(objIndex + 1),
        ]

      }
    default: 
      return state;

  }



}
