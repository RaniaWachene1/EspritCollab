import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Modules } from '../../models/modules.model';
import { ModulesService } from '../../services/modules.service';

@Component({
  selector: 'app-modules-details',
  templateUrl: './modules-details.component.html',
  styleUrls:[ './modules-details.component.css']
})
export class ModulesDetailsComponent implements OnInit {


  module: Modules | null = null; // Déclaration de la propriété module

  constructor(
    private route: ActivatedRoute,
    private modulesService: ModulesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['idM']; // Utilisez 'idM' pour récupérer l'identifiant du module
    this.modulesService.getModulesById(id).subscribe(
      (module: Modules) => {
        this.module = module;
      },
      (error) => {
        console.error('Error fetching module details:', error);
      }
    );
  }

  navigateToListPage(): void {
    // Utilisez le router pour naviguer vers la liste des modules
    this.router.navigate(['/listm']); // Remplacez '/moduleList' par le chemin de votre liste de modules
  }






}
