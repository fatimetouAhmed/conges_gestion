package com.gestion_conge_backend.modelGeneral.dtos;

import com.gestion_conge_backend.data.entities.EmploiyeeEntity;
import com.gestion_conge_backend.data.entities.ServicesEntity;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Emploiyeedto {
    private Integer id;
    private String matricule;
    private String nom;
    private String prenom;
    private Integer tel;
    private String email;
    private String adresse;
    private Integer services;
    private String labelleService;
    private String status;
    public static EmploiyeeEntity toEmploiyeeEntity(Emploiyeedto emploiyeedto) {
        return EmploiyeeEntity.builder()
                .id(emploiyeedto.getId())
                .nom(emploiyeedto.getNom())
                .prenom(emploiyeedto.getPrenom())
                .matricule(emploiyeedto.getMatricule())
                .adresse(emploiyeedto.getEmail())
                .email(emploiyeedto.getEmail())
                .tel(emploiyeedto.getTel())
                .status(emploiyeedto.getStatus())
                .build();
    }
}
