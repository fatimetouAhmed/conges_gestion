package com.gestion_conge_backend.modelGeneral.controllers;

import com.gestion_conge_backend.data.entities.ServicesEntity;
import com.gestion_conge_backend.data.entities.TypeCongeEntity;
import com.gestion_conge_backend.modelGeneral.services.ServiceService;
import com.gestion_conge_backend.modelGeneral.services.TypeCongeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("typeconge")
public class TypeCongeController {
    private final TypeCongeService typeCongeService;

    public TypeCongeController(TypeCongeService typeCongeService) {
        this.typeCongeService = typeCongeService;
    }

    @PostMapping("/create")
    public TypeCongeEntity create (@RequestBody TypeCongeEntity typeConge){
        return  typeCongeService.creer(typeConge);
    }
    @GetMapping()
    public List<TypeCongeEntity> read(){
        return typeCongeService.lire();
    }
    @PutMapping("/update/{id}")
    public TypeCongeEntity update(@PathVariable int id, @RequestBody TypeCongeEntity typeCongeEntity){
        return  typeCongeService.modifier(id,typeCongeEntity);

    }
    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable int id){
        return typeCongeService.supprimer(id);
    }
}
