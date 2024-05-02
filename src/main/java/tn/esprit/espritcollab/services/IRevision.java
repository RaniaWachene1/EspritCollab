package tn.esprit.espritcollab.services;

import tn.esprit.espritcollab.entities.Revision;

import java.util.List;

public interface IRevision {
    public Revision addRevision(Revision r);
    public Revision retrievebyId (Long idr);
    public List<Revision> retrieveAll();
    public void deleteById (Long idV) ;
    public Revision updateRV (Revision RV, long id) ;
}
