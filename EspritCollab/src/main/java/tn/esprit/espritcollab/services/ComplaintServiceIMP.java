package tn.esprit.espritcollab.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.espritcollab.entities.Complaint;
import tn.esprit.espritcollab.entities.Traitement;
import tn.esprit.espritcollab.repositories.ComplaintRepository;



import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.List;

@Service
@AllArgsConstructor
public class ComplaintServiceIMP implements IComplaint {
    private ComplaintRepository complaintRepository;

    
    @Override
    public Complaint addComplaint(Complaint c) {

        c.setTraitement(Traitement.NONTRAITE);
        //c.getDateComplaint()
        return complaintRepository.save(c);
    }

    @Override
    public Complaint retrievebyId(Long idc) {
        return complaintRepository.findById(idc).orElse(null);
    }

    @Override
    public List<Complaint> retrieveAll() {
        return complaintRepository.findAll();
    }

    @Override
    public void deleteById(Long idc) {
        complaintRepository.deleteById(idc);

    }

    @Override
    public Complaint updateCM(Complaint CM, long id) {
        Complaint c = complaintRepository.findById(id).get();
        if (CM.getDateComplaint()!=null){
            c.setDateComplaint(CM.getDateComplaint());
        }
        if (CM.getComment()!=null){
            c.setComment(CM.getComment());
        }
        if (CM.getTraitement()!=null){
            c.setTraitement(CM.getTraitement());
        }

        return complaintRepository.save(c);    }



}
