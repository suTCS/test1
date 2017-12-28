import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
//import {HttpClientModule} from '@angular/common/http';
//import {ProfileService} from './services/profile.service';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import {ProfileService} from './services/profile.service';
import {FormsModule} from '@angular/forms';

import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

// import {ListuserEffects} from './components/effects/listusereffects';
//import {listuserReducer} from './components/reducers/listuserreducer';
import {MaterialModule} from './material.module';
import { DialogComponent } from './components/dialog/dialog.component';
import { SearchComponent } from './components/search/search.component';

//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import { CommonModule } from '@angular/common';
//import { MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MdCardModule  } from '@angular/material';

const appRoutes: Routes = [
  {path: '', component: ListuserComponent},
  {path: 'op', component: UserFormComponent},
  {path: 'searc', component: SearchComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    ListuserComponent,
    UserFormComponent,
    DialogComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    //HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MaterialModule
    //EffectsModule.forRoot([ListuserEffects]),
    //StoreModule.forRoot({user: listuserReducer}),
//StoreDevtoolsModule.instrument({maxAge: 25})
    
  ],
 
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
