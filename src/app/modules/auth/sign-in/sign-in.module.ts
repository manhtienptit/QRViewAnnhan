import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FuseCardModule } from '@fuse/components/card';
import { FuseAlertModule } from '@fuse/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { AuthSignInComponent } from 'app/modules/auth/sign-in/sign-in.component';
import { authSignInRoutes } from 'app/modules/auth/sign-in/sign-in.routing';
import {MatTabsModule} from "@angular/material/tabs";
import {MatTableModule} from "@angular/material/table";
import {MatDividerModule} from "@angular/material/divider";
import { LanguagesModule } from 'app/layout/common/languages/languages.module';
import {MessagesModule} from "app/layout/common/messages/messages.module";
import {NotificationsModule} from "app/layout/common/notifications/notifications.module";
import {ShortcutsModule} from "app/layout/common/shortcuts/shortcuts.module";
import {UserModule} from "app/layout/common/user/user.module";
import {SearchModule} from "app/layout/common/search/search.module";
import { NgxStarRatingModule } from 'ngx-star-rating';

import { BarRatingModule } from 'ngx-bar-rating';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
    declarations: [
        AuthSignInComponent
    ],
    imports     : [
        RouterModule.forChild(authSignInRoutes),
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatTableModule,
        MatTabsModule,
        MatDividerModule,
        LanguagesModule,
        MatProgressSpinnerModule,
        FuseCardModule,
        FuseAlertModule,
        SharedModule,
        MessagesModule,
        NotificationsModule,
        SearchModule,
        ShortcutsModule,
        BarRatingModule,
        FontAwesomeModule,
        UserModule,
        NgxStarRatingModule,
    ],
    exports     : [
        AuthSignInComponent
    ]
})
export class AuthSignInModule
{
}
