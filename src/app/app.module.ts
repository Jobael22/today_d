import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {
  BrowserModule,
  
} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LabelComponent } from '@ui5/webcomponents-ngx/main/label';
import { ButtonComponent } from '@ui5/webcomponents-ngx/main/button';
import { InputComponent } from '@ui5/webcomponents-ngx/main/input';

import '@ui5/webcomponents/dist/Button.js';

import '@ui5/webcomponents/dist/Dialog.js';
import '@ui5/webcomponents/dist/Button.js';
import '@ui5/webcomponents/dist/Input.js';
import '@ui5/webcomponents/dist/Link.js';
import '@ui5/webcomponents/dist/Label.js';
import '@ui5/webcomponents/dist/Table.js';
import '@ui5/webcomponents/dist/TableRow.js';
import '@ui5/webcomponents/dist/TableColumn.js';
import '@ui5/webcomponents/dist/TableCell.js';
import '@ui5/webcomponents/dist/Avatar.js';
import '@ui5/webcomponents-fiori/dist/Page.js';

import '@ui5/webcomponents-icons/dist/home.js';
import '@ui5/webcomponents-icons/dist/action-settings.js';
import '@ui5/webcomponents-fiori/dist/Bar.js';
import '@ui5/webcomponents-fiori/dist/ShellBar.js';
import '@ui5/webcomponents-icons/dist/customer.js';
import '@ui5/webcomponents-icons/dist/nav-back.js';
import '@ui5/webcomponents-icons/dist/AllIcons.js';
import '@ui5/webcomponents/dist/Title.js';
import '@ui5/webcomponents/dist/Avatar.js';
import '@ui5/webcomponents/dist/Button.js';
import '@ui5/webcomponents/dist/Input.js';
import '@ui5/webcomponents/dist/StandardListItem.js';
import '@ui5/webcomponents/dist/Popover.js';
import '@ui5/webcomponents/dist/Title.js';
import '@ui5/webcomponents/dist/List.js';

import '@ui5/webcomponents-fiori/dist/ShellBar.js';
import '@ui5/webcomponents/dist/features/InputSuggestions.js';

import '@ui5/webcomponents/dist/DatePicker.js';

import '@ui5/webcomponents/dist/Select.js';
import '@ui5/webcomponents/dist/Option.js';
import '@ui5/webcomponents-icons/dist/ipad.js';
import '@ui5/webcomponents-icons/dist/iphone.js';
import '@ui5/webcomponents-icons/dist/laptop.js';
import '@ui5/webcomponents/dist/CheckBox.js';
import '@ui5/webcomponents-icons/dist/nav-back.js';
import '@ui5/webcomponents-icons/dist/sys-find.js';
import '@ui5/webcomponents-icons/dist/settings.js';
import '@ui5/webcomponents-icons/dist/edit.js';
import '@ui5/webcomponents-icons/dist/sys-help.js';
import '@ui5/webcomponents-icons/dist/log.js';
import '@ui5/webcomponents/dist/Toolbar.js';
import '@ui5/webcomponents/dist/ToolbarButton.js';

import '@ui5/webcomponents/dist/Table.js';
import '@ui5/webcomponents/dist/TableRow.js';
import '@ui5/webcomponents/dist/TableColumn.js';
import '@ui5/webcomponents/dist/TableCell.js';
import { HeaderComponent } from './header/header.component';
import { SupplierComponent } from './header/supplier/supplier.component';
import { MachineDataComponent } from './machine-data/machine-data.component';

import { FormOpenComponent } from './form-open/form-open.component';
import '@ui5/webcomponents/dist/Icon.js';
import '@ui5/webcomponents-icons/dist/delete.js';

import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js';
import {
  HttpClientModule,
  
} from '@angular/common/http';
import '@ui5/webcomponents/dist/Toolbar.js';
import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js';
import '@ui5/webcomponents/dist/Switch.js';
import '@ui5/webcomponents/dist/TabContainer.js';
import '@ui5/webcomponents/dist/Tab.js';
import { SwitchComponent } from '@ui5/webcomponents-ngx/main/switch';
import { MasterDataComponent } from './master-data/master-data.component';
import { ContributionDataComponent } from './contribution-data/contribution-data.component';
import { AdditionalDataComponent } from './additional-data/additional-data.component';
import { NotesComponent } from './notes/notes.component';
import { AttachmentComponent } from './attachment/attachment.component';
import { RouterModule, Routes } from '@angular/router';
import '@ui5/webcomponents/dist/Title.js';
import '@ui5/webcomponents/dist/Label.js';
import '@ui5/webcomponents/dist/Button.js';
import '@ui5/webcomponents/dist/FileUploader.js';

import '@ui5/webcomponents-fiori/dist/UploadCollection.js';
import '@ui5/webcomponents-fiori/dist/UploadCollectionItem.js';

import '@ui5/webcomponents/dist/ComboBox.js';
import '@ui5/webcomponents/dist/ComboBoxItem.js';
import '@ui5/webcomponents/dist/TextArea.js';
import '@ui5/webcomponents/dist/Button.js';
import '@ui5/webcomponents/dist/Title.js';
import '@ui5/webcomponents/dist/Link.js';

import '@ui5/webcomponents-fiori/dist/IllustratedMessage.js';
import '@ui5/webcomponents-fiori/dist/illustrations/UnableToUpload.js';
import '@ui5/webcomponents-icons/dist/document-text.js';
import '@ui5/webcomponents-icons/dist/add.js';
import '@ui5/webcomponents/dist/FileUploader.js';
import '@ui5/webcomponents/dist/Button.js';
import '@ui5/webcomponents/dist/Label.js';

import '@ui5/webcomponents-icons/dist/upload.js';

const routes: Routes = [
  {
    path: 'master_data',
    component: MasterDataComponent,
  },
  {
    path: 'contribution_data',
    component: ContributionDataComponent,
  },
  {
    path: 'machine_data',
    component: MachineDataComponent,
  },
  {
    path: 'additional data',
    component: AdditionalDataComponent,
  },
  {
    path: 'notes',
    component: NotesComponent,
  },
  {
    path: 'attachment',
    component: AttachmentComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SupplierComponent,
    MachineDataComponent,
    FormOpenComponent,
    MasterDataComponent,
    ContributionDataComponent,
    AdditionalDataComponent,
    NotesComponent,
    AttachmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LabelComponent,
    ButtonComponent,
    InputComponent,
    ReactiveFormsModule,
    HttpClientModule,
    SwitchComponent,
    RouterModule.forRoot(routes),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
