package com.gestion_conge_backend.modelGeneral.dtos;

import com.gestion_conge_backend.data.entities.CongeEntity;
import com.gestion_conge_backend.data.entities.EmploiyeeEntity;
import com.gestion_conge_backend.data.entities.TypeCongeEntity;
import lombok.Builder;
import lombok.Data;

import java.sql.Date;

@Data
@Builder
public class Congedto {
    private Integer id;
    private Date dateDebut;
    private Date dateFin;
    private String status;
    private Integer emploiyee;
    private String emploiyeeNom;
    private Integer typeConge;
    private String labelletypeConge;
    public static CongeEntity toconge(Congedto conge) {
        return CongeEntity.builder()
                .id(conge.getId())
                .dateDebut(conge.getDateDebut())
                .dateFin(conge.getDateFin())
                .emploiyee(conge.getEmploiyee())
                .typeConge(conge.getTypeConge())
                .build();
    }
}
