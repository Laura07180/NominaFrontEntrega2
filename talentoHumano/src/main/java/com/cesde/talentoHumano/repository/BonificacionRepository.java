package com.cesde.talentohumano.repository;

import com.cesde.talentohumano.model.Bonificacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface BonificacionRepository extends JpaRepository<Bonificacion, Long> {
    List<Bonificacion> findByEmpleadoDocumento(String documento);
}
