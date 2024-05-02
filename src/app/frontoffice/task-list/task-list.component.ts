import { Component, OnInit } from '@angular/core';
import { Task } from '../../../models/task.model';
import { RevisionService } from '../revision.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  newTask: Task = {
    task: '',
    description: '',
    completed: false,
    priority: 0,
    isFavorite: false // Ajouter cette ligne
  };
   favoriteTasks: Task[] = [];

   selectedBooks: Task | null = null;
   filteredTasks: Task[] = [];
  searchText: string = '';


  constructor(private taskService: RevisionService) { }

  ngOnInit(): void {
    this.getTasks();
 
  }
  getTasks(): void {
    this.taskService.getAllTasks().subscribe(tasks => this.tasks = tasks);
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }
  filterTs1(): void {
    if (!this.searchText) {
      this.filteredTasks = [...this.tasks];  // Utilisez spread pour forcer la mise à jour du binding
    } else {
      this.filteredTasks = this.tasks.filter(task =>
        task.task.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }
  filterTasks(): void {
    if (!this.searchText) {
      this.filteredTasks = [...this.tasks];
    } else {
      this.filteredTasks = this.tasks.filter(task =>
        task.task.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }
  deleteT(id: number | undefined): void {
    if (id !== undefined) {
      this.taskService.deleteT(id).subscribe({
        next: () => {
          console.log('Task deleted successfully from backend');
          this.tasks = this.tasks.filter(task => task.id !== id);
          console.log('Frontend state updated, task removed');
        },
        error: (error) => {
          console.error('Error deleting task:', error);
        }
      });
    } else {
      console.error('Task ID is undefined');
    }
  }
  
   

  toggleFavorite(task: Task): void {
    if (task.id !== undefined) {
      this.taskService.toggleFavorite(task.id).subscribe(() => {
        task.isFavorite = !task.isFavorite;
      });
    } else {
      console.error('Task ID is undefined');
    }
  
  }
   
  getTasks2(): void {
    this.taskService.getAllTasks().subscribe(tasks => this.tasks = tasks);
  }
  addTask(): void {
    this.taskService.createTask(this.newTask).subscribe(task => {
      this.tasks.push(task);
      this.newTask = {
        task: '',
        description: '',
        completed: false,
        priority: 0,
        isFavorite: false
      };
    });
  }

  updateTask(task: Task): void {
    this.taskService.updateTask(task.id!, task).subscribe();
  }
}