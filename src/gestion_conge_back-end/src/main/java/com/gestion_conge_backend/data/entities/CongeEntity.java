package com.gestion_conge_backend.data.entities;

import com.gestion_conge_backend.modelGeneral.dtos.Congedto;
import com.gestion_conge_backend.modelGeneral.dtos.Emploiyeedto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;

import java.sql.Date;
import java.util.Collection;
import java.util.Objects;
@Builder
@AllArgsConstructor
@Entity
@Table(name = "conge", schema = "gestion_conge", catalog = "")
public class CongeEntity {
    private Integer id;
    private Date dateDebut;
    private Date dateFin;

    private Integer emploiyee;
    private EmploiyeeEntity emploiyeeByIdemploiyee;
    private Integer typeConge;
    private TypeCongeEntity typeCongeByIdtypeConge;
    private String status;

    public CongeEntity() {

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
    @Column(name = "dateDebut")
    public Date getDateDebut() {
        return dateDebut;
    }

    public void setDateDebut(Date dateDebut) {
        this.dateDebut = dateDebut;
    }

    @Basic
    @Column(name = "dateFin")
    public Date getDateFin() {
        return dateFin;
    }

    public void setDateFin(Date dateFin) {
        this.dateFin = dateFin;
    }

    @Basic
    @Column(name = "emploiyee")
    public Integer getEmploiyee() {
        return emploiyee;
    }

    public void setEmploiyee(Integer emploiyee) {
        this.emploiyee = emploiyee;
    }

    @Basic
    @Column(name = "typeConge")
    public Integer getTypeConge() {
        return typeConge;
    }

    public void setTypeConge(Integer typeConge) {
        this.typeConge = typeConge;
    }
    @Basic
    @Column(name = "status")
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CongeEntity that = (CongeEntity) o;
        return Objects.equals(id, that.id) && Objects.equals(dateDebut, that.dateDebut) && Objects.equals(dateFin, that.dateFin) && Objects.equals(emploiyee, that.emploiyee) && Objects.equals(typeConge, that.typeConge);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, dateDebut, dateFin, emploiyee, typeConge);
    }
    @ManyToOne
    @JoinColumn(name = "emploiyee", referencedColumnName = "id", nullable = false, insertable = false, updatable = false)
    public EmploiyeeEntity getEmploiyeeByIdemploiyee() {
        return  emploiyeeByIdemploiyee;
    }

    public void setEmploiyeeByIdemploiyee(EmploiyeeEntity emploiyeeByIdemploiyee) {
        this.emploiyeeByIdemploiyee = emploiyeeByIdemploiyee;
    }
    @ManyToOne
    @JoinColumn(name = "typeConge", referencedColumnName = "id", nullable = false, insertable = false, updatable = false)
    public TypeCongeEntity getTypeCongeByIdtypeConge() {
        return typeCongeByIdtypeConge;
    }

    public void setTypeCongeByIdtypeConge(TypeCongeEntity typeCongeByIdtypeConge) {
        this.typeCongeByIdtypeConge = typeCongeByIdtypeConge;
    }
    public Congedto toConge(CongeEntity conge) {
        return Congedto.builder()
                .id(conge.getId())
                .dateDebut(conge.getDateDebut())
                .dateFin(conge.getDateFin())
                .status(conge.getStatus())
                .emploiyee(conge.getEmploiyee())
                .emploiyeeNom(conge.getEmploiyeeByIdemploiyee().getNom())
                .typeConge(conge.getTypeConge())
                .labelletypeConge(conge.getTypeCongeByIdtypeConge().getLibelle())
                .build();
    }

}
