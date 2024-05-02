import { Component , OnInit} from '@angular/core';
import { Modules } from '../../models/modules.model';
//import { Niveau } from '../../models/niveau.model';
import { ModulesService } from '../../services/modules.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modules-list',
  templateUrl: './modules-list.component.html',
  styleUrls:[ './modules-list.component.css']
})
export class ModulesListComponent implements OnInit {

  
  modulesList: Modules[] = [];
  selectedModule: Modules | null = null;

  constructor(
    private modulesService: ModulesService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchModules();
  }

  fetchModules(): void {
    this.modulesService.getAllModules().subscribe(
      (modules: Modules[]) => {
        this.modulesList = modules;
      },
      (error: any) => {
        console.error('Error fetching modules:', error);
      }
    );
  }

  //updateModule(module: Modules): void {
    //if (!module || !module.idM) {
      //console.error('Invalid module or idM is missing');
      //return;
    //}

    //this.router.navigate(['/editModule', module.idM]);
  //}

  createModule(): void {
    // Naviguer vers la page d'ajout de module
    this.router.navigate(['/addModules']);
  }

  deleteModule(idM: number): void {
    this.modulesService.deleteModules(idM).subscribe(
      () => {
        this.toastr.success('Module deleted successfully!', 'Success');
        this.modulesList = this.modulesList.filter(m => m.idM !== idM);
      },
      (error) => {
        console.error('Error deleting module:', error);
        this.toastr.error('Error deleting module', 'Error');
      }
    );
  }

  viewModuleDetails(idM: number): void {
    this.router.navigate(['/detailsm', idM]);
  }


}
