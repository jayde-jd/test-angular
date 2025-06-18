export type PetStatus = 'listed' | 'examining' | 'finally_back_to_hooman';
export interface Pet {
  name: string;
  status: PetStatus;
}
