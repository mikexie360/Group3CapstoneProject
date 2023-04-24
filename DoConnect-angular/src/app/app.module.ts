import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    UserToUserChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
