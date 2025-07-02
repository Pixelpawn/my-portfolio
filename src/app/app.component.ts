import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link:not([href*="cv"]):not([href*="github"])');

    let activeSection: string | null = null;
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
        activeSection = section.id;
      }
    });

    navLinks.forEach(link => link.classList.remove('active'));
    if (activeSection) {
      const matchingLink = Array.from(navLinks).find(link => link.getAttribute('href') === `#${activeSection}`);
      if (matchingLink) {
        matchingLink.classList.add('active');
      }
    }
  }
}