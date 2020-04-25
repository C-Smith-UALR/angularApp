import { Component } from '@angular/core';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  // physicians = [{title: 'test'}];
  physicians = [];
  selectedPhysician;

  constructor(private api: ApiService) {
    this.getPhysicians();
    this.selectedPhysician = {id: -1, firstName: '', lastName: '', maxShiftLoad: 0, phoneNumber: '+14794567890', specialty: ''};
  }
  getPhysicians = () => {
    this.api.getAllPhysicians().subscribe(
      data => {
        this.physicians = data;
      },
      error => {
        console.log(error);
      }
    );

  }
  physicianClicked = (physician) => {
    console.log(physician.id);
    this.api.getOnePhysician(physician.id).subscribe(
      data => {
        this.selectedPhysician = data;

      },
      error => {
        console.log(error);
      }
    );
  }

  updatePhysician = () => {
    this.api.updatePhysician(this.selectedPhysician).subscribe(
      data => {
        this.getPhysicians();

      },
      error => {
        console.log(error);
      }
    );
  }

    createPhysician = () => {
      this.api.createPhysician(this.selectedPhysician).subscribe(
        data => {
          this.physicians.push(data);

        },
        error => {
          console.log(error);
        }
      );

  }

  deletePhysician = () => {
    this.api.deletePhysician(this.selectedPhysician.id).subscribe(
      data => {
        this.getPhysicians();

      },
      error => {
        console.log(error);
      }
    );

  }



}
