package com.gestion_conge_backend.referentiel.dtos;

import lombok.Builder;
import lombok.Data;

/**
 * @author Abderrahmane
 */
@Builder
@Data
public class RefDto {
   private Integer id;
   private String lib;
}
