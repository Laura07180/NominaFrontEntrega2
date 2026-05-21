package com.cesde.talentohumano.controller;

import com.cesde.talentohumano.model.Empleado;
import com.cesde.talentohumano.service.EmpleadoService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/empleados")
public class EmpleadoController {
    private final EmpleadoService service;
    public EmpleadoController(EmpleadoService service) { this.service = service; }

    @GetMapping
    public List<Empleado> getAll() { return service.getAll(); }

    @PostMapping
    public Empleado save(@RequestBody Empleado entity) { return service.save(entity); }
}
