package com.cesde.talentohumano.repository;

import com.cesde.talentohumano.model.Deduccion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface DeduccionRepository extends JpaRepository<Deduccion, Long> {
    List<Deduccion> findByEmpleadoDocumento(String documento);
}
