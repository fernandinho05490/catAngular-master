import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuckService } from '../../service/luck.service';
import { StaticMessageDirective } from "../../directives/static-message.directive";

interface Cat {
  id?: string;
  url?: string;
  width?: number;
  height?: number;
}
@Component({
  selector: 'app-luck-cat',
  standalone: true,
  imports: [CommonModule, StaticMessageDirective],
  templateUrl: './luck-cat.component.html',
  styleUrl: './luck-cat.component.css',
})
export class LuckCatComponent {
  cat: Cat = {};

  constructor(private luckService: LuckService) {}

  ngOnInit(): void {
    this.getLuck();
  }

  getLuck(): void {
    this.luckService.getLuck().subscribe((cat) => {
      this.cat = cat[0];
      console.log(cat[0])
    });
  }




}
