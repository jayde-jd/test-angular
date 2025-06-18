import { Component } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { Pet, PetStatus } from '../../models/pet.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pet-board',
  imports: [
    FormsModule
  ],
  templateUrl: './pet-board.component.html',
  styleUrls: ['./pet-board.component.css']
})
export class PetBoardComponent {
  petName = '';

  constructor(public petService: PetService) {}

  addNewPet() {
    if (this.petName.trim()) {
      this.petService.addPet(this.petName.trim());
      this.petName = '';
    }
  }

  getPetsPerStatus(status: PetStatus): Pet[] {
    return this.petService.getPets().filter((p) => p.status === status);
  }

  moveToNext(pet: Pet) {
    this.petService.moveToNext(pet);
  }
}
