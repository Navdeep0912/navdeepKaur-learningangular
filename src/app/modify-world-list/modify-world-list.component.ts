
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {world} from "../../Shared/Models/world";
import {worldList} from "../../Shared/mockContent";
import {WorldInformationService} from "../Services/world-information.service";

@Component({
  selector: 'app-modify-world-list',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './modify-world-list.component.html',
  styleUrl: './modify-world-list.component.scss'
})
export class ModifyWorldListComponent{
  worldList: FormGroup;
  world: world | undefined;


  constructor(
    private fb: FormBuilder,
    private worldService: WorldInformationService,
      ) {

    this.worldList = this.fb.group({
      id: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      language: [''],
      food: []
    });
  }

 /* ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.worldService.getWorldListById(+id).subscribe(worldList => {
        if(worldList) {
          this.worldList = worldList;

          this.worldList.patchValue(worldList);
        }
      });
    }
  }

  onSubmit(): void {
    const world: world = this.worldList.value;

    // Check if we're updating an existing student
    if (world.id) {
      this.worldService.update(world);
    } else {
      // For adding a new student, generate a new ID
      const newId = this.worldService.generateNewId(); // This method will create a new ID
      world.id = newId;
      this.worldService.addworld(world);
    }

    this.router.navigate(['/worldList']);
  }

  onDelete(): void {
    const id = this.worldList.get('id')?.value;
    if (id) {
      this.worldService.delete(id);
      this.router.navigate(['/worldList']);
    }
  }

  navigateToWorldList(): void {
    this.router.navigate(['/students']);
  }

*/
}
