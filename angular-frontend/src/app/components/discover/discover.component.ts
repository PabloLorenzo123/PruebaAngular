import { Component, inject, OnInit, signal } from '@angular/core';
import { DiscoverSectionService } from '../../services/discover-section.service';
import { discoverArticle } from '../../model/discoverArticle.type';

import { MatIconModule } from '@angular/material/icon';
import { MatIconService } from '../../services/mat-icon-service.service';

import { catchError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'discover-section',
  imports: [MatIconModule],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.scss'
})
export class DiscoverComponent implements OnInit{
  discoverSectionService = inject(DiscoverSectionService);
  articles = signal<discoverArticle[]>([]);
  selectedDisplayOption = signal<string>('more-icon');
  makeArticlesBlink = signal<boolean>(false); // Each time a button is clicked, the articles blink.

  displayOptionsIcons = {
    'more-icon': '/icons/more.svg',
    'grid-icon': '/icons/grid_view.svg',
    'circle-icon': '/icons/circle.svg',
  }

  constructor(private matIconService: MatIconService, private toast: ToastrService){
    this.matIconService.registerIcons(this.displayOptionsIcons);
    this.selectedDisplayOption.set(Object.keys(this.displayOptionsIcons)[0]);
  }

  selectDisplayOption(icon: string): void {
    this.selectedDisplayOption.set(icon);
    // This make the blink animation to repeat.
    this.makeArticlesBlink.set(false);
    setTimeout(() => {
      this.makeArticlesBlink.set(true);
    }, 10); // Small delay ensures DOM updates before animation restarts
    
  }

  getOptionsNames(){
    return Object.keys(this.displayOptionsIcons);
  }

  ngOnInit(): void {
    // Fetch the articles for this section.
      this.discoverSectionService.getArticles().pipe(
        catchError((err) => {
          this.toast.error(err?.error.message ? err.error.message: 'Hubo un error, asegurese que el backend esté corriendo.');
          throw err;
        })
      ).subscribe(res => {
        this.articles.set(res.map(a => a));
      })
  }
}
