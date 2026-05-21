package com.cesde.talentohumano.service;

import com.cesde.talentohumano.model.Deduccion;
import com.cesde.talentohumano.repository.DeduccionRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class DeduccionService {
    private final DeduccionRepository repository;
    public DeduccionService(DeduccionRepository repository) { this.repository = repository; }
    public List<Deduccion> getAll() { return repository.findAll(); }
    public List<Deduccion> getByDocumento(String doc) { return repository.findByEmpleadoDocumento(doc); }
    public Deduccion save(Deduccion d) { return repository.save(d); }
}
