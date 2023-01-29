package com.gestion_conge_backend.data.entities;

import com.gestion_conge_backend.modelGeneral.dtos.Emploiyeedto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;

import java.util.Objects;
@Builder
@AllArgsConstructor
@Entity
@Table(name = "emploiyee", schema = "gestion_conge", catalog = "")
public class EmploiyeeEntity {
    private Integer id;
    private String matricule;
    private String nom;
    private String prenom;
    private Integer tel;
    private String email;
    private String adresse;

    private Integer services;
    private ServicesEntity serviceByIdService;
    private String status;

    public EmploiyeeEntity() {

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
    @Column(name = "matricule")
    public String getMatricule() {
        return matricule;
    }

    public void setMatricule(String matricule) {
        this.matricule = matricule;
    }

    @Basic
    @Column(name = "nom")
    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    @Basic
    @Column(name = "prenom")
    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    @Basic
    @Column(name = "tel")
    public Integer getTel() {
        return tel;
    }

    public void setTel(Integer tel) {
        this.tel = tel;
    }

    @Basic
    @Column(name = "email")
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Basic
    @Column(name = "adresse")
    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    @Column(name = "services")
    public Integer getServices() {
        return services;
    }

    public void setServices(Integer services) {
        this.services = services;
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
        EmploiyeeEntity that = (EmploiyeeEntity) o;
        return Objects.equals(id, that.id) && Objects.equals(matricule, that.matricule) && Objects.equals(nom, that.nom) && Objects.equals(prenom, that.prenom) && Objects.equals(tel, that.tel) && Objects.equals(email, that.email) && Objects.equals(adresse, that.adresse) && Objects.equals(status, that.status);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, matricule, nom, prenom, tel, email, adresse,  status);
    }
    @ManyToOne
    @JoinColumn(name = "services", referencedColumnName = "id", nullable = false, insertable = false, updatable = false)
    public ServicesEntity getServiceByIdService() {
        return serviceByIdService;
    }

    public void setServiceByIdService(ServicesEntity serviceByIdService) {
        this.serviceByIdService = serviceByIdService;
    }
    public Emploiyeedto toEmploiyeeEntity(EmploiyeeEntity emploiyeeEntity) {
        return Emploiyeedto.builder()
                .id(emploiyeeEntity.getId())
                .nom(emploiyeeEntity.getNom())
                .prenom(emploiyeeEntity.getPrenom())
                .matricule(emploiyeeEntity.getMatricule())
                .adresse(emploiyeeEntity.getEmail())
                .email(emploiyeeEntity.getEmail())
                .tel(emploiyeeEntity.getTel())
                .status(emploiyeeEntity.getStatus())
                .services(emploiyeeEntity.getServices())
                .labelleService(emploiyeeEntity.getServiceByIdService().getLibelle())
                .build();
    }

}
