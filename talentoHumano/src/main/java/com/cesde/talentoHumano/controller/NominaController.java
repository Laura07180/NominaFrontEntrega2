package com.cesde.talentohumano.controller;

import com.cesde.talentohumano.model.Nomina;
import com.cesde.talentohumano.service.NominaService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/nominas")
public class NominaController {
    private final NominaService service;
    public NominaController(NominaService service) { this.service = service; }

    @GetMapping
    public List<Nomina> getAll() { return service.getAll(); }

    @PostMapping
    public Nomina save(@RequestBody Nomina entity) { return service.save(entity); }
}
