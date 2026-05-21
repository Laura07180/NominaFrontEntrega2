package com.cesde.talentohumano.service;

import com.cesde.talentohumano.model.Nomina;
import com.cesde.talentohumano.repository.NominaRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class NominaService {

    private final NominaRepository repository;

    public NominaService(NominaRepository repository) {
        this.repository = repository;
    }

    public List<Nomina> getAll() { return repository.findAll(); }
    public Nomina save(Nomina entity) { return repository.save(entity); }
}
