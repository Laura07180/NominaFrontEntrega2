package com.cesde.talentohumano.model;

import jakarta.persistence.*;

@Entity
@Table(name = "usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombres;
    private String tipoDocumento;
    @Column(unique = true)
    private String documento;
    private Integer edad;

    public Usuario() {}
    public Usuario(Long id, String nombres, String tipoDocumento, String documento, Integer edad) {
        this.id = id; this.nombres = nombres; this.tipoDocumento = tipoDocumento;
        this.documento = documento; this.edad = edad;
    }
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getNombres() { return nombres; }
    public void setNombres(String nombres) { this.nombres = nombres; }
    public String getTipoDocumento() { return tipoDocumento; }
    public void setTipoDocumento(String tipoDocumento) { this.tipoDocumento = tipoDocumento; }
    public String getDocumento() { return documento; }
    public void setDocumento(String documento) { this.documento = documento; }
    public Integer getEdad() { return edad; }
    public void setEdad(Integer edad) { this.edad = edad; }
}
