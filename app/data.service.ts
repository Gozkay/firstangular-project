import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './data.model'; // Import the interface

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://127.0.0.1:8000/'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  // Example: GET request to fetch data
  getData(endpoint:string): Observable<any> {
    return this.http.get<Post[]>(`${this.apiUrl + endpoint}`);
  }

  // Example: POST request to create data
  createData(data: any,endpoint:string): Observable<any> {
    console.log('logged from service ')
    return this.http.post<Post[]>(`${this.apiUrl + endpoint}`, data);
  }

  // Example: PUT request to update data
  updateData(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/posts/${id}`, data);
  }

  // Example: DELETE request to delete data
  deleteData(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/posts/${id}`);
  }
}