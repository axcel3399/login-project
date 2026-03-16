<<<<<<< HEAD
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};
=======

import { NgModule } from '@angular/core';

@NgModule({
  imports: [], 
  providers: []
})
export class AppConfig {}
>>>>>>> 93afeb074abc067e815f15841c30bdfcdd79594c
