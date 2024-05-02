package tn.esprit.espritcollab.restController;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.espritcollab.entities.Revision;
import tn.esprit.espritcollab.entities.Task;
import tn.esprit.espritcollab.repositories.TaskRepository;
import tn.esprit.espritcollab.services.ITask;
import java.util.Optional;

import java.util.List;

@RestController
@AllArgsConstructor

public class TaskRestController {
    @Autowired
    private TaskRepository taskRepository;
    private ITask taskService;

    @GetMapping("/getTask")
    public ResponseEntity<List<Task>> getAllTasks1() {
        return ResponseEntity.ok(taskService.getAllTask());
    }
    @GetMapping("/completed")
    public ResponseEntity<List<Task>> getAllCompletedTasks() {
        return ResponseEntity.ok(taskService.findAllCompletedTask());
    }
    @GetMapping("/incomplete")
    public ResponseEntity<List<Task>> getAllIncompleteTasks() {
        return ResponseEntity.ok(taskService.findAllInCompleteTask());
    }
    @PostMapping("/addTask1")
    public ResponseEntity<Task> createTask(@RequestBody Task task) {
        return ResponseEntity.ok(taskService.createNewTask(task));
    }
    @PutMapping("/updateTask1/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable Long id, @RequestBody Task task) {
        task.setId(id);
        return ResponseEntity.ok(taskService.updateTask(task));
    }
    @PutMapping("/toggleFavorite/{id}")
    public ResponseEntity<Task> toggleFavorite(@PathVariable Long id) {
        Task updatedTask = taskService.toggleFavorite(id);
        return ResponseEntity.ok(updatedTask);
    }
    @GetMapping("/tasks/sortedByPriority")
    public ResponseEntity<List<Task>> getTasksSortedByPriority() {
        List<Task> tasks = taskService.getTasksSortedByPriority();
        return ResponseEntity.ok(tasks);
    }
    @DeleteMapping("/deleteT/{id}")
    public void deleteById(@PathVariable Long id){
        taskService.deleteTById(id);
    }

    @GetMapping
    public ResponseEntity<List<Task>> getAllTasks() {
        List<Task> tasks = taskService.getTasksSortedByPriority();
        return ResponseEntity.ok(tasks);
    }

}