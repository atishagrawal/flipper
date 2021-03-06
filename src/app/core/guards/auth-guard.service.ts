import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, CanLoad, Route } from '@angular/router';
import { CurrentUser } from './current-user';
import { FlipperEventBusService } from '@enexus/flipper-event';
import { filter } from 'rxjs/internal/operators';
import { UserLoggedEvent } from '@enexus/flipper-components';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
// done
  constructor(private eventBus: FlipperEventBusService,private currentUser: CurrentUser, private router: Router) {
    this.eventBus.of < UserLoggedEvent > (UserLoggedEvent.CHANNEL)
    .pipe(filter(e => e.user && (e.user.id !== null ||  e.user.id !==undefined)))
    .subscribe(res =>
      this.currentUser.currentUser = res.user);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.handle(state.url);
  }

  async canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return await this.handle(state.url);
  }
  async canLoad(route: Route) {
    return await this.handle(route.path);
  }


  private async handle(url: string) {

    await this.currentUser.user();
    if (this.currentUser.currentUser) {
      return true;
    }

    this.currentUser.redirectUri = url;

    await this.router.navigate(['/login']);
    return false;
  }

}
