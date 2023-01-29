package com.gestion_conge_backend.modelGeneral.dtos;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Servicedto {
    private Integer id;
    private String abreviation;
    private String libelle;
}
