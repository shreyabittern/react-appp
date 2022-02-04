export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    // if (user && user.token) {
    //     return { 'Authorization': 'Bearer ' + user.token };
    // } else {
    //     return {};
    // }

    if (user && user.authentication_token) {
        return { 'User-Token': user.authentication_token };
    } else {
        return {};
    }
}


export default class AuthHeader {
    static getHeader()  {
      let data = JSON.parse(localStorage.getItem('user'));
      if (data && data.user && data.user.authentication_token) {
          return { 'User-Token': data.user.authentication_token };
      } else {
          return {};
      }
    };

     static simpleHeader()  {
          return { 'Content-Type': 'application/json' };    
    };
  
}