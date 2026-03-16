import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
<<<<<<< HEAD
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
=======
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/routes'; 

bootstrapApplication(AppComponent, {
  providers: [provideRouter(appRoutes)]
});
>>>>>>> 93afeb074abc067e815f15841c30bdfcdd79594c
