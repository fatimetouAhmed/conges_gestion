package com.gestion_conge_backend.modelGeneral.controllers;

import com.gestion_conge_backend.data.entities.CongeEntity;
import com.gestion_conge_backend.data.entities.ServicesEntity;
import com.gestion_conge_backend.modelGeneral.dtos.Congedto;
import com.gestion_conge_backend.modelGeneral.services.CongeService;
import com.gestion_conge_backend.modelGeneral.services.ServiceService;
import jakarta.websocket.server.PathParam;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("conges")
public class CongeController {
    private final CongeService congeService;

    public CongeController(CongeService congeService) {
        this.congeService = congeService;
    }

    @PostMapping("/create")
    public CongeEntity create (@RequestBody CongeEntity conges){
        return  congeService.creer(conges);
    }
    @GetMapping()
    public List<Congedto> read(){
        return congeService.lire();
    }
    @PutMapping("/update/{id}")
    public CongeEntity update(@PathVariable int id,@RequestBody CongeEntity congeEntity){
        return  congeService.modifier(id,congeEntity);

    }
    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable int id){
        return congeService.supprimer(id);
    }

    //les fonctionalite
    @GetMapping("/listeconge_no_confirmer")
    public List<Congedto> getListeConge_no_confirmer(){
        return congeService.conge_NO_Confirmer();
    }
    @GetMapping("/listeconge_confirmer")
    public List<Congedto> getListeConge_confirmer(){
        return congeService.congeConfirmer();
    }
    @GetMapping("/listeconge_refuser")
    public List<Congedto> getListeCongeRefuser(){
        return congeService.congeRefuser();
    }

//    public void updateStatus(@RequestParam(value ="query") String query) {
//      congeService.updateStatus(query);
//    }
@PutMapping("/updateStatus/{id}")
        public void updateStatus(@PathVariable int id,@RequestParam(value = "status") String status) {
      congeService.modifierStatus(id,status);
    }
@PutMapping("/updateEmploiyeStatus/{id}")
    public void updateEmploiyeStatus(@PathVariable int id,@RequestParam(value = "status") String status) {
        congeService.modifierEmploiyeStatus(id,status);
    }
}
