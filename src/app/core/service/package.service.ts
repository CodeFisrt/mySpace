import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private http: HttpClient) { }

  getAllPackages() {
    return this.http.get("http://onlinetestapi.gerasim.in/api/Meeting/GetAllPackages");
  }

  addNewPackage(obj: any) {
    return this.http.post("http://onlinetestapi.gerasim.in/api/Meeting/createPackage",obj);
  }
  getPackageById(packageId: number) {
    return this.http.get("http://onlinetestapi.gerasim.in/api/Meeting/GetPackgeById?id=" + packageId);
  }

  updatePackage(obj: any) {
   return this.http.post("http://onlinetestapi.gerasim.in/api/Meeting/UpdatePackge", obj);
  }
  deletePackageByid(packageId: number) {
    return this.http.post("http://onlinetestapi.gerasim.in/api/Meeting/DeletePackgeById?id="+ packageId,{});
  }
}
