package com.gestion_conge_backend.data.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;

import java.util.Objects;

@Builder
@AllArgsConstructor
@Entity
@Table(name = "type_conge", schema = "gestion_conge", catalog = "")
public class TypeCongeEntity {
    private Integer id;
    private String libelle;

    public TypeCongeEntity() {

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
        TypeCongeEntity that = (TypeCongeEntity) o;
        return Objects.equals(id, that.id) && Objects.equals(libelle, that.libelle);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, libelle);
    }
}
