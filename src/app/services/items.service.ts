import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Item {
  id?: number;
  nombre: string;
  categoria: string;
  estado: string;
  descripcion?: string;
  fecha_registro?: string;
}

@Injectable({ providedIn: 'root' })
export class ItemsService {

  private API_URL = 'http://localhost:3000/api/items';

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.API_URL);
  }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.API_URL}/${id}`);
  }

  createItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.API_URL, item);
  }

  updateItem(id: number, data: Partial<Item>): Observable<Item> {
    return this.http.put<Item>(`${this.API_URL}/${id}`, data);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}
