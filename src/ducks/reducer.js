const initialState = {
  mobileMenu: false
}

//Action types
const MOBILE_MENU_ACTIVE = "MOBILE_MENU_ACTIVE"
//Action Creators
export function mobileMenu(bool) {}

//Object.assign cases

export default function reducer(state = initialState, action) {
  // console.log('this',action);
  switch (action.type) {
    default:
      return state
  }
}
