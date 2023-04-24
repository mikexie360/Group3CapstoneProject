import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserRegisterAndLoginComponent } from './user-register-and-login/user-register-and-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { CreateNewQuestionComponent } from './create-new-question/create-new-question.component';
import { SearchQuestionComponent } from './search-question/search-question.component';
import { CreatedQuestionComponent } from './created-question/created-question.component';
import { PendingQuestionComponent } from './pending-question/pending-question.component';
import { CreatedAnswerComponent } from './created-answer/created-answer.component';
import { PendingAnswerComponent } from './pending-answer/pending-answer.component';
import { ApprovedAnswerComponent } from './approved-answer/approved-answer.component';
import { ChatComponent } from './chat/chat.component';
import { UserToUserChatComponent } from './user-to-user-chat/user-to-user-chat.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminRegisterAndLoginComponent } from './admin-register-and-login/admin-register-and-login.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    UserRegisterAndLoginComponent,
    AdminLoginComponent,
    AdminSignUpComponent,
    UserLoginComponent,
    UserSignUpComponent,
    CreateNewQuestionComponent,
    SearchQuestionComponent,
    CreatedQuestionComponent,
    PendingQuestionComponent,
    CreatedAnswerComponent,
    PendingAnswerComponent,
    ApprovedAnswerComponent,
    ChatComponent,
    UserToUserChatComponent,
    PageNotFoundComponent,
    AdminRegisterAndLoginComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule, MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule, MatButtonModule,
    MatCardModule,MatGridListModule,MatSidenavModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
