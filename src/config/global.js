export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Estrategias psicológicas que favorecen la actividad docente',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Factores dependientes del maestro, que influyen en la atención del alumno',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Factores dependientes del alumno',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Sáez López, J. M. (2018). <i>Estilos de aprendizaje y métodos de enseñanza</i>. Madrid, UNED - Universidad Nacional de Educación a Distancia. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/129726?page=8',
    },
    {
      referencia:
        'Luna Valle, E. G. (2006). <i>El docente presencial: técnicas de enseñanza para enriquecer su desempeño académico</i>. Plaza y Valdés. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/75511?page=27. ',
    },
    {
      referencia:
        'Bañuelos Márquez, A. M. (2006). <i>Motivación escolar: estudio de variables afectivas</i>. Red Perfiles Educativos. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/6928?page=3. ',
    },
    {
      referencia:
        'Quintana, J. M. (2016). <i>Pedagogía familiar</i>. Narcea Ediciones. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/46056?page=61. ',
    },
    {
      referencia:
        'Kaim Luscher, E. (2017). <i>Bullying detección, acción y prevención</i>. IURE Editores. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/40232?page=11',
    },
  ],
  glosario: [
    {
      termino: 'Aprendizaje',
      significado:
        'Proceso de adquirir conocimientos o habilidades a través de la experiencia o la práctica, que implica un cambio en el comportamiento.',
    },
    {
      termino: 'Aprendizaje cooperativo',
      significado:
        'Estrategia educativa que fomenta la colaboración entre estudiantes para alcanzar objetivos comunes, mejorando el aprendizaje social y emocional.',
    },
    {
      termino: '<i>Bullying</i>',
      significado:
        'Comportamiento agresivo y persistente en el que una persona o grupo acosa a otra, afectando su bienestar emocional y rendimiento académico.',
    },
    {
      termino: 'Clima escolar',
      significado:
        'Atmósfera emocional y social en una escuela que puede afectar la motivación y el rendimiento académico de los estudiantes.',
    },
    {
      termino: 'Cultura escolar',
      significado:
        'Conjunto de valores, creencias y prácticas que caracterizan a una institución educativa y afectan la experiencia de aprendizaje de los estudiantes.',
    },
    {
      termino: 'Desempeño académico',
      significado:
        'Resultado del aprendizaje de un estudiante, medido a través de calificaciones y evaluaciones.',
    },
    {
      termino: 'Docente',
      significado:
        'Persona que se dedica a la enseñanza y guía del aprendizaje de los estudiantes en un contexto educativo.',
    },
    {
      termino: 'Expectativas familiares',
      significado:
        'Creencias y demandas que los padres tienen sobre el rendimiento académico de sus hijos, que pueden motivar o generar presión.',
    },
    {
      termino: 'Estado emocional',
      significado:
        'Sentimientos y emociones que afectan la capacidad de atención y rendimiento académico de un estudiante.',
    },
    {
      termino: 'Estilo de enseñanza',
      significado:
        'Enfoque que un educador utiliza para facilitar el aprendizaje, que puede variar en función de la materia y el grupo.',
    },
    {
      termino: 'Gestión emocional',
      significado:
        'Proceso de reconocer y regular las propias emociones para crear un ambiente propicio para el aprendizaje.',
    },
    {
      termino: 'Habilidades de auto-regulación',
      significado:
        'Capacidades que permiten a los estudiantes gestionar su tiempo y recursos, establecer metas y monitorear su propio progreso.',
    },
    {
      termino: 'Inteligencia emocional',
      significado:
        'Capacidad de reconocer y gestionar las propias emociones y las de los demás, crucial en el ambiente educativo.',
    },
    {
      termino: 'Mindfulness',
      significado:
        'Práctica de atención plena que ayuda a gestionar emociones y reducir el estrés, promoviendo un ambiente positivo en el aula.',
    },
    {
      termino: 'Motivación intrínseca',
      significado:
        'Deseo interno de aprender y participar en actividades educativas, impulsado por el placer o interés por el tema.',
    },
    {
      termino: 'Motivación extrínseca',
      significado:
        'Impulso para aprender que proviene de factores externos, como recompensas o reconocimiento.',
    },
    {
      termino: 'Redes de apoyo',
      significado:
        'Grupos de personas, como familiares y amigos, que brindan apoyo emocional y académico a los estudiantes.',
    },
    {
      termino: 'Relaciones interpersonales',
      significado:
        'Conexiones y vínculos que los estudiantes establecen con sus compañeros y docentes, que influyen en su bienestar emocional.',
    },
    {
      termino: 'Retroalimentación constructiva',
      significado:
        'Comentarios que se centran en lo que un estudiante puede mejorar y cómo hacerlo, esenciales para el desarrollo académico.',
    },
  ],
}
