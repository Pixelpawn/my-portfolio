import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projets',
  imports: [CommonModule],
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.scss'
})
export class ProjetsComponent {
items = [

  {
  title: 'my-portfolio',
  underTitle: 'Technologies utilisées : Angular',
  description: "Mise en place de mon portfolio en version web.",
  year: '2025'},

  {
  title: 'Datracker',
  underTitle: 'Technologies utilisées : Python',
  description: "Mise en place d'une application permettant de sensibiliser les utilisateurs de l'importance de bien gérer ses données en ligne. \n\n Cette application est une introcution à l'OSINT. Des fonctionnalitées tel que la recherche de présence d'adresse e-mail et pseudo ont été développées avec une introduction à google dorks\n\n ",
  year: '2024'
},




  {
  title: 'Traceur GPS',
  underTitle: 'Technologies utilisées : PHP, MySQL, CSS, HTML, JavaScript, JQuery, C#, Java',
  description: "Mise en place d'un service permettant aux utilisateurs de calculer en temps réel la distance parcourue. \n\n Une version web, de bureau et mobile a été développée pour l'utiliser sur tout les appareils",
  year: '2023'
},

  {
    title: 'Système solaire',
    underTitle: 'Technologies utilisées : HTML et CSS',
    description: "J'ai développé un site web sur le système solaire expliquant les caractéristiques des différents objets dans le système solaire",
    year: '2020'
  },

  {
    title: 'Digicode',
    underTitle: 'Technologies utilisées : PHP et MySQL',
    description: "Mise en place un service web fictif permettant de réserver des salles de réunion avec un digicode pour accéder aux salles de réunion",
    year: '2022'
  },
{
  title: 'Envoi de mail',
  underTitle: 'Technologies utilisées : PHP et MySQL ',
  description: "Mise en place d'un service permettant de se connecter et de récupérer son mot de passe en cas d'oubli",
  year: '2022'
},

{
  title: "Kravata",
  underTitle: 'Technologie utilisée : Prestashop',
  description: "Mise en place d'une boutique fictive de cravate",
  year: '2022'
},

{
  title: "Réservation pompier",
  underTitle: 'Technologies utilisées : PHP, MySQL, CSS, HTML, JavaScript',
  description: "Mise en place d'un service web permettant de réserver en interne du matériel de ski et snowboard",
  year: '2023'
},






]

flippedIndex: number | null = null;

  toggleFlip(index: number) {
    this.flippedIndex = this.flippedIndex === index ? null : index;
  }
}