package com.cesde.talentohumano.service;

import com.cesde.talentohumano.model.Bonificacion;
import com.cesde.talentohumano.repository.BonificacionRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BonificacionService {
    private final BonificacionRepository repository;
    public BonificacionService(BonificacionRepository repository) { this.repository = repository; }
    public List<Bonificacion> getAll() { return repository.findAll(); }
    public List<Bonificacion> getByDocumento(String doc) { return repository.findByEmpleadoDocumento(doc); }
    public Bonificacion save(Bonificacion b) { return repository.save(b); }
}
