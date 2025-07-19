import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

@NgModule({
  imports: [
    ServerModule,
    
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
