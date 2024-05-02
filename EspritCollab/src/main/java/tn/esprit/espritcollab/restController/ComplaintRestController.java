package tn.esprit.espritcollab.restController;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.espritcollab.entities.Complaint;
import tn.esprit.espritcollab.services.IComplaint;

import java.util.List;

@RestController
@AllArgsConstructor

public class ComplaintRestController {
    private IComplaint iComplaint;

    @PostMapping("/addComplaint")
    public Complaint addComplaint(@RequestBody Complaint c){
        return iComplaint.addComplaint(c);
    }
    @GetMapping("/getComplaintById/{idc}")
    public Complaint retrievebyId(@PathVariable Long idc){
        return iComplaint.retrievebyId(idc);
    }
    @GetMapping("/getAllCM")
    public List<Complaint> retrieveAll(){
        return iComplaint.retrieveAll();
    }
    @DeleteMapping("/deleteCM/{idc}")
    public void deleteById(@PathVariable Long idc){
        iComplaint.deleteById(idc);
    }

    @PutMapping("/updateCM/{id}")

    public Complaint updateCM(@RequestBody  Complaint CM, @PathVariable  long id){
        return iComplaint.updateCM(CM,id);
    }



}
