import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AppservicesService {
  baseUrl = "http://localhost:3001/";

  constructor(private http: HttpClient) {}

  getCards() {
    return this.http.get<any>(`${this.baseUrl}produtosEpa`);
  }

  createCards(nome: String, preco: String, img: String) {
    return this.http.post<any>(`${this.baseUrl}produtosEpa`, {
      nome: nome,
      preco: preco,
      img: img,
    });
  }

  deleteCard(id: Number) {
    return this.http.delete<any>(`${this.baseUrl}produtosEpa/${id}`);
  }
}
