import { CanDeactivateFn } from '@angular/router';

export const formDeactiveGuard: CanDeactivateFn<unknown> = (component:any, currentRoute, currentState, nextState) => {
  console.log(component);
  if((component && component?.username && component?.username?.dirty) ||
      (component && component?.email && component?.email?.dirty)
      (component && component?.pwd && component?.pwd?.dirty)){
    const confirmation = confirm("Are you sure to go back ?");

    if(confirmation)
    {
      return true;
    }else{
      return false;
    }
  }
  
  
  return true;
};
