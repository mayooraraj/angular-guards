import { CanActivateFn } from '@angular/router';

export const roleGuard: CanActivateFn = (route, state) => {
  let role = localStorage.getItem("userType");
  if(role== "admin"){
    return true;
  }
  else{
    alert("you dont have admin rights");
    return false;
  }
  return true;
};
