const initialState={
  fetching:false,
  fail:false,
  total:500,
  items : [{name:'something',price:250,qty:2}]
}

export default function(state=initialState,action){
  switch (action.type) {
    case 'CART_FETCHING':{
      return {...state,fetching:true};
    }
    default: return state;
  }
}
