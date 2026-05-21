package com.cesde.talentohumano.repository;

import com.cesde.talentohumano.model.Nomina;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NominaRepository extends JpaRepository<Nomina, Long> {
}
