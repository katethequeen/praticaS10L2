import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appColora]',
})
export class ColoraDirective {
  @Input('appColora') tag: string = '';

  private colors: string[] = [
    '#F2F5A9',
    '#81F7BE',
    '#81F7F3',
    '#F6CEEC',
    '#F6CED8',
    '#F6D8CE',
    '#F5A9A9',
    '#CECEF6',
    '#E0F8E6',
    '#D8CEF6',
    '#00BFFF',
  ];

  constructor(private ref: ElementRef) {}

  ngOnInit() {
    const color = this.getColorForTag(this.tag);
    this.ref.nativeElement.style.backgroundColor = color;
  }

  private getColorForTag(tag: string): string {
    this.shuffleColors();
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  private shuffleColors() {
    for (let i = this.colors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.colors[i], this.colors[j]] = [this.colors[j], this.colors[i]];
    }
  }
}
