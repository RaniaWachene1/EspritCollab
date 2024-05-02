package tn.esprit.espritcollab.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import tn.esprit.espritcollab.entities.Modules;

import java.util.List;
import java.util.Map;

public interface ModulesRepository extends JpaRepository<Modules,Long> {
    @Query("SELECT m.niveau, COUNT(m) FROM Modules m GROUP BY m.niveau")
    List<Object[]> countModulesByNiveau();



}
