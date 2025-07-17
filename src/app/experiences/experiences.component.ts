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
    title: 'Apprentissage  ',
    underTitle: 'DIRISI - POSA',
    description: "Mise en place de modes opératoires organisationnelles pour l'outil Tanium afin d'aider les nouveaux utilisateurs dans les différentes procédure à effectuer (création, gestion des droits des comptes etc.).\n\nMise en place d'un tableau de bord type pour montrer les capacités de l'outil.\n\n Tanium est un outil permettant de surveiller la conformité d'un parc informatique à grande échelle.",
    year: 'septembre 2024 - août 2025'
  },

  {
    title: 'Stage ',
    underTitle: 'Lycée Jean-Paul II',
    description: "Développement d'une interface web en PHP et MySQL permettant d'automatiser la création des groupes classes de premières et terminales",
    year: 'janvier 2023 - février 2023'
  },

  {
    title: 'Stage ',
    underTitle: 'Mairie de Fougères',
    description: "Développement de nouvelles fonctionnalités pour des sites webs développé en symfony et JavaScript.\n\nÉlaboration d'une interface permettant de regrouper les différents sites web des chaufferies de la ville en HTML, CSS et Javascript. La connexion identifiant/mot de passe s'effectue avec LDAP.",
    year: 'mai 2022 - juin 2022'
  },

  {
    title : 'CDD',
    underTitle : 'Tessi',
    description : "Contrôle de la conformité des documents dans le cadre d'un crédit-bail pour les professionnels",
    year : ' février 2025 - mars 2025',
  },

  {
    title : 'Intérim',
    underTitle : 'Novandie',
    description : "Mise sur palette de caisses de yaourt",
    year : 'avril 2025 - juin 2025',
  }
  
  

  
]

flippedIndex: number | null = null;

  toggleFlip(index: number) {
    this.flippedIndex = this.flippedIndex === index ? null : index;
  }
}