import { Component } from '@angular/core';
import { BreedsService } from "../../service/breeds.service";
import { CommonModule } from "@angular/common";
import { NgFor } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';


interface Breed {
  id: string;
  name: string;
  cfa_url: string;
  adaptability: number;
  affection_level: number;
  alt_names: string;
  child_friendly: number;
  country_code: string;
  country_codes: string;
  description: string;
  dog_friendly: number;
  energy_level: number;
  experimental: number;
  grooming: number;
  hairless: number;
  health_issues: number;
  hypoallergenic: number;
  indoor: number;
  intelligence: number;
  lap: number;
  life_span: string;
  natural: number;
  origin: string;
  rare: number;
  reference_image_id: string;
  rex: number;
  shedding_level: number;
  short_legs: number;
  social_needs: number;
  stranger_friendly: number;
  suppressed_tail: number;
  temperament: string;
  vocalisation: number;
  weight: {
    imperial: string;
    metric: string;
  };
  vcahospitals_url: string;
  vetstreet_url: string;
  wikipedia_url: string;
}



@Component({
  selector: 'app-cat-breeds',
  standalone: true,
  imports: [CommonModule, NgFor, NgxPaginationModule],
  templateUrl: './cat-breeds.component.html',
  styleUrl: './cat-breeds.component.css'
})
export class DogBreedsComponent {
  breeds: Breed[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  pagedBreeds: Breed[] = [];

  constructor(private breedsService: BreedsService) {}

  ngOnInit(): void {
    this.getBreeds();
  }

  getBreeds(): void {
    this.breedsService.getBreeds().subscribe((breeds) => {
      this.breeds = breeds;
    });
  }

  onPageChange(event: number): void {
    this.currentPage = event;
  }

  setPage(page: number): void {
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + 90;
    this.pagedBreeds = this.breeds.slice(startIndex, endIndex);
    this.currentPage = page;
  }

  pageChanged(event: number): void {
    this.setPage(event);
  }
}
