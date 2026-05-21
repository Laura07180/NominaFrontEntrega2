package com.cesde.talentohumano.service;

import com.cesde.talentohumano.model.Usuario;
import com.cesde.talentohumano.repository.UsuarioRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {
    private final UsuarioRepository repository;
    public UsuarioService(UsuarioRepository repository) { this.repository = repository; }
    public List<Usuario> getAll() { return repository.findAll(); }
    public Usuario registrar(Usuario u) {
        if (repository.existsByDocumento(u.getDocumento()))
            throw new RuntimeException("Ya existe un usuario con ese documento");
        return repository.save(u);
    }
    public Optional<Usuario> login(String documento) { return repository.findByDocumento(documento); }
}
