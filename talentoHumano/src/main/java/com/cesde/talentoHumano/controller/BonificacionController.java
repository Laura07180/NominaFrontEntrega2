package com.cesde.talentohumano.controller;

import com.cesde.talentohumano.model.Bonificacion;
import com.cesde.talentohumano.service.BonificacionService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/bonificaciones")
public class BonificacionController {
    private final BonificacionService service;
    public BonificacionController(BonificacionService service) { this.service = service; }

    @GetMapping
    public List<Bonificacion> getAll() { return service.getAll(); }

    @GetMapping("/empleado/{documento}")
    public List<Bonificacion> getByDocumento(@PathVariable String documento) { return service.getByDocumento(documento); }

    @PostMapping
    public Bonificacion save(@RequestBody Bonificacion b) { return service.save(b); }
}
