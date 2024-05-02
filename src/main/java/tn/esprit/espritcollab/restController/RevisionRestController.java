package tn.esprit.espritcollab.restController;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.espritcollab.entities.Revision;
import tn.esprit.espritcollab.services.IRevision;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class RevisionRestController {
    private IRevision irevision;

    @PostMapping("/addRevision")
    public Revision addRevision(@RequestBody Revision r){
        return irevision.addRevision(r);
    }
    @GetMapping("/getRevisionById/{idr}")
    public Revision retrievebyId(@PathVariable Long idr){
        return irevision.retrievebyId(idr);
    }

    @GetMapping("/getAllRV")
    public List<Revision> retrieveAll(){
        return irevision.retrieveAll();
    }

    @DeleteMapping("/deleteRV/{idV}")
    public void deleteById(@PathVariable Long idV){
        irevision.deleteById(idV);
    }

    @PutMapping("/updateRV/{id}")

    public Revision updateRV(@RequestBody  Revision RV, @PathVariable  long id){
        return irevision.updateRV(RV,id);
    }
}