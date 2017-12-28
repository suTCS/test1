import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatDialogModule, MatOptionModule, MatSelectModule, MatTableModule, MatPaginatorModule, MatGridListModule, MatExpansionModule, MatListModule, MatFormFieldModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogComponent} from './components/dialog/dialog.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
    imports: [MatButtonModule,
        BrowserAnimationsModule,
        MatButtonModule, 
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatDialogModule,
        MatTooltipModule,
        MatOptionModule,
        MatSelectModule,
        MatSnackBarModule,
        MatSidenavModule,
        MatTableModule,
        MatPaginatorModule,
        MatGridListModule,
        MatExpansionModule,
        MatListModule,
        MatFormFieldModule
        ],
    exports: [MatButtonModule,
        BrowserAnimationsModule,
        MatButtonModule, 
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatDialogModule,
        MatTooltipModule,
        MatOptionModule,
        MatSelectModule,
        MatSnackBarModule,
        MatSidenavModule,
        MatTableModule,
        MatPaginatorModule,
        MatGridListModule,
        MatExpansionModule,
        MatListModule,
        MatFormFieldModule
    ],
    entryComponents: [
        DialogComponent
    ]
})

export class MaterialModule {

}