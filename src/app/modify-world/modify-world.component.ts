import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {WorldInformationService} from "../Services/world-information.service";
import {world} from "../../Shared/Models/world";
import {worldList} from "../../Shared/mockContent";

@Component({
  selector: 'app-modify-world',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './modify-world.component.html',
  styleUrl: './modify-world.component.css'
})
export class ModifyWorldComponent {
  worldForm: FormGroup;
  worldList: world | undefined;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private worldInformation: WorldInformationService,
    private router: Router
  ) {

    this.worldForm = this.fb.group({
      id: ['', Validators.required], //ID is required
      city: ['', Validators.required],//First name is required
      country: ['', Validators.required],
      language: [''],
      food: ['']
    });
  }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.worldInformation.getWorldInformationById(+id).subscribe(worldInformation => {
        if(worldInformation) {
          this.worldList = worldInformation;

          this.worldForm.patchValue(worldInformation);
        }
      });
    }
  }

  onSubmit(): void {
    const worldList: world = this.worldForm.value;

    // Check if we're updating an existing worldInformation
    if (worldList.id) {
      this.worldInformation.updateWorldInformation(worldList);
    } else {
      // For adding a new student, generate a new ID
      const newId = this.worldInformation.generateNewId(); // This method will create a new ID
      worldList.id = newId;
      this.worldInformation.addWorldInformation(worldList);
    }

    this.router.navigate(['/worldList']);
  }

  onDelete(): void {
    const id = this.worldForm.get('id')?.value;
    if (id) {
      this.worldInformation.deleteWorldInformation(id);
      this.router.navigate(['/worldList']);
    }
  }

  navigateToWorldList(): void {
    this.router.navigate(['/worldList']);
  }
}


