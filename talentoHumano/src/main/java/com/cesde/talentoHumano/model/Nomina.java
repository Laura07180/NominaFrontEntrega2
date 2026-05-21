package com.cesde.talentohumano.model;

import jakarta.persistence.*;

@Entity
@Table(name = "nominas")
public class Nomina {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String empleadoDocumento;
    private String empleadoNombre;
    private String periodo;
    private Double salarioBase;
    private String cargo;

    public Nomina() {}
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getEmpleadoDocumento() { return empleadoDocumento; }
    public void setEmpleadoDocumento(String empleadoDocumento) { this.empleadoDocumento = empleadoDocumento; }
    public String getEmpleadoNombre() { return empleadoNombre; }
    public void setEmpleadoNombre(String empleadoNombre) { this.empleadoNombre = empleadoNombre; }
    public String getPeriodo() { return periodo; }
    public void setPeriodo(String periodo) { this.periodo = periodo; }
    public Double getSalarioBase() { return salarioBase; }
    public void setSalarioBase(Double salarioBase) { this.salarioBase = salarioBase; }
    public String getCargo() { return cargo; }
    public void setCargo(String cargo) { this.cargo = cargo; }
}
