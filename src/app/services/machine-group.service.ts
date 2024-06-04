import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MachineGroupService {
  constructor(private http: HttpClient) {}

  addUser(data: any): Observable<any> {
    return this.http.post(
      'http://192.168.1.231:8051/odata/Machines',
      data
    );
  }

  // updateUser(id: number, data: any): Observable<any> {
  //   return this.http.put(
  //     `http://192.168.1.231:8051/odata/Machines/${id}`,
  //     data
  //   );
  // }

  getUser(): Observable<any> {
    return this.http.get('http://192.168.1.231:8051/odata/Machines');
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(
      `http://192.168.1.231:8051/odata/Machines/${id}`
    );
  }
}
