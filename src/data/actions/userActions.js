const URL = `https://randomuser.me/api/`;

export default function userDetailsFetch() {
  return(dispatch) => {
      dispatch(userDetailsFetchFunc())
  }
}

function userDetailsFetchFunc() {
  return(dispatch) => {
    dispatch(apiCallStart('USER_FETCHING'));
    fetch(URL)
     .then( response => response.json())
     .then( res =>{
       console.log("RES:::",res);
      dispatch(apiCallSuccess('USER_FETCH_SUCCESS',res.results[0]));
    })
    .catch(error=>{
      console.log("ERROR",error);
      dispatch(apiCallFail('USER_FETCH_ERROR'));
    })
  }
}

function apiCallStart(type) {
  return{
    type
  }
}

function apiCallSuccess(type,payload) {
  return{
    type,
    payload
  }
}

function apiCallFail(type) {
  return{
    type
  }
}
