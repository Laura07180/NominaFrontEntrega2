package com.cesde.talentohumano.controller;

import com.cesde.talentohumano.model.Cargo;
import com.cesde.talentohumano.service.CargoService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/cargos")
public class CargoController {
    private final CargoService service;
    public CargoController(CargoService service) { this.service = service; }

    @GetMapping
    public List<Cargo> getAll() { return service.getAll(); }

    @PostMapping
    public Cargo save(@RequestBody Cargo entity) { return service.save(entity); }
}
