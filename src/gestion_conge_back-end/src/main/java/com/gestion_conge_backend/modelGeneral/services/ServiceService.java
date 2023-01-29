package com.gestion_conge_backend.modelGeneral.services;

import com.gestion_conge_backend.data.entities.ServicesEntity;
import com.gestion_conge_backend.data.repository.ServiceRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ServiceService {
    private final ServiceRepository serviceRepository;
    public ServiceService(ServiceRepository serviceRepository) {
        this.serviceRepository = serviceRepository;
    }

    public ServicesEntity creer(ServicesEntity servicesEntity) {

//        service.setAbreviation(service.getAbreviation());
//        service.setLibelle(service.getLibelle());
        return serviceRepository.save(servicesEntity);
    }


    public List<ServicesEntity> lire() {
        return serviceRepository.findAll();
    }


    public ServicesEntity modifier(int id, ServicesEntity service) {
        return serviceRepository.findById(id)
                .map(
                        e->{
                            e.setAbreviation(service.getAbreviation());
                            e.setLibelle(service.getLibelle());
                        return serviceRepository.save(e);
                        }
                ).orElseThrow(()-> new RuntimeException("employee non trouve"));
    }


    public String supprimer(int id) {
        serviceRepository.deleteById(id);
        return "Service est supprimer avec succes";
    }
}
