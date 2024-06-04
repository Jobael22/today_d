import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-machine-data',
  templateUrl: './machine-data.component.html',
  styleUrl: './machine-data.component.css'
})
export class MachineDataComponent implements OnInit{

  data: any[] = [];
  httpClient: HttpClient;
  order: boolean = true;
  sortBy: string = '';
  public dialogref: any;
  isDialogOpen?: boolean;

  constructor(private http: HttpClient) {
    this.httpClient = http;
  }
  // for add button open
  openDialog() {
    this.isDialogOpen = true;
    console.log(this.isDialogOpen);
  }

  //for edit button
  // editOpenDialog(data: any){
  //   this.isDialogOpen = true;
  // }

  ll() {
    this.isDialogOpen = false;
  }

  ngOnInit(): void {
    this.fetchData();
    
  }

  fetchData() {
    this.http
      .get('http://192.168.1.231:8051/odata/Machines?top=200&skip=600')
      .subscribe((data: any) => {
        console.log(data.value);
        this.data = data.value;
      });
  }

  closeDialog() {
    this.isDialogOpen = false;
  }

  onDelete(id: string) {
    this.http
      .delete('http://192.168.1.231:8051/odata/Machines/' + id)
      .subscribe((res) => {
        console.log(res);
        this.fetchData();
      });
  }

  sortData(property: string) {
    if (property === this.sortBy) {
      this.order = !this.order;
    } else {
      this.sortBy = property;
      this.order = true;
    }

    this.data.sort((a, b) => {
      const aValue = a[property];
      const bValue = b[property];

      if (aValue < bValue) return this.order ? -1 : 1;
      if (aValue > bValue) return this.order ? 1 : -1;
      return 0;
    });
  }
}
