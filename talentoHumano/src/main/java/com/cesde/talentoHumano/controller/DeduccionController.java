package com.cesde.talentohumano.controller;

import com.cesde.talentohumano.model.Deduccion;
import com.cesde.talentohumano.service.DeduccionService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/deducciones")
public class DeduccionController {
    private final DeduccionService service;
    public DeduccionController(DeduccionService service) { this.service = service; }

    @GetMapping
    public List<Deduccion> getAll() { return service.getAll(); }

    @GetMapping("/empleado/{documento}")
    public List<Deduccion> getByDocumento(@PathVariable String documento) { return service.getByDocumento(documento); }

    @PostMapping
    public Deduccion save(@RequestBody Deduccion d) { return service.save(d); }
}
