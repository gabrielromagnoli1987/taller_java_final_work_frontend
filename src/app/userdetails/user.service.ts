import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUserDetails(id: Number): Observable<Object> {
    return this.httpClient.get<Object>(environment.api + `/users/${id}`);
  }

  getUserDetailsByEmail(email: String): Observable<Object> {
    return this.httpClient.get<Object>(environment.api + `/users/search/findByEmail?email=${email}`);
  }

  getActiveVets() {
    return this.httpClient.get<[]>(environment.api + '/users/vets-active');
  }

  getVets() {
    return this.httpClient.get<[]>(environment.api + '/users/vets');
  }

  updateUserConfig(userId, userConfig) {
    return this.httpClient.put(environment.api + `/users/${userId}/update-config`, userConfig);
  }

  deleteUser(userId) {
    return this.httpClient.delete(environment.api + `/users/${userId}`);
  }

  enableVetUser(userId, isEnabledObject) {
    return this.httpClient.patch(environment.api + `/users/${userId}/enable-vet`, isEnabledObject);
  }

}
