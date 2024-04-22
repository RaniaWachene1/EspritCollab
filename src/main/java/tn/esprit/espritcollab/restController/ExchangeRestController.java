package tn.esprit.espritcollab.restController;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.espritcollab.entities.Exchange;
import tn.esprit.espritcollab.services.IExchange;
import java.util.List;

@RestController
@AllArgsConstructor
public class ExchangeRestController {
    private IExchange iExchange;
    @PostMapping("/addExchange")
    public Exchange addExchange(@RequestBody Exchange ex){
        return iExchange.addExchange(ex);
    }
    @GetMapping("/getExchangeById/{idex}")
    public Exchange retrieveExchangebyId(@PathVariable Long idex){
        return iExchange.retrieveExchangebyId(idex);
    }
    @GetMapping("/getAllEx")
    public List<Exchange> retrieveAllEX(){
        return iExchange.retrieveAllExchange();
    }
    @DeleteMapping("/deleteEx/{idex}")
    public void deleteExchangeById(@PathVariable Long idex){
        iExchange.deleteExchangeById(idex);
    }
    @PutMapping("/updateEX/{idex}")

    public Exchange updateEXchange(@RequestBody  Exchange EX, @PathVariable  long idex){
        return iExchange.updatExchange(EX,idex);
    }
}


