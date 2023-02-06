package com.gestion_conge_backend.data.entities;

import com.gestion_conge_backend.referentiel.dtos.RefDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;

import java.util.Objects;

@Builder
@AllArgsConstructor
@Entity
@Table(name = "services", schema = "gestion_conge", catalog = "")
public class ServicesEntity {
    private Integer id;
    private String abreviation;
    private String libelle;

    public ServicesEntity() {

    }

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Basic
    @Column(name = "abreviation")
    public String getAbreviation() {
        return abreviation;
    }

    public void setAbreviation(String abreviation) {
        this.abreviation = abreviation;
    }

    @Basic
    @Column(name = "libelle")
    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ServicesEntity that = (ServicesEntity) o;
        return Objects.equals(id, that.id) && Objects.equals(abreviation, that.abreviation) && Objects.equals(libelle, that.libelle);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, abreviation, libelle);
    }
    public RefDto toServiceDto(ServicesEntity servicesEntity) {
        return RefDto.builder()
                .id(servicesEntity.getId())
                .lib(servicesEntity.getAbreviation())
                .build();
    }
}
