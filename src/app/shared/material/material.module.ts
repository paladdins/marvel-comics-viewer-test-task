import { NgModule } from '@angular/core';

// Material modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

const Modules = [BrowserAnimationsModule, MatCardModule];

@NgModule({
  imports: [...Modules],
  exports: [...Modules],
})
export class MaterialModule {}
