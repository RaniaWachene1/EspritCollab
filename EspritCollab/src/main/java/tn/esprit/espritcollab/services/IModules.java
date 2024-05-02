package tn.esprit.espritcollab.services;

import tn.esprit.espritcollab.entities.Modules;

import java.util.List;

public interface IModules {
    public Modules addModules(Modules M);
    public Modules retrievebyId (Long idM);
    public List<Modules> retrieveAll();
    public void deleteById (Long idM) ;
    public Modules updateModules (Modules MD, long id) ;
}
