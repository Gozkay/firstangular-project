import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css'],
})
export class SwitchesComponent {

favoritefood: string="";
foods: string[] = ['Ukwa','Okpa', 'Abacha', 'CassavaFlakes'];
}
