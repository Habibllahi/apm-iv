
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";

export const productDetailGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot)=>{
  const id = route.paramMap.get('id');
  const num = Number(id);
  if(!Number.isNaN(num)){

    return true;
  }else{
    return false;
  }
}
