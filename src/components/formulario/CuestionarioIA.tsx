"use client";

import React, { useState, ChangeEvent } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Swal from 'sweetalert2';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

// Ejemplo de estructura para tus Tareas
interface Tarea {
  area: string;
  tarea: string;
  frecuencia: string;
  tiempo: string;
  impacto: string;
}

// Ejemplo de estructura de datos del formulario para enviar
interface FormData {
  infoGeneral: {
    nombreEmpresa: string;
    sectorIndustria: string;
    tamanoEmpresa: string;
    pais: string;
    contacto: string;
  };
  estrategiaVision: {
    estrategiaFormal: string;
    nivelImportancia: string;
    objetivosIA: string;
    casosUsoIdentificados: string;
    areasImplementacion: string;
  };
  datosGobernanza: {
    estrategiaDatos: string;
    almacenamientoDatos: string;
    seguridadDatos: string;
    accesibilidadDatos: string;
    datosHistoricos: string;
  };
  tecnologiaInfraestructura: {
    infraestructuraIA: string;
    nivelAdopcionIA: string;
    herramientasUtilizadas: string;
    integracionActual: string;
  };
  talentoCultura: {
    rolesEspecificos: string;
    equipoIA: string;
    nivelConocimiento: string;
    capacitaciones: string;
    capacitacionDirectivos: string;
    capacitacionAdministrativos: string;
    capacitacionComercial: string;
    capacitacionOperativo: string;
  };
  casosUsoPotencial: {
    desafiosEmpresa: string;
    modelosIAProbrados: string;
    expectativasImpacto: string;
    kpis: string;
    colaboracionesExternas: string;
  };
  tareasRepetitivas: Tarea[];
  adicionales: {
    tareasAutomatizadas: string;
    procesosErrores: string;
    procesosCriticos: string;
  };
}

