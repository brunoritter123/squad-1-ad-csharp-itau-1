import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PoModule, PoDialogService } from '@portinari/portinari-ui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ControleErrosComponent } from './controle-erros/controle-erros.component';
import { LoginComponent } from './login/login.component';
import { PoTemplatesModule } from '@portinari/portinari-templates';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ControleErrosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PoModule,
    PoTemplatesModule
  ],
  providers: [
    PoDialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
