package com.gestion_conge_backend.data.repository;

import com.gestion_conge_backend.data.entities.ServicesEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceRepository extends JpaRepository<ServicesEntity,Integer> {
}
