package com.gestion_conge_backend.modelGeneral.services;

import com.gestion_conge_backend.data.entities.CongeEntity;
import com.gestion_conge_backend.data.repository.CongeRepository;
import com.gestion_conge_backend.modelGeneral.dtos.Congedto;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CongeService {
    private final CongeRepository congeRepository;
    public CongeService(CongeRepository congeRepository) {
        this.congeRepository = congeRepository;
    }

    public CongeEntity creer(CongeEntity congeEntity) {
        return congeRepository.save(congeEntity);
    }



    public List<Congedto> lire() {
        return congeRepository.findAll()  .stream()
                .map(m -> m.toConge(m))
                .collect(Collectors.toList());
    }


    public CongeEntity modifier(int id, CongeEntity conge) {
        return congeRepository.findById(id)
                .map(
                        e->{
                            e.setDateDebut(conge.getDateDebut());
                            e.setDateFin(conge.getDateFin());
                            e.setEmploiyee(conge.getEmploiyee());
                            e.setStatus(conge.getStatus());
                            e.setTypeConge(conge.getTypeConge());
                            return congeRepository.save(e);
                        }
                ).orElseThrow(()-> new RuntimeException("Conge non trouve"));
    }


    public String supprimer(int id) {
        congeRepository.deleteById(id);
        return "Service est supprimer avec succes";
    }

    public List<Congedto> conge_NO_Confirmer() {
        return congeRepository.conge_NO_Confirmer() .stream()
                .map(m -> m.toConge(m))
                .collect(Collectors.toList());
    }

    public List<Congedto> congeConfirmer() {
        return congeRepository.congeConfirmer() .stream()
                .map(m -> m.toConge(m))
                .collect(Collectors.toList());
    }

    public List<Congedto> congeRefuser() {
        return congeRepository.congeRefuser() .stream()
                .map(m -> m.toConge(m))
                .collect(Collectors.toList());
    }
//    public void updateStatus(String query) {
//
//    }
public CongeEntity modifierStatus(int id, String status) {
    CongeEntity conge=new CongeEntity();
    return congeRepository.findById(id)
            .map(
                    e->{
                        e.setStatus(conge.getStatus());
                        return congeRepository.save(e);
                    }
            ).orElseThrow(()-> new RuntimeException("Conge non trouve"));
}
}
