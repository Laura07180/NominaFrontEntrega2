package com.cesde.talentohumano.model;

import jakarta.persistence.*;

@Entity
@Table(name = "bonificaciones")
public class Bonificacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String empleadoDocumento;
    private String empleadoNombre;
    private String tipo;
    private Double valor;

    public Bonificacion() {}
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getEmpleadoDocumento() { return empleadoDocumento; }
    public void setEmpleadoDocumento(String empleadoDocumento) { this.empleadoDocumento = empleadoDocumento; }
    public String getEmpleadoNombre() { return empleadoNombre; }
    public void setEmpleadoNombre(String empleadoNombre) { this.empleadoNombre = empleadoNombre; }
    public String getTipo() { return tipo; }
    public void setTipo(String tipo) { this.tipo = tipo; }
    public Double getValor() { return valor; }
    public void setValor(Double valor) { this.valor = valor; }
}
