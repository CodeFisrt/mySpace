import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/app/core/service/package.service';

@Component({
  selector: 'app-packges',
  templateUrl: './packges.component.html',
  styleUrls: ['./packges.component.css']
})
export class PackgesComponent implements OnInit {

  packagesArray: any[] = [];
  packageObj = {
    "packageId": 0,
    "packageName": "",
    "packageCost": "",
    "packageDescription": "",
    "isPackageActive": false
  };
  isLoader: boolean = false;


  constructor(private packageSrv: PackageService) {

  }

  ngOnInit(): void {
    debugger;
    this.loadPackages();
  }

  loadPackages() {
    debugger;
    this.isLoader = true;
    this.packageSrv.getAllPackages().subscribe((response: any) => {
      debugger;
      this.isLoader = false;
      this.packagesArray = response.data;
    })
  }

  createPackage() {
    debugger;
    this.isLoader = true;
    this.packageSrv.addNewPackage(this.packageObj).subscribe((response: any) => {
      debugger;
      this.isLoader = false;
      if (response.result) {
        this.loadPackages();
        alert("Package Added")
      } else {
        alert(response.message)
      }
    })
  }

  editRecord(id: number) {
    debugger;
    this.packageSrv.getPackageById(id).subscribe((response: any) => {
      debugger;
      if (response.result) {
        this.packageObj = response.data;
      } else {
        alert(response.message)
      }
    })
  }
  updatePackage() {
    this.isLoader = true;
    this.packageSrv.updatePackage(this.packageObj).subscribe((response: any) => {
      debugger;
      this.isLoader = false;
      if (response.result) {
        this.loadPackages();
        alert("Package Updated")
      } else {
        alert(response.message)
      }
    })
  }

  onDelete(id: number) {
    debugger;
    const isDelete = confirm("Are you Sure want to delete");
    if (isDelete == true) {
      this.isLoader = true;
      this.packageSrv.deletePackageByid(id).subscribe((res: any) => {
        this.isLoader = false;
        if (res.result) {
          this.loadPackages();
          alert("Package Deleted")
        } else {
          alert(res.message)
        }

      })
    }

  }

} 
