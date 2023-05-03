
import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";

export const productDetailGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot)=>{
  const router: Router = inject(Router);
  const id = route.paramMap.get('id');
  const num = Number(id);
  if(Number.isNaN(num) || num < 0){
    alert('Invalid product id')
    router.navigate(['/products'])
    return false;
  }

  return true;
}
