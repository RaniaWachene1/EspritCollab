package tn.esprit.espritcollab.services;

import tn.esprit.espritcollab.entities.Revision;
import tn.esprit.espritcollab.entities.Task;

import java.util.List;
import java.util.Optional;

public interface ITask {
    public Task createNewTask(Task task);
    public List<Task> getAllTask();
    public Task findTaskById(Long id);
    public List<Task> findAllCompletedTask();
    public List<Task> findAllInCompleteTask();
    public void deleteTask(Task task);
    public Task updateTask(Task task);
    public Task toggleFavorite(Long id);
   // public List<Task> getTasksSortedByPriority();
    //public void deleteById (Long id) ;
    public void deleteTById(Long id) ;
    public List<Task> getTasksSortedByPriority() ;


    }
