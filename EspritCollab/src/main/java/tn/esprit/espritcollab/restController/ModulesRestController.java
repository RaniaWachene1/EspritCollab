package tn.esprit.espritcollab.restController;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.espritcollab.entities.Modules;
import tn.esprit.espritcollab.services.IModules;
import tn.esprit.espritcollab.services.ModulesServiceIMP;

import java.util.List;
import java.util.Map;

@RestController
@AllArgsConstructor

public class ModulesRestController {
    private IModules iModules;
    private final ModulesServiceIMP modulesService;


    @PostMapping("/addModules")
    public Modules addModules(@RequestBody Modules M) {
        return iModules.addModules(M);
    }

    @GetMapping("/getModulesById/{idM}")
    public Modules retrievebyId(@PathVariable Long idM) {
        return iModules.retrievebyId(idM);
    }

    @GetMapping("/getAllMD")
    public List<Modules> retrieveAll() {
        return iModules.retrieveAll();
    }

    @DeleteMapping("/deleteMD/{idM}")
    public void deleteById(@PathVariable Long idM) {
        iModules.deleteById(idM);
    }

    @PutMapping("/updateMD/{id}")

    public Modules updateModules(@RequestBody Modules MD, @PathVariable long id) {
        return iModules.updateModules(MD, id);
    }
    @GetMapping(value = "/statistics", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, Long>> getModuleStatisticsByNiveau() {
        Map<String, Long> moduleStatisticsByNiveau = modulesService.countModulesByNiveau();
        return new ResponseEntity<>(moduleStatisticsByNiveau, HttpStatus.OK);
    }

}
















