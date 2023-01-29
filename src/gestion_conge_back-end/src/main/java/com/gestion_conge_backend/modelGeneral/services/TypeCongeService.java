package com.gestion_conge_backend.modelGeneral.services;

import com.gestion_conge_backend.data.entities.ServicesEntity;
import com.gestion_conge_backend.data.entities.TypeCongeEntity;
import com.gestion_conge_backend.data.repository.ServiceRepository;
import com.gestion_conge_backend.data.repository.TypeCongeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeCongeService {
    private final TypeCongeRepository typeCongeRepository;
    public TypeCongeService(TypeCongeRepository typeCongeRepository) {
        this.typeCongeRepository = typeCongeRepository;
    }

    public TypeCongeEntity creer(TypeCongeEntity typecongeEntity) {
        return typeCongeRepository.save(typecongeEntity);
    }


    public List<TypeCongeEntity> lire() {
        return typeCongeRepository.findAll();
    }


    public TypeCongeEntity modifier(int id, TypeCongeEntity typeConge) {
        return typeCongeRepository.findById(id)
                .map(
                        e->{
                            e.setLibelle(typeConge.getLibelle());
                            return typeCongeRepository.save(e);
                        }
                ).orElseThrow(()-> new RuntimeException("employee non trouve"));
    }


    public String supprimer(int id) {
        typeCongeRepository.deleteById(id);
        return "Le type de conge est supprimer avec succes";
    }
}
