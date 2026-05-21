package com.cesde.talentohumano.service;

import com.cesde.talentohumano.model.Cargo;
import com.cesde.talentohumano.repository.CargoRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CargoService {

    private final CargoRepository repository;

    public CargoService(CargoRepository repository) {
        this.repository = repository;
    }

    public List<Cargo> getAll() { return repository.findAll(); }
    public Cargo save(Cargo entity) { return repository.save(entity); }
}
