package tn.esprit.espritcollab.services;

import tn.esprit.espritcollab.entities.Complaint;

import java.util.List;

public interface IComplaint {
    public Complaint addComplaint(Complaint c);
    public Complaint retrievebyId (Long idc);
    public List<Complaint> retrieveAll();
    public void deleteById (Long idc) ;
    public Complaint updateCM (Complaint CM, long id) ;
}
