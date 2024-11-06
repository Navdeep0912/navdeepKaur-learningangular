import {Component, OnInit} from '@angular/core';
import {WorldInformationService} from "../../Services/world-information.service";
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule} from "@angular/forms";
// @ts-ignore
import {ActivatedRoute, Router} from '@angular/router';
// @ts-ignore
import {world} from '../../Shared/Models/world-detail';
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-modify-world',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './modify-world.component.html',
  styleUrl: './modify-world.component.css'
})
export class ModifyWorldComponent implements OnInit{
  worldForm : FormGroup;
  world: world | undefined;
  error : string | null = null;

  constructor(
    private fb: FormBuilder,
    private route : ActivatedRoute,
    private worldService : WorldInformationService,
    private router : Router
  ) {
    this.worldForm = this.fb.group({
      id: [worldService.generateNewId()],
      city: ['', Validators.required],
      language: [''],
      food: ['']
    });

  }

  ngOnInit() : void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.worldService.getContentById(id).subscribe({
        next: worldItem => {
          if (worldItem) {
            this.worldForm.patchValue(worldItem);
          }
        },
        error: err => {
          this.error = "Error fetching world item";
          console.error({err: 'Error fetching world item:'}, err);
        }
      });
    }
  }



navigateToWorldList (): void{
    this.router.navigate(['/world-list']);
}


  protected readonly onsubmit = onsubmit;

  onDelete() : void {
    const id = this.worldForm.value.id;
    if (id) {
      this.worldService.deleteContent(id).subscribe(() => this.router.navigate(['/world-list']));
    }
  }

  onSubmit() : void{
    if(this.worldForm.valid){
      const worldItem : world = this.worldForm.value;

      if(worldItem.id){
        this.worldService.updateContent(worldItem).subscribe(()=> this.router.navigate(['/world-list']));
      } else {
        worldItem.id = this.worldService.generateNewId();
        this.worldService.addContent(worldItem).subscribe(() => this.router.navigate(['/world-list']));
      }
    }

  }
}

