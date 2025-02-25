import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MatIconService {
  // Inject dependencies.
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) { }

  // Register a single icon.
  registerIcon(name: string, path: string): void {
    this.matIconRegistry.addSvgIcon(
      name,
      this.domSanitizer.bypassSecurityTrustResourceUrl(path)
    );
  }

  // Register multiple icons.
  registerIcons(icons: { [key: string]: string }): void {
    Object.keys(icons).forEach(iconName => {
      this.registerIcon(iconName, icons[iconName]);
    });
  }

}
