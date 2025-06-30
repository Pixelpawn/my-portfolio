import { Component } from '@angular/core';
//import { ProfileCom } from '../profile-section/.component';
import { FormationsComponent } from '../formations/formations.component';
import { ExperiencesComponent } from '../experiences/experiences.component';
import { ProjetsComponent } from '../projets/projets.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    FormationsComponent,
    ExperiencesComponent,
    ProjetsComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {}