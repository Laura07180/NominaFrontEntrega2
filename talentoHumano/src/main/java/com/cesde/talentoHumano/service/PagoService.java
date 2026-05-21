package com.cesde.talentohumano.service;

import com.cesde.talentohumano.model.Pago;
import com.cesde.talentohumano.repository.PagoRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PagoService {

    private final PagoRepository repository;

    public PagoService(PagoRepository repository) {
        this.repository = repository;
    }

    public List<Pago> getAll() { return repository.findAll(); }
    public Pago save(Pago entity) { return repository.save(entity); }
}
