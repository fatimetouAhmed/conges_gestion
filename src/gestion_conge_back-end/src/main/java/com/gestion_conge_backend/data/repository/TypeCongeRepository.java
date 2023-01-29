package com.gestion_conge_backend.data.repository;

import com.gestion_conge_backend.data.entities.TypeCongeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TypeCongeRepository extends JpaRepository<TypeCongeEntity,Integer> {
}
