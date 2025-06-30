import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiences',
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
 items = [
  {
    title: 'Stage ',
    underTitle: 'Mairie de Fougères',
    description: "Développement de nouvelles fonctionnalités pour des sites webs développé en symfony et JavaScript.\n\nÉlaboration d'une interface permettant de regrouper les différents sites web des chaufferies de la ville en HTML, CSS et Javascript. \n\nLa connexion s'effectue avec LDAP.",
    year: '2022'
  },
]

flippedIndex: number | null = null;

  toggleFlip(index: number) {
    this.flippedIndex = this.flippedIndex === index ? null : index;
  }
}
