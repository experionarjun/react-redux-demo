const initialState={
  fetching:false,
  fail:false,
  data:{}
}

export default function(state=initialState,action){
  switch (action.type) {
    case 'USER_FETCHING':{
      return {...state,fetching:true}
    }
    case 'USER_FETCH_SUCCESS':{
      return {...state,fetching:false,data:action.payload}
    }
    case 'USER_FETCH_ERROR':{
      return {...state,fetching:false,fail:true}
    }
    default: return state;

  }

}
