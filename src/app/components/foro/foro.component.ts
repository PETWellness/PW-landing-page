import { UiService } from './../../ui.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-foro',
  standalone: true,
  imports: [],
  templateUrl: './foro.component.html',
  styleUrl: './foro.component.css'
})
export class ForoComponent implements OnInit, OnDestroy {

  constructor(private UiService: UiService) {}

  ngOnInit() {
    this.UiService.toggleMainContent(false);
  }

  ngOnDestroy() {
    this.UiService.toggleMainContent(true);
  }
}