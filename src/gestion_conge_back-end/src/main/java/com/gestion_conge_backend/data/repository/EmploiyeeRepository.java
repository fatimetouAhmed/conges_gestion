package com.gestion_conge_backend.data.repository;

import com.gestion_conge_backend.data.entities.EmploiyeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EmploiyeeRepository extends JpaRepository<EmploiyeeEntity,Integer> {

}
