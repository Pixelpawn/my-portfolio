import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})

export class FormationsComponent {
  items = [

    {
  title: 'Bachelor Sécurité Informatique',
  underTitle: 'CFA de la salle à Rennes',
  description: "J'ai abordé les thèmes majeurs de la cybersécurité comme le développement sécurisé, les systèmes et réseaux mais également l'OSINT et la supervision ",
  year: '2024'
},

{
  title: 'Apprenez à programmer en C',
  underTitle: 'Open classroom',
  description: 'MOOC abordant les bases du langage C',
  year: '2024'
},

{
  title: "Sécurisez vos applications web avec l'OWASP",
  underTitle: 'Open classroom',
  description: 'MOOC abordant les bases du langage C',
  year: '2023'
},
{
  title: "Mooc de l'ANSSI",
  underTitle: 'SecNumAcademie',
  description: "Formation en ligne proposée par l’ANSSI, destinée à sensibiliser aux enjeux de la cybersécurité.\n Elle aborde les bonnes pratiques pour protéger ses données et sécuriser ses usages numériques au quotidien.",
  year: '2023'
},

{
  title: 'BTS Service Informatique aux organisations',
  underTitle: 'Pôle Supérieur De La Salle à Rennes',
  description: "Formation d'une durée de deux ans sur le développement web et logiciel. \n J'ai appris à utiliser PHP, MySQL, CSS3, HTML5, JavaScript, JQuery, Java, Python",
  year: '2023'
},

  {
    title: 'Bac Général mention Assez Bien',
    underTitle: 'Lycée Assomption à Rennes',
    description: "Bac passé avec les spécialités Maths & Numérique et Science de l'Informatique",
    year: '2021'
  },










];

 flippedIndex: number | null = null;

  toggleFlip(index: number) {
    this.flippedIndex = this.flippedIndex === index ? null : index;
  }
}