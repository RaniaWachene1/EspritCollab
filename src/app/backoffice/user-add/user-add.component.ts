


  import { Component } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { ToastrService } from 'ngx-toastr';
  import { Router } from '@angular/router';
  import { HttpErrorResponse } from '@angular/common/http';
  import { DatePipe } from '@angular/common';
import { UserService } from '../../services/user.service';

  @Component({
    selector: 'app-user-add',
    templateUrl: './user-add.component.html',
    styleUrls: ['./user-add.component.css']
  })
  export class UserAddComponent  {
    loginForm: FormGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    birthdate: ['', Validators.required],
    level: ['', Validators.required],
    classNumber: ['', Validators.required],
    major: ['', Validators.required],
    description: [''],
    });
    
    firstName: string = '';
    lastName: string = '';
    username: string = '';
    email: string = '';
    password: string = '';
    birthdate: Date | null = null;
    level: number | null = null;
    classNumber: number | null = null;
    major: string = '';
    description: string = '';
    linkedinProfileUrl: string = '';
    instagramUsername: string = '';
    facebookUsername: string = '';
    youtubeProfileUrl: string = '';
    selectedFile: File | null = null;

    options = ['DS', 'Infini', 'ERP-BI', 'GL', 'SIM', 'TWIN', 'SLEAM', 'NIDS', 'SE', 'ArcTIC', 'Commun'];
    levels = ['1', '2', '3A', '3B', '4', '5'];
    classNumbers: number[] = Array.from({length: 70}, (_, i) => i + 1);
  
    constructor(private userService: UserService, private router: Router ,private formBuilder: FormBuilder,private toastr: ToastrService,private datePipe: DatePipe) {}
  
    onSubmit(): void {
      const formattedBirthdate = this.formatBirthdate();
  
      const userData = {
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        email: this.email,
        password: this.password,
        birthdate: formattedBirthdate,
        level: this.level,
        classNumber: this.classNumber,
        major: this.major,
        image: this.selectedFile,
        description: this.description,
        linkedinProfileUrl: this.linkedinProfileUrl,
    instagramUsername: this.instagramUsername,
    facebookUsername: this.facebookUsername,
    youtubeProfileUrl: this.youtubeProfileUrl,
      };
  
      this.userService.addUser(userData).subscribe(
        (response) => {
          this.toastr.success('Student add Successful');
          
        },
        (error: HttpErrorResponse) => {
          console.error('Registration failed:', error);
          if (error.status === 400 && error.error && error.error.message) {
            if (error.error.message === 'Email already exists') {
              this.toastr.error('Email already exists. Please use a different email.');
            } else if (error.error.message === 'Username already exists') {
              this.toastr.error('Username already exists. Please choose a different username.');
            } else {
              this.toastr.error('Incorrect username or password!');
            }
          } else {
            this.toastr.error('Registration failed. Please try again later.');
          }
        }
      );
      
    }
  
    onFileSelected(event: any): void {
      const file: File = event.target.files[0];
  
      this.selectedFile = file;
    }
    applyValidationStyles() {
      const forms = document.querySelectorAll('.needs-validation');
      Array.from(forms).forEach((form: any) => {
        form.addEventListener('submit', (event: Event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        });
      });
    }
    ngOnInit() {
      this.applyValidationStyles();
    }
    formatBirthdate(): Date | null {
      if (this.birthdate) {
          return new Date(this.birthdate);
      } else {
          return null;
      }
  
    }
  }