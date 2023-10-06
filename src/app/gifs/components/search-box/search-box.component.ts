import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  // Obtiene la referencia de un elemento 
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>

   constructor(private gifsService:GifsService){}

  searchTag() {
    const newTag = this.tagInput.nativeElement.value
    this.gifsService.searchTag(newTag)
    this.tagInput.nativeElement.value=""
  }
}
