-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-05-2026 a las 03:00:49
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `talentohumano`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bonificaciones`
--

CREATE TABLE `bonificaciones` (
  `id` bigint(20) NOT NULL,
  `empleado_documento` varchar(255) DEFAULT NULL,
  `empleado_nombre` varchar(255) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `valor` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `bonificaciones`
--

INSERT INTO `bonificaciones` (`id`, `empleado_documento`, `empleado_nombre`, `tipo`, `valor`) VALUES
(1, '1022159453', 'ISABELLA CORREA', 'ventas', 30000),
(2, '1020484613', 'ISABELLA CORREA', 'ventas', 30000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cargos`
--

CREATE TABLE `cargos` (
  `id` bigint(20) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `salario_base` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cargos`
--

INSERT INTO `cargos` (`id`, `nombre`, `salario_base`) VALUES
(1, 'AUXILIAR ADMINISTRATIVA', 2000000),
(2, 'AUXILIAR CONTABLE', 2000000),
(3, 'ADMINISTRADOR', 4000000),
(4, 'GERENTE GENERAL', 10000000),
(5, 'AUXILIAR ADMINISTRATIVA', 2000000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `deducciones`
--

CREATE TABLE `deducciones` (
  `id` bigint(20) NOT NULL,
  `empleado_documento` varchar(255) DEFAULT NULL,
  `empleado_nombre` varchar(255) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `valor` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `deducciones`
--

INSERT INTO `deducciones` (`id`, `empleado_documento`, `empleado_nombre`, `tipo`, `valor`) VALUES
(1, '1022159453', 'ISABELLA CORREA', 'Salud 4%', 80000),
(2, '1022159453', 'ISABELLA CORREA', 'ARL 4%', 80000),
(3, '1022159453', 'ISABELLA CORREA', 'Pensión 4%', 80000),
(4, '1020484613', 'ISABELLA CORREA', 'Pensión 4%', 80000),
(5, '1020484613', 'ISABELLA CORREA', 'Salud 4%', 80000),
(6, '1020484613', 'ISABELLA CORREA', 'Fondo de Solidaridad 4%', 80000),
(7, '1020484613', 'ISABELLA CORREA', 'ARL 4%', 80000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id` bigint(20) NOT NULL,
  `cargo` varchar(255) DEFAULT NULL,
  `documento` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `salario` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id`, `cargo`, `documento`, `nombre`, `salario`) VALUES
(1, 'AUXILIAR ADMINISTRATIVA', '1022159453', 'ISABELLA CORREA', 2000000),
(2, 'AUXILIAR ADMINISTRATIVA', '1020484613', 'ISABELLA CORREA', 2000000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nominas`
--

CREATE TABLE `nominas` (
  `id` bigint(20) NOT NULL,
  `cargo` varchar(255) DEFAULT NULL,
  `empleado_documento` varchar(255) DEFAULT NULL,
  `empleado_nombre` varchar(255) DEFAULT NULL,
  `periodo` varchar(255) DEFAULT NULL,
  `salario_base` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `nominas`
--

INSERT INTO `nominas` (`id`, `cargo`, `empleado_documento`, `empleado_nombre`, `periodo`, `salario_base`) VALUES
(1, 'AUXILIAR ADMINISTRATIVA', '1022159453', 'ISABELLA CORREA', '1 ENERO', 2000000),
(2, 'AUXILIAR ADMINISTRATIVA', '1022159453', 'ISABELLA CORREA', '1 ENERO', 2000000),
(3, 'AUXILIAR ADMINISTRATIVA', '1020484613', 'ISABELLA CORREA', '1 ENERO', 2000000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagos`
--

CREATE TABLE `pagos` (
  `id` bigint(20) NOT NULL,
  `empleado_nombre` varchar(255) DEFAULT NULL,
  `fecha` varchar(255) DEFAULT NULL,
  `monto` double DEFAULT NULL,
  `nomina_id` bigint(20) DEFAULT NULL,
  `periodo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pagos`
--

INSERT INTO `pagos` (`id`, `empleado_nombre`, `fecha`, `monto`, `nomina_id`, `periodo`) VALUES
(1, 'ISABELLA CORREA', '2026-01-15', 2000000, 1, '1 ENERO'),
(2, 'ISABELLA CORREA', '2026-01-01', 1710000, 3, '1 ENERO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` bigint(20) NOT NULL,
  `documento` varchar(255) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `nombres` varchar(255) DEFAULT NULL,
  `tipo_documento` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `documento`, `edad`, `nombres`, `tipo_documento`) VALUES
(1, '1020484613', 28, 'Laura', 'Cédula');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bonificaciones`
--
ALTER TABLE `bonificaciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cargos`
--
ALTER TABLE `cargos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `deducciones`
--
ALTER TABLE `deducciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK5l7j8378rxvcv2yq3kic8f17i` (`documento`);

--
-- Indices de la tabla `nominas`
--
ALTER TABLE `nominas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK51x567hg32si9nj9gjcbabcnm` (`documento`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bonificaciones`
--
ALTER TABLE `bonificaciones`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `cargos`
--
ALTER TABLE `cargos`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `deducciones`
--
ALTER TABLE `deducciones`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `nominas`
--
ALTER TABLE `nominas`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `pagos`
--
ALTER TABLE `pagos`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
