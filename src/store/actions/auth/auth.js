import * as TYPES from "../../types";
import  AsyncStorage  from 'react-native';

const logout = () => {
    return {
      type: TYPES.LOGOUT,  
    };
  };
  const login = () => {
    return {
      type: TYPES.LOGIN, 
  
    };
  };
  export const loginAction = async (params) => {
    return (dispatch) => {
        //dispatch(login());
      AsyncStorage.setItem('IsLoggedIn',1)
      this.props.navigation.navigate("app");
    };
  };
  

  export const logoutAction = () => {
    return (dispatch) => {
      dispatch(logout());
     AsyncStorage.clear();
      this.props.navigation.navigate("login");
    };
  };