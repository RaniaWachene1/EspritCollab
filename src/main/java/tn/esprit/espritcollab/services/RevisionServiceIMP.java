package tn.esprit.espritcollab.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.espritcollab.entities.Revision;
import tn.esprit.espritcollab.repositories.RevisionRepository;

import java.util.List;
@Service
@AllArgsConstructor
public class RevisionServiceIMP implements IRevision{
    private RevisionRepository revisionRepository ;

    @Override
    public Revision addRevision(Revision r) {
        return revisionRepository.save(r);
    }

    @Override
    public Revision retrievebyId(Long idr) {
        return revisionRepository.findById(idr).orElse(null);
    }

    @Override
    public List<Revision> retrieveAll() {
        return revisionRepository.findAll();
    }

    @Override
    public void deleteById(Long idV) {
        revisionRepository.deleteById(idV);
    }

    @Override
    public Revision updateRV(Revision RV, long id) {
        Revision r = revisionRepository.findById(id).get();
        if (RV.getDate_debut()!=null){
            r.setDate_debut(RV.getDate_debut());
        }
        if (RV.getDate_fin()!=null){
            r.setDate_fin(RV.getDate_fin());
        }
        if (RV.getSujetRev()!=null){
            r.setSujetRev(RV.getSujetRev());
        }
        if (RV.getDuree()!=0){
            r.setDuree(RV.getDuree());
        }
        if (RV.getNotes()!=null){
            r.setNotes(RV.getNotes());}
        if (RV.getObjectif()!=null){
            r.setObjectif(RV.getObjectif());}

        return revisionRepository.save(r);
    }
}
