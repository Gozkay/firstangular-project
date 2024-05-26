import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '../data.model'; // Import the interface
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  data: any[] = [];
  notebook_name!: string
  checkoutForm = this.formBuilder.group({
    notebook_name: ''});
  constructor(private dataService: DataService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dataService.getData('notebooks/notebook_list/').subscribe((response) => {
      this.data = response;
    });
  }
  getNotebooks(){
    this.dataService.getData('notebooks/notebook_list/').subscribe((response) => {
      this.data = response;
    });

  }
  submit(){
    console.log('logged from component')
    const newData = { notebook_name: 'New '};

    this.dataService.createData(newData,'notebooks/notebook_list/' ).subscribe((response) => {
      // Handle the response from the API (e.g., update your data or display a message)
      console.log('Data posted successfully:', response);
    });    
  }
  postNotebook(){
    console.log('logged from component')
    const newData = { notebook_name: this.notebook_name};
    console.log(this.notebook_name)

    this.dataService.createData(newData,'notebooks/notebook_list/' ).subscribe((response) => {
      // Handle the response from the API (e.g., update your data or display a message)
      console.log('Data posted successfully:', response);
    });
  }

}
