import {Component, Input, OnInit} from '@angular/core';
import {EntryInterface} from "../../../../interfaces/entries.interface";

@Component({
  selector: 'ae-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent {
  @Input() entry: EntryInterface;
}