export default function CuestionarioIA() {
  // Sección 1: Información General de la Empresa
  const [nombreEmpresa, setNombreEmpresa] = useState<string>("");
  const [sectorIndustria, setSectorIndustria] = useState<string>("");
  const [tamanoEmpresa, setTamanoEmpresa] = useState<string>("");
  const [pais, setPais] = useState<string>("");
  const [contacto, setContacto] = useState<string>("");

  // Sección 2: Estrategia y Visión de IA
  const [estrategiaFormal, setEstrategiaFormal] = useState<string>("");
  const [nivelImportancia, setNivelImportancia] = useState<string>("");
  const [objetivosIA, setObjetivosIA] = useState<string>("");
  const [casosUsoIdentificados, setCasosUsoIdentificados] = useState<string>("");
  const [areasImplementacion, setAreasImplementacion] = useState<string>("");

  // Sección 3: Datos y Gobernanza
  const [estrategiaDatos, setEstrategiaDatos] = useState<string>("");
  const [almacenamientoDatos, setAlmacenamientoDatos] = useState<string>("");
  const [seguridadDatos, setSeguridadDatos] = useState<string>("");
  const [accesibilidadDatos, setAccesibilidadDatos] = useState<string>("");
  const [datosHistoricos, setDatosHistoricos] = useState<string>("");

  // Sección 4: Tecnología e Infraestructura
  const [infraestructuraIA, setInfraestructuraIA] = useState<string>("");
  const [nivelAdopcionIA, setNivelAdopcionIA] = useState<string>("");
  const [herramientasUtilizadas, setHerramientasUtilizadas] = useState<string>("");
  const [integracionActual, setIntegracionActual] = useState<string>("");

  // Sección 5: Talento y Cultura Organizacional
  const [rolesEspecificos, setRolesEspecificos] = useState<string>("");
  const [equipoIA, setEquipoIA] = useState<string>("");
  const [nivelConocimiento, setNivelConocimiento] = useState<string>("");
  const [capacitaciones, setCapacitaciones] = useState<string>("");

  // Nuevas preguntas de capacitaciones por equipo
  const [capacitacionDirectivos, setCapacitacionDirectivos] = useState<string>("");
  const [capacitacionAdministrativos, setCapacitacionAdministrativos] = useState<string>("");
  const [capacitacionComercial, setCapacitacionComercial] = useState<string>("");
  const [capacitacionOperativo, setCapacitacionOperativo] = useState<string>("");

  // Sección 6: Casos de Uso y Potencial de IA
  const [desafiosEmpresa, setDesafiosEmpresa] = useState<string>("");
  const [modelosIAProbrados, setModelosIAProbrados] = useState<string>("");
  const [expectativasImpacto, setExpectativasImpacto] = useState<string>("");
  const [kpis, setKpis] = useState<string>("");
  const [colaboracionesExternas, setColaboracionesExternas] = useState<string>("");

  // Sección 7: Tareas Repetitivas y Procesos
  const [tareas, setTareas] = useState<Tarea[]>([
    {
      area: "Finanzas",
      tarea: "Conciliación de facturas",
      frecuencia: "Semanal",
      tiempo: "6 horas",
      impacto: "Alto",
    },
    {
      area: "RRHH",
      tarea: "Filtro inicial de currículums",
      frecuencia: "Diario",
      tiempo: "3 horas",
      impacto: "Medio",
    },
    {
      area: "Atención al Cliente",
      tarea: "Respuesta a consultas repetitivas",
      frecuencia: "Diario",
      tiempo: "8 horas",
      impacto: "Alto",
    },
    {
      area: "Producción",
      tarea: "Monitoreo de calidad manual",
      frecuencia: "Mensual",
      tiempo: "12 horas",
      impacto: "Alto",
    },
    {
      area: "Ventas",
      tarea: "Seguimiento de clientes vía email/manual",
      frecuencia: "Diario",
      tiempo: "5 horas",
      impacto: "Medio",
    },
  ]);

  const [tareasAutomatizadas, setTareasAutomatizadas] = useState<string>("");
  const [procesosErrores, setProcesosErrores] = useState<string>("");
  const [procesosCriticos, setProcesosCriticos] = useState<string>("");

  const form_data: FormData = {
    infoGeneral: {
      nombreEmpresa,
      sectorIndustria,
      tamanoEmpresa,
      pais,
      contacto,
    },
    estrategiaVision: {
      estrategiaFormal,
      nivelImportancia,
      objetivosIA,
      casosUsoIdentificados,
      areasImplementacion,
    },
    datosGobernanza: {
      estrategiaDatos,
      almacenamientoDatos,
      seguridadDatos,
      accesibilidadDatos,
      datosHistoricos,
    },
    tecnologiaInfraestructura: {
      infraestructuraIA,
      nivelAdopcionIA,
      herramientasUtilizadas,
      integracionActual,
    },
    talentoCultura: {
      rolesEspecificos,
      equipoIA,
      nivelConocimiento,
      capacitaciones,
      capacitacionDirectivos,
      capacitacionAdministrativos,
      capacitacionComercial,
      capacitacionOperativo,
    },
    casosUsoPotencial: {
      desafiosEmpresa,
      modelosIAProbrados,
      expectativasImpacto,
      kpis,
      colaboracionesExternas,
    },
    tareasRepetitivas: tareas,
    adicionales: {
      tareasAutomatizadas,
      procesosErrores,
      procesosCriticos,
    },
  };

  // Asegura que la tabla sea horizontalmente desplazable en pantallas pequeñas
  const handleAddRow = (): void => {
    setTareas((prev) => [
      ...prev,
      { area: "", tarea: "", frecuencia: "", tiempo: "", impacto: "" },
    ]);
  };

  const handleTareasChange = (index: number, field: keyof Tarea, value: string): void => {
    setTareas((prev) => {
      const updated = [...prev];
      updated[index][field] = value;
      return updated;
    });
  };

  const flattenFormData = (data: FormData) => {
    // Combina toda la información "fija" en un solo objeto
    const commonData = {
      ...data.infoGeneral,
      ...data.estrategiaVision,
      ...data.datosGobernanza,
      ...data.tecnologiaInfraestructura,
      ...data.talentoCultura,
      ...data.casosUsoPotencial,
      ...data.adicionales,
    };
  
    // Si hay tareas repetitivas, crea una fila por cada tarea (agregando la info común)
    if (data.tareasRepetitivas && data.tareasRepetitivas.length > 0) {
      return data.tareasRepetitivas.map((tarea: Tarea) => ({
        ...commonData,
        tareaArea: tarea.area,
        tareaDescripcion: tarea.tarea,
        tareaFrecuencia: tarea.frecuencia,
        tareaTiempo: tarea.tiempo,
        tareaImpacto: tarea.impacto,
      }));
    } else {
      // Si no hay tareas, se envía una única fila con los campos de tarea vacíos
      return [
        {
          ...commonData,
          tareaArea: '',
          tareaDescripcion: '',
          tareaFrecuencia: '',
          tareaTiempo: '',
          tareaImpacto: '',
        },
      ];
    }
  };

  // Ejemplo de función para POST a un servidor interno


  // Ejemplo de función para POST a Google Sheets usando Apps Script
  // Deberás crear un script de Google Apps Script que reciba una petición POST y
  // actualice la hoja de cálculo correspondiente.
 /* const postToGoogleSheets = async (data: FormData): Promise<void> => {
    try {
      // Reemplaza la URL con el enlace de tu despliegue de Apps Script
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxkx15ZMD3Mzm6gIEvdccZHzjzfKdhT7JJ_HSid3PHNb7A1wL7jN44PGZP18_hWaqXo/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Allow-Origin": "*",
          },
          mode: "no-cors",
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();


      console.log("Datos guardados en Google Sheets:", result);
    } catch (error) {
      console.error(error);
    }
  };
*/
  /*const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    // Se arma un objeto con toda la información del formulario
    const formData: FormData = {
      infoGeneral: {
        nombreEmpresa,
        sectorIndustria,
        tamanoEmpresa,
        pais,
        contacto,
      },
      estrategiaVision: {
        estrategiaFormal,
        nivelImportancia,
        objetivosIA,
        casosUsoIdentificados,
        areasImplementacion,
      },
      datosGobernanza: {
        estrategiaDatos,
        almacenamientoDatos,
        seguridadDatos,
        accesibilidadDatos,
        datosHistoricos,
      },
      tecnologiaInfraestructura: {
        infraestructuraIA,
        nivelAdopcionIA,
        herramientasUtilizadas,
        integracionActual,
      },
      talentoCultura: {
        rolesEspecificos,
        equipoIA,
        nivelConocimiento,
        capacitaciones,
        capacitacionDirectivos,
        capacitacionAdministrativos,
        capacitacionComercial,
        capacitacionOperativo,
      },
      casosUsoPotencial: {
        desafiosEmpresa,
        modelosIAProbrados,
        expectativasImpacto,
        kpis,
        colaboracionesExternas,
      },
      tareasRepetitivas: tareas,
      adicionales: {
        tareasAutomatizadas,
        procesosErrores,
        procesosCriticos,
      },
    };

    // Ejemplo: Guardar en tu servidor interno
    //await postToApi(formData);

    // Ejemplo: Guardar en Google Sheets usando Apps Script
    await postToGoogleSheets(formData);

    console.log("Formulario enviado", formData);
    setNombreEmpresa("");
    setSectorIndustria("");
    setTamanoEmpresa("");
    setPais("");
    setContacto("");
    setEstrategiaFormal("");
    setNivelImportancia("");
    setObjetivosIA("");
    setCasosUsoIdentificados("");
    setAreasImplementacion("");
    setEstrategiaDatos("");
    setAlmacenamientoDatos("");
    setSeguridadDatos("");
    setAccesibilidadDatos("");
    setDatosHistoricos("");
    setInfraestructuraIA("");
    setNivelAdopcionIA("");
    setHerramientasUtilizadas("");
    setIntegracionActual("");
    setRolesEspecificos("");
    setEquipoIA("");
    setNivelConocimiento("");
    setCapacitaciones("");
    setCapacitacionDirectivos("");
    setCapacitacionAdministrativos("");
    setCapacitacionComercial("");
    setCapacitacionOperativo("");
    setDesafiosEmpresa("");
    setModelosIAProbrados("");
    setExpectativasImpacto("");
    setKpis("");
    setColaboracionesExternas("");
    setTareasAutomatizadas("");
    setProcesosErrores("");
    setProcesosCriticos("");

    Swal.fire({
      title: 'Formulario enviado',
      text: 'Datos enviados con éxito',
      icon: 'success',
      confirmButtonText: 'Cerrar'
    })
  };*/

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, formData: FormData) => {
    e.preventDefault();
  
    // Prepara las filas a insertar en la hoja (cada fila es un objeto plano)
    const rows = flattenFormData(formData);
    /*
    console.log("Rows:", rows);
    console.log("data:", formData);
    */
  
    try {
      const response = await fetch('/submit-to-sheets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rows }),
      });

      if (response.ok) {
        console.log('Datos enviados correctamente a Google Sheets');
        Swal.fire({
          title: 'Formulario enviado',
          text: 'Datos enviados con éxito',
          icon: 'success',
          confirmButtonText: 'Cerrar'
        })
      } else {
        console.error('Error al enviar los datos');
      }
    } catch (error) {
      console.error('Error en el envío de datos:', error);
    }
  };

  return (
    <Card className="p-4 m-4 w-full max-w-5xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl mb-2">Cuestionario para Evaluación Inicial de Madurez en IA</CardTitle>
        <CardDescription className="text-gray-500">
          Completa este cuestionario para obtener una visión clara del nivel de madurez en IA de tu empresa.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e)=> handleSubmit(e, form_data)} className="space-y-6">
          {/* Sección 1: Información General */}
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-2">1. Información General de la Empresa</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium mb-1">Nombre de la empresa:</label>
                <Input
                  value={nombreEmpresa}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setNombreEmpresa(e.target.value)}
                  placeholder="Ej: ACME Corp"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Sector/Industria:</label>
                <Input
                  value={sectorIndustria}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setSectorIndustria(e.target.value)}
                  placeholder="Ej: Manufactura, Retail"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Tamaño de la empresa (Nº de empleados):</label>
                <Input
                  value={tamanoEmpresa}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setTamanoEmpresa(e.target.value)}
                  placeholder="Ej: 100"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">País o región de operación:</label>
                <Input
                  value={pais}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPais(e.target.value)}
                  placeholder="Ej: México, Colombia"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Persona de contacto y cargo:</label>
                <Input
                  value={contacto}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setContacto(e.target.value)}
                  placeholder="Ej: Juan Pérez, Director TI"
                  required
                />
              </div>
            </div>
          </div>

          {/* Sección 2: Estrategia y Visión de IA */}
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-2">2. Estrategia y Visión de IA</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium mb-1">¿La empresa tiene una estrategia formal de IA definida?</label>
                <Select onValueChange={(value) => setEstrategiaFormal(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Si">Sí</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                    <SelectItem value="En desarrollo">En desarrollo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Nivel de importancia de la IA en la estrategia:</label>
                <Select onValueChange={(value) => setNivelImportancia(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Baja">Baja</SelectItem>
                    <SelectItem value="Media">Media</SelectItem>
                    <SelectItem value="Alta">Alta</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1">Principales objetivos de la empresa con IA:</label>
                <Textarea
                  value={objetivosIA}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setObjetivosIA(e.target.value)}
                  placeholder="Ej: automatización de procesos, análisis de datos, etc."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">¿Se han identificado casos de uso específicos?</label>
                <Select onValueChange={(value) => setCasosUsoIdentificados(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Si">Sí</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1">Áreas donde se considera implementar IA:</label>
                <Textarea
                  value={areasImplementacion}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setAreasImplementacion(e.target.value)}
                  placeholder="Ej: marketing, operaciones, finanzas"
                />
              </div>
            </div>
          </div>

          {/* Sección 3: Datos y Gobernanza */}
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-2">3. Datos y Gobernanza</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium mb-1">¿Cuenta con estrategia clara de gestión de datos?</label>
                <Select onValueChange={(value) => setEstrategiaDatos(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Si">Sí</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                    <SelectItem value="En desarrollo">En desarrollo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">¿Cómo se almacenan/gestionan los datos?</label>
                <Select onValueChange={(value) => setAlmacenamientoDatos(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Local">Bases de datos locales</SelectItem>
                    <SelectItem value="Nube">Nube</SelectItem>
                    <SelectItem value="Ambas">Combinación de ambas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Medidas de seguridad y cumplimiento normativo:</label>
                <Select onValueChange={(value) => setSeguridadDatos(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Si">Sí</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                    <SelectItem value="No estoy seguro">No estoy seguro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">¿Los datos están estructurados y accesibles?</label>
                <Select onValueChange={(value) => setAccesibilidadDatos(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Si">Sí</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                    <SelectItem value="Parcialmente">Parcialmente</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">¿Ha trabajado con datos históricos para entrenar IA?</label>
                <Select onValueChange={(value) => setDatosHistoricos(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Si">Sí</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Sección 4: Tecnología e Infraestructura */}
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-2">4. Tecnología e Infraestructura</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium mb-1">¿Infraestructura propia o nube?</label>
                <Select onValueChange={(value) => setInfraestructuraIA(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Propia">Infraestructura propia</SelectItem>
                    <SelectItem value="Nube">Soluciones en la nube</SelectItem>
                    <SelectItem value="Ambas">Ambas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Nivel de adopción de IA:</label>
                <Select onValueChange={(value) => setNivelAdopcionIA(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Exploracion">Exploración</SelectItem>
                    <SelectItem value="Pruebas piloto">Pruebas piloto</SelectItem>
                    <SelectItem value="Implementacion limitada">Implementación limitada</SelectItem>
                    <SelectItem value="Implementacion a escala">Implementación a escala</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1">Herramientas o plataformas de IA utilizadas:</label>
                <Textarea
                  value={herramientasUtilizadas}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setHerramientasUtilizadas(e.target.value)}
                  placeholder="Ej: TensorFlow, OpenAI, AWS AI, etc."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">¿Existe integración de IA en procesos operativos?</label>
                <Select onValueChange={(value) => setIntegracionActual(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Si">Sí</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Sección 5: Talento y Cultura Organizacional */}
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-2">5. Talento y Cultura Organizacional</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium mb-1">¿Existen roles específicos para IA?</label>
                <Select onValueChange={(value) => setRolesEspecificos(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Si">Sí</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">¿Cuenta la empresa con equipo de científicos de datos?</label>
                <Select onValueChange={(value) => setEquipoIA(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Si">Sí</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                    <SelectItem value="Terceriza">Se terceriza</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Nivel de conocimientos sobre IA:</label>
                <Select onValueChange={(value) => setNivelConocimiento(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Basico">Básico</SelectItem>
                    <SelectItem value="Intermedio">Intermedio</SelectItem>
                    <SelectItem value="Avanzado">Avanzado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">¿Se han realizado capacitaciones en IA?</label>
                <Select onValueChange={(value) => setCapacitaciones(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Si">Sí</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Sub-sección: Capacitaciones por equipo */}
            <div className="border-t pt-4 mt-4">
              <h3 className="text-lg font-semibold mb-2">Capacitaciones específicas por equipo</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium mb-1">Equipo Directivo:</label>
                  <Select onValueChange={(value) => setCapacitacionDirectivos(value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecciona" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Si">Sí</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                      <SelectItem value="No se">No sé</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Equipo Administrativo:</label>
                  <Select onValueChange={(value) => setCapacitacionAdministrativos(value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecciona" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Si">Sí</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                      <SelectItem value="No se">No sé</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Equipo Comercial:</label>
                  <Select onValueChange={(value) => setCapacitacionComercial(value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecciona" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Si">Sí</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                      <SelectItem value="No se">No sé</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Equipo Operativo:</label>
                  <Select onValueChange={(value) => setCapacitacionOperativo(value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecciona" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Si">Sí</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                      <SelectItem value="No se">No sé</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Sección 6: Casos de Uso y Potencial de IA */}
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-2">6. Casos de Uso y Potencial de IA</h2>
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Principales desafíos que enfrenta la empresa (resolubles con IA):</label>
                <Textarea
                  value={desafiosEmpresa}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDesafiosEmpresa(e.target.value)}
                  placeholder="Ej: procesos costosos, poca eficiencia, etc."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">¿La empresa ha desarrollado o probado modelos de IA antes? Resultados:</label>
                <Textarea
                  value={modelosIAProbrados}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setModelosIAProbrados(e.target.value)}
                  placeholder="Descripción de experiencias previas"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Expectativas sobre el impacto de IA en la operación:</label>
                <Textarea
                  value={expectativasImpacto}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setExpectativasImpacto(e.target.value)}
                  placeholder="Ej: mejorar tiempos, reducir costos, mejorar experiencia del cliente"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Principales KPIs o métricas de éxito para un proyecto de IA:</label>
                <Textarea
                  value={kpis}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setKpis(e.target.value)}
                  placeholder="Ej: reducción de costos, aumento de ventas, tiempo de respuesta"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">¿Considera colaborar con consultores externos o proveedores de tecnología?</label>
                <Select onValueChange={(value) => setColaboracionesExternas(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Si">Sí</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Sección 7: Tareas Repetitivas y Procesos Susceptibles de Mejora con IA */}
          <div>
            <h2 className="text-xl font-semibold mb-2">7. Tareas Repetitivas y Procesos</h2>
            <p className="text-sm text-gray-600 mb-4">
              Identifica las áreas funcionales y tareas repetitivas de alto volumen:
            </p>
            {/* Tabla con scroll horizontal en dispositivos pequeños */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border mb-4">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-2 border">Área</th>
                    <th className="p-2 border">Tarea repetitiva</th>
                    <th className="p-2 border">Frecuencia</th>
                    <th className="p-2 border">Tiempo promedio</th>
                    <th className="p-2 border">Impacto si se automatiza</th>
                  </tr>
                </thead>
                <tbody>
                  {tareas.map((row, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-2 border">
                        <Input
                          value={row.area}
                          onChange={(e: ChangeEvent<HTMLInputElement>) => handleTareasChange(index, "area", e.target.value)}
                          placeholder="Ej: Finanzas"
                        />
                      </td>
                      <td className="p-2 border">
                        <Input
                          value={row.tarea}
                          onChange={(e: ChangeEvent<HTMLInputElement>) => handleTareasChange(index, "tarea", e.target.value)}
                          placeholder="Ej: Conciliación de facturas"
                        />
                      </td>
                      <td className="p-2 border">
                        <Input
                          value={row.frecuencia}
                          onChange={(e: ChangeEvent<HTMLInputElement>) => handleTareasChange(index, "frecuencia", e.target.value)}
                          placeholder="Diaria/Semanal/Mensual"
                        />
                      </td>
                      <td className="p-2 border">
                        <Input
                          value={row.tiempo}
                          onChange={(e: ChangeEvent<HTMLInputElement>) => handleTareasChange(index, "tiempo", e.target.value)}
                          placeholder="Ej: 6 horas"
                        />
                      </td>
                      <td className="p-2 border">
                        <Input
                          value={row.impacto}
                          onChange={(e: ChangeEvent<HTMLInputElement>) => handleTareasChange(index, "impacto", e.target.value)}
                          placeholder="Bajo/Medio/Alto"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Button type="button" onClick={handleAddRow} className="mb-4">
              Añadir fila
            </Button>

            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">¿Qué tareas ya están automatizadas en alguna medida?</label>
                <Textarea
                  value={tareasAutomatizadas}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setTareasAutomatizadas(e.target.value)}
                  placeholder="Ej: macros en Excel, RPA, chatbots, etc."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">¿En qué procesos hay mayor margen de error humano?</label>
                <Textarea
                  value={procesosErrores}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setProcesosErrores(e.target.value)}
                  placeholder="Describir procesos con alta tasa de error"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  ¿Cuáles afectan la experiencia del cliente o eficiencia operativa?
                </label>
                <Textarea
                  value={procesosCriticos}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setProcesosCriticos(e.target.value)}
                  placeholder="Describir procesos críticos"
                />
              </div>
            </div>
          </div>

          <Button type="submit" className="mt-4 w-full sm:w-auto">
            Enviar Cuestionario
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
