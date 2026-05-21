package com.cesde.talentohumano.model;

import jakarta.persistence.*;

@Entity
@Table(name = "pagos")
public class Pago {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long nominaId;
    private String empleadoNombre;
    private String periodo;
    private Double monto;
    private String fecha;

    public Pago() {}
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public Long getNominaId() { return nominaId; }
    public void setNominaId(Long nominaId) { this.nominaId = nominaId; }
    public String getEmpleadoNombre() { return empleadoNombre; }
    public void setEmpleadoNombre(String empleadoNombre) { this.empleadoNombre = empleadoNombre; }
    public String getPeriodo() { return periodo; }
    public void setPeriodo(String periodo) { this.periodo = periodo; }
    public Double getMonto() { return monto; }
    public void setMonto(Double monto) { this.monto = monto; }
    public String getFecha() { return fecha; }
    public void setFecha(String fecha) { this.fecha = fecha; }
}
