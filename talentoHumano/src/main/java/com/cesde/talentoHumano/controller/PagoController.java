package com.cesde.talentohumano.controller;

import com.cesde.talentohumano.model.Pago;
import com.cesde.talentohumano.service.PagoService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/pagos")
public class PagoController {
    private final PagoService service;
    public PagoController(PagoService service) { this.service = service; }

    @GetMapping
    public List<Pago> getAll() { return service.getAll(); }

    @PostMapping
    public Pago save(@RequestBody Pago entity) { return service.save(entity); }
}
