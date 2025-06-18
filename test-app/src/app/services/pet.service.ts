import { Injectable } from "@angular/core";
import { Pet, PetStatus } from '../models/pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private pets: Pet[] = []

  getPets(): Pet[] {
    return this.pets;
  }

  addPet(name: string): void {
    this.pets.push({ name, status: 'listed' });
  }

  moveToNext(pet: Pet): void {
    const statuses: PetStatus[] = ['listed', 'examining', 'finally_back_to_hooman'];
    const currentIndex = statuses.indexOf(pet.status);
    if (currentIndex < statuses.length - 1) {
      pet.status = statuses[currentIndex + 1];
    }
  }
}
