package com.gestion_conge_backend.modelGeneral.controllers;

import com.gestion_conge_backend.data.entities.EmploiyeeEntity;
import com.gestion_conge_backend.data.entities.ServicesEntity;
import com.gestion_conge_backend.modelGeneral.dtos.Emploiyeedto;
import com.gestion_conge_backend.modelGeneral.services.EmploiyeeService;
import com.gestion_conge_backend.modelGeneral.services.ServiceService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("emploiyee")
public class EmploiyeeController {
    private final EmploiyeeService emploiyeeService;

    public EmploiyeeController(EmploiyeeService employeeService) {
        this.emploiyeeService = employeeService;
    }

    @PostMapping("/create")
    public EmploiyeeEntity create (@RequestBody EmploiyeeEntity emploiyees){
        return  emploiyeeService.creer(emploiyees);
    }
    @GetMapping()
    public List<Emploiyeedto> read(){
        return emploiyeeService.lire();
    }
    @PutMapping("/update/{id}")
    public EmploiyeeEntity update(@PathVariable int id,@RequestBody EmploiyeeEntity emploiyeeEntity){
        return  emploiyeeService.modifier(id,emploiyeeEntity);

    }
    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable int id){
        return emploiyeeService.supprimer(id);
    }
    @PutMapping("/updateStatus/{id}")
    public void updateStatus(@PathVariable int id,@RequestParam(value = "status") String status) {
        emploiyeeService.modifierStatus(id,status);
    }
}
