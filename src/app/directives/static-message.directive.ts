import {
  Directive,
  ElementRef,
  Renderer2,
  AfterViewInit,
} from '@angular/core';

@Directive({
  selector: '[appStaticMessage]',
  standalone: true,
})
export class StaticMessageDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  private miauSounds: string[] = [
    "Miau miau miau",
    "Miauuuuuuu",
    "Mi miau",
    "Mia miau",
    "Miau",
    "Pspspsp",
    "Nhuuuuummm",
    "MIAU MIAU MIAUUUUUUUU",
    "Miaulau miaulau",
    "M. I. A. U.",
  ];

  ngAfterViewInit() {
    const randomIndex = Math.floor(Math.random() * this.miauSounds.length);
    const randomMiauSound = this.miauSounds[randomIndex];

    const messageElement = this.renderer.createText(randomMiauSound);
    this.renderer.appendChild(this.el.nativeElement, messageElement);
  }
}
