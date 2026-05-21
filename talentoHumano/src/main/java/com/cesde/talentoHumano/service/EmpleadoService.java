package com.cesde.talentohumano.service;

import com.cesde.talentohumano.model.Empleado;
import com.cesde.talentohumano.repository.EmpleadoRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EmpleadoService {

    private final EmpleadoRepository repository;

    public EmpleadoService(EmpleadoRepository repository) {
        this.repository = repository;
    }

    public List<Empleado> getAll() { return repository.findAll(); }
    public Empleado save(Empleado entity) { return repository.save(entity); }
}
