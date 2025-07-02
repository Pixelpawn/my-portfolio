import { Component } from '@angular/core';
import { FormationsComponent } from '../formations/formations.component';
import { ExperiencesComponent } from '../experiences/experiences.component';
import { ProjetsComponent } from '../projets/projets.component';
import { DescriptionComponent } from "../description/description.component";
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    FormationsComponent,
    ExperiencesComponent,
    ProjetsComponent,
    DescriptionComponent,
],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {}