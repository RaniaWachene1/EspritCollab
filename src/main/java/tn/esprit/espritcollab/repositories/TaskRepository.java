package tn.esprit.espritcollab.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.espritcollab.entities.Task;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task,Long> {
    public Task findByTask(String task);
    public List<Task> findByCompletedTrue();
    public List<Task> findByCompletedFalse();
    public List<Task> findAll();
    public Task getById(Long id);
    List<Task> findByIsFavoriteTrueOrderByPriorityDesc();
    List<Task> findByIsFavoriteFalseOrderByPriorityDesc();
}
