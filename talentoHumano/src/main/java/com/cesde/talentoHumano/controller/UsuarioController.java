package com.cesde.talentohumano.controller;

import com.cesde.talentohumano.model.Usuario;
import com.cesde.talentohumano.service.UsuarioService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {
    private final UsuarioService service;
    public UsuarioController(UsuarioService service) { this.service = service; }

    @GetMapping
    public List<Usuario> getAll() { return service.getAll(); }

    @PostMapping("/registro")
    public ResponseEntity<?> registrar(@RequestBody Usuario usuario) {
        try {
            Usuario nuevo = service.registrar(usuario);
            return ResponseEntity.ok(Map.of("success", true, "message", "Usuario registrado", "user", nuevo));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Map.of("success", false, "message", e.getMessage()));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> body) {
        Optional<Usuario> usuario = service.login(body.get("documento"));
        if (usuario.isPresent())
            return ResponseEntity.ok(Map.of("success", true, "user", usuario.get()));
        return ResponseEntity.badRequest().body(Map.of("success", false, "message", "Usuario no encontrado"));
    }
}
