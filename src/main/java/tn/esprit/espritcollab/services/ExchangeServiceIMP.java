package tn.esprit.espritcollab.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.espritcollab.entities.Exchange;
import tn.esprit.espritcollab.repositories.BookRepository;
import tn.esprit.espritcollab.repositories.ExchangeRepository;

import java.util.List;
@Service
@AllArgsConstructor

public class ExchangeServiceIMP implements IExchange {
    private ExchangeRepository exchangeRepository;

    @Override
    public Exchange addExchange(Exchange ex) {
        return exchangeRepository.save(ex);
    }

    @Override
    public Exchange retrieveExchangebyId(Long idex) {
        return exchangeRepository.findById(idex).orElse(null);
    }

    @Override
    public List<Exchange> retrieveAllExchange() {
        return exchangeRepository.findAll();
    }

    @Override
    public void deleteExchangeById(Long idex) {
        exchangeRepository.deleteById(idex);

    }

    @Override
    public Exchange updatExchange(Exchange EX, long idex) {
        Exchange ex = exchangeRepository.findById(idex).get();
        if (EX.getDateExch()!=null){
            ex.setDateExch(EX.getDateExch());
        }
        if (EX.getState()!=null){
            ex.setState(EX.getState());
        }
        return exchangeRepository.save(ex);
    };
    }

