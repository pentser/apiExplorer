import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExplorerComponent } from './components/explorer/explorer.component';
import { ExplorerRoutingModule } from './explorer-routing.module';
import { EntriesComponent } from './components/entries/entries.component';
import { EntryComponent } from './components/entry/entry.component';
import { FilterComponent } from './components/filter/filter.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [

    ExplorerComponent,
    SearchComponent,
    FilterComponent,
    EntriesComponent,
    EntryComponent],
  imports: [
    CommonModule,
    FormsModule,
    ExplorerRoutingModule,
   
  ]
})
export class ExplorerModule { }
