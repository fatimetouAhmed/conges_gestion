package com.gestion_conge_backend.referentiel.controllers;

import com.gestion_conge_backend.data.repository.EmploiyeeRepository;
import com.gestion_conge_backend.data.repository.ServiceRepository;
import com.gestion_conge_backend.data.repository.TypeCongeRepository;
import com.gestion_conge_backend.modelGeneral.dtos.Servicedto;
import com.gestion_conge_backend.referentiel.dtos.RefDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

/**
 * @author Abderrahmane
 */
@RestController
@RequestMapping("referentiel")
public class ReferentielController {
    @Autowired
    private final ServiceRepository serviceRepository;
    private final EmploiyeeRepository emploiyeRepository;
    private final TypeCongeRepository typeCongeRepository;
    public ReferentielController(ServiceRepository serviceRepository,EmploiyeeRepository emploiyeRepository,TypeCongeRepository typeCongeRepository) {
        this.serviceRepository = serviceRepository;
        this.emploiyeRepository=emploiyeRepository;
        this.typeCongeRepository=typeCongeRepository;
    }

    @GetMapping("services")
    public List<RefDto> getServices() {
        return serviceRepository.findAll().stream()
                .map(p -> p.toServiceDto(p)).collect(Collectors.toList());
    }
    @GetMapping("emploiyes")
    public List<RefDto> getEmploiyes() {
        return emploiyeRepository.findAll().stream()
                .map(p -> p.toCongesDto(p)).collect(Collectors.toList());
    }
    @GetMapping("typesconges")
    public List<RefDto> getTypeConges() {
        return typeCongeRepository.findAll().stream()
                .map(p -> p.toCongesDto(p)).collect(Collectors.toList());
    }
}
