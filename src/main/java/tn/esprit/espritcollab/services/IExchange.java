package tn.esprit.espritcollab.services;

import tn.esprit.espritcollab.entities.Exchange;

import java.util.List;

public interface IExchange {
    public Exchange addExchange(Exchange ex);
    public Exchange retrieveExchangebyId (Long idex);
    public List<Exchange> retrieveAllExchange();
    public void deleteExchangeById (Long idex) ;
    public Exchange updatExchange (Exchange EX, long idex) ;
}
