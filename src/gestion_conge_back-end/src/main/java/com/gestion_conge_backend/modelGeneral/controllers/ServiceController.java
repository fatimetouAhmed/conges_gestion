package com.gestion_conge_backend.modelGeneral.controllers;

import com.gestion_conge_backend.data.entities.ServicesEntity;
import com.gestion_conge_backend.modelGeneral.services.ServiceService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("services")
public class ServiceController {
    private final ServiceService serviceService;

    public ServiceController(ServiceService serviceService) {
        this.serviceService = serviceService;
    }

    @PostMapping("/create")
    public ServicesEntity create (@RequestBody ServicesEntity services){
        return  serviceService.creer(services);
    }
    @GetMapping()
    public List<ServicesEntity> read(){
        return serviceService.lire();
    }
    @PutMapping("/update/{id}")
    public ServicesEntity update(@PathVariable int id,@RequestBody ServicesEntity servicesEntity){
        return  serviceService.modifier(id,servicesEntity);

    }
    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable int id){
        return serviceService.supprimer(id);
    }
}
