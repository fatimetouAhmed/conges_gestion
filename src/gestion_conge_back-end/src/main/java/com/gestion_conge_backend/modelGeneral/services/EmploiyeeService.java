package com.gestion_conge_backend.modelGeneral.services;

import com.gestion_conge_backend.data.entities.CongeEntity;
import com.gestion_conge_backend.data.entities.EmploiyeeEntity;
import com.gestion_conge_backend.data.entities.ServicesEntity;
import com.gestion_conge_backend.data.repository.EmploiyeeRepository;
import com.gestion_conge_backend.modelGeneral.dtos.Emploiyeedto;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmploiyeeService {
    private final EmploiyeeRepository emploiyeeRepository;
    public EmploiyeeService(EmploiyeeRepository emploiyeeRepository) {
        this.emploiyeeRepository = emploiyeeRepository;
    }

    public EmploiyeeEntity creer(EmploiyeeEntity emploiyeeEntity) {
        return emploiyeeRepository.save(emploiyeeEntity);
    }
    public List<Emploiyeedto> lire() {
        return emploiyeeRepository.findAll()
                .stream()
                .map(m -> m.toEmploiyeeEntity(m))
                .collect(Collectors.toList());
    }


    public EmploiyeeEntity modifier(int id, EmploiyeeEntity emploiyee) {
        return emploiyeeRepository.findById(id)
                .map(
                        e->{
                            e.setMatricule(emploiyee.getMatricule());
                            e.setNom(emploiyee.getNom());
                            e.setPrenom(emploiyee.getPrenom());
                            e.setAdresse(emploiyee.getAdresse());
                            e.setEmail(emploiyee.getEmail());
                            e.setStatus(emploiyee.getStatus());
                            return emploiyeeRepository.save(e);
                        }
                ).orElseThrow(()-> new RuntimeException("employee non trouve"));
    }


    public String supprimer(int id) {
        emploiyeeRepository.deleteById(id);
        return "emploiyee est supprimer avec succes";
    }
    public EmploiyeeEntity modifierStatus(int id, String status) {
        EmploiyeeEntity emploiyee=new EmploiyeeEntity();
        return emploiyeeRepository.findById(id)
                .map(
                        e->{
                            e.setStatus(emploiyee.getStatus());
                            return emploiyeeRepository.save(e);
                        }
                ).orElseThrow(()-> new RuntimeException("employee non trouve"));
    }
}
