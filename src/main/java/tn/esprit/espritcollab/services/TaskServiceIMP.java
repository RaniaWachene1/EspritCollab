package tn.esprit.espritcollab.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import tn.esprit.espritcollab.entities.Task;
import tn.esprit.espritcollab.repositories.TaskRepository;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;
import java.util.List;
import java.util.Optional;


@Service
public class TaskServiceIMP implements  ITask{
    @Autowired
    private TaskRepository taskRepository;

    public Task createNewTask(Task task) {
        return taskRepository.save(task);
    }

    public List<Task> getAllTask() {
        return taskRepository.findAll();
    }

    public Task findTaskById(Long id) {
        return taskRepository.getById(id);
    }

    public List<Task> findAllCompletedTask() {
        return taskRepository.findByCompletedTrue();
    }

    public List<Task> findAllInCompleteTask() {
        return taskRepository.findByCompletedFalse();
    }

    public void deleteTask(Task task) {
        taskRepository.delete(task);
    }
    public Task updateTask(Task task) {
        return taskRepository.save(task);
    }
    //@Override
    //public void deleteById(Long id) {
       // taskRepository.deleteById(id);
    //}
    @Override
    public void deleteTById(Long id) {
        taskRepository.deleteById(id);

    }
    public Task toggleFavorite(Long id) {
        Task task = taskRepository.findById(id).orElseThrow(() -> new RuntimeException("Task not found"));
        task.setIsFavorite(!task.getIsFavorite());
        return taskRepository.save(task);
    }

    @Override
    public List<Task> getTasksSortedByPriority() {
        return taskRepository.findAll(Sort.by(Sort.Direction.DESC, "priority"));
    }

}
