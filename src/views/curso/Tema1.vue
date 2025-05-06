<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Factores dependientes del maestro, que influyen en la atención del alumno'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.mb-5       
      .col-lg-9.mb-3.mb-lg-0 
        p(data-aos="fade-down") En el ámbito educativo, la figura del docente va más allá de la simple transmisión de conocimientos. Su labor implica una serie de interacciones y dinámicas que pueden estar profundamente influenciadas por factores psicológicos. Comprender cómo estos factores afectan la enseñanza y pueden utilizarse estratégicamente, contribuye a mejorar significativamente el proceso de enseñanza-aprendizaje. Esta unidad tiene como propósito explorar diversas estrategias psicológicas que favorecen la actividad docente, ofreciendo un marco referencial útil para estudiantes universitarios en formación docente.

        .bg-color-2.p-4(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/4.svg")
            .col-lg
              p.mb-0 Aprender es el proceso de asimilar información que resulta en un cambio relativamente permanente en el comportamiento, producto de la experiencia o la práctica (Sáez, 2018). Es decir, implica transformaciones que, aunque puedan desarrollarse en un periodo corto, permiten responder de forma más adecuada a diversas situaciones.
              
      .col-lg-3
        figure
          img.img-a.img-t(src="@/assets/curso/temas/5.png", data-aos="zoom-in")

    p(data-aos="fade-down") Para asegurar un aprendizaje efectivo, es crucial prestar atención a ciertos aspectos fundamentales que, en gran medida, pueden ser facilitados o potenciados por el docente:
    .bg-full-width-3.bg-fondo-1.py-4
      .px-4.px-md-5
        TabsC(data-aos="fade-right").color-acento-contenido
          .bg-color-6.border.px-4.p-md-5.py-3(titulo="Comunicación" :icon="require('@/assets/bullets/icon.svg')")
            .row.justify-content-center
              .col-lg-7.col-xl-8.mb-4.mb-md-0
                h4 Necesidades del alumno 
                p El aprendizaje ocurre en respuesta a necesidades personales. Cuando estas necesidades son intensas y existen metas claras, el proceso se vuelve más efectivo. El docente debe identificar y conectar el contenido con dichas necesidades.
        
              .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
                figure(data-aos="zoom-in")
                  img.img-a.img-t(src='@/assets/curso/temas/6.png', alt='')  

          .bg-color-6.border.px-4.p-md-5.py-3(titulo="Educación" :icon="require('@/assets/bullets/icon.svg')")
            .row.justify-content-center
              .col-lg-7.col-xl-8.mb-4.mb-md-0
                h4 Preparación para aprender 
                p El aprendizaje no puede forzarse si el estudiante no está preparado. Esto implica tanto el desarrollo cognitivo como emocional. El maestro debe reconocer el momento adecuado para introducir nuevos contenidos.
        
              .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
                figure(data-aos="zoom-in")
                  img.img-a.img-t(src='@/assets/curso/temas/7.png', alt='') 

          .bg-color-6.border.px-4.p-md-5.py-3(titulo="<i>Marketing</i>" :icon="require('@/assets/bullets/icon.svg')")
            .row.justify-content-center
              .col-lg-7.col-xl-8.mb-4.mb-md-0
                h4 Situación de aprendizaje
                p La situación o contexto influye directamente en la calidad y rapidez del aprendizaje. El docente puede crear situaciones formales (estructuradas, planificadas) que sistematicen el aprendizaje, en contraste con las #[b informales], que se dan en el entorno familiar o social.
        
              .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
                figure(data-aos="zoom-in")
                  img.img-a.img-t(src='@/assets/curso/temas/8.png', alt='') 

        .bg-color-5.mb-5(data-aos="fade-up") 
          .px-4.px-md-5.py-2
            .row.align-items-center
              .col-lg-auto
                img.img-a.img-t(src="@/assets/curso/temas/9.svg")
              .col-lg.text-white
                p.mb-0 En conjunto, estos factores muestran cómo la influencia del maestro no se limita a lo académico, sino que abarca la creación de condiciones psicológicas, contextuales y emocionales que propician una mayor atención y, por ende, un mejor aprendizaje por parte del alumno.  

        h3(data-aos="fade-down") La motivación
        p(data-aos="fade-down") La motivación se considera un motor esencial de la actividad docente. En particular, la motivación intrínseca, el deseo de aprender por el placer de hacerlo, puede potenciarse mediante estrategias que generen un entorno estimulante y seguro. #[b Por ejemplo:]

        div.row.justify-content-center.align-items-stretch.text-center
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/10.svg" alt="" style="width: 90px")
              h5.mb-2.text-center Primero 
              p.mb-0 Crear un ambiente de aula #[b positivo] donde los estudiantes se sientan valorados.

          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/11.svg" alt="" style="width: 90px")
              h5.mb-2.text-center Segundo
              p.mb-0 Usar #[b refuerzos positivos] (elogios, reconocimientos).

          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/12.svg" alt="" style="width: 90px")
              h5.mb-2.text-center Tercero
              p.mb-0 Relacionar los contenidos con los #[b intereses y experiencias] previas del alumnado.

    .row.mb-5       
      .col-lg-8
        p(data-aos="fade-down") Además, la Teoría de las Expectativas de Vroom (1964), resulta clave para entender cómo los estudiantes se motivan al anticipar que su esfuerzo les conducirá a un resultado deseado. Esta teoría puede ser aplicada por el docente al:   
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-2
              p.mb-0 Establecer metas claras y alcanzables.

            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-2
              p.mb-0 Comunicar altas expectativas.

            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.color-2
              p.mb-0 Brindar apoyo constante, incluyendo evaluaciones formativas que permitan ajustar el rendimiento.             
              
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/13.png", data-aos="zoom-in")    

    h3(data-aos="fade-down") La gestión emocional
    p(data-aos="fade-down") En la actualidad, la gestión emocional se ha vuelto una competencia clave dentro del ámbito educativo. Los docentes, al igual que los estudiantes, enfrentan emociones que pueden impactar directa o indirectamente, el clima del aula. Por ello, desarrollar la inteligencia emocional, la capacidad de reconocer, comprender y regular emociones propias y ajenas, es vital. Una herramienta útil en este sentido, es la práctica de técnicas como el mindfulness o atención plena, que ayudan a:
    .bg-full-width-1.bg-fondo-2.py-4
      .px-4.px-md-5
        .row.mb-5
          .col-lg-4
            figure
              img.img-a.img-t(src="@/assets/curso/temas/17.png", data-aos="zoom-in")  
          .col-lg-8
            .bg-color-10.p-3.text-white.mb-3(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/temas/14.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-0 Reducir el estrés del docente.

            .bg-color-10.p-3.text-white.mb-3(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/temas/15.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-0 Mejorar la empatía con los estudiantes.

            .bg-color-10.p-3.text-white(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/temas/16.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-0 Favorecer un ambiente emocionalmente saludable y colaborativo.  

        h3(data-aos="fade-down") El aprendizaje cooperativo
        p(data-aos="fade-down") Finalmente, el aprendizaje cooperativo representa una estrategia psicológica poderosa que promueve, tanto la comprensión del contenido como el desarrollo de habilidades sociales. Basado en la Teoría del Aprendizaje Social de Bandura, este enfoque sostiene que los estudiantes aprenden observando y colaborando con otros. En la práctica, los docentes pueden:

        .row.justify-content-center.text-white.mb-3           
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-5.h-100.p-3.j1                   
              p.mb-0.text-center(data-aos="fade-up") Organizar proyectos grupales.
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-9.h-100.p-3.j1                  
              p.mb-0.text-center(data-aos="fade-up") Fomentar debates dirigidos. 
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-5.h-100.p-3.j1                  
              p.mb-0.text-center(data-aos="fade-up") Usar estudios de caso para que los alumnos resuelvan en equipo.
        .row.justify-content-center.text-white.mb-5 
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-9.h-100.p-3.j1                   
              p.mb-0.text-center(data-aos="fade-up") Potencia la cohesión grupal.
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-5.h-100.p-3.j1                  
              p.mb-0.text-center(data-aos="fade-up") Mejora el clima del aula. 
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-9.h-100.p-3.j1                  
              p.mb-0.text-center(data-aos="fade-up") Desarrolla competencias como la escucha activa, la negociación y el liderazgo.  

    h3(data-aos="fade-down") La retroalimentación
    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") La retroalimentación es una herramienta poderosa para mejorar la actividad docente y potenciar el aprendizaje de los estudiantes. La retroalimentación constructiva, enfocada en señalar lo que se puede mejorar y cómo lograrlo, resulta esencial para el desarrollo académico. Para ello, los docentes deben estar formados en su entrega efectiva, utilizando un enfoque específico, orientado a la acción y que promueva la autoevaluación. Cuando los estudiantes reciben retroalimentación de forma regular y de calidad, se sienten más motivados para participar activamente en su proceso de aprendizaje.

        .col-lg-auto
          figure
            img.img-a.img-t(src='@/assets/curso/temas/18.png', alt='')  

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/19.png", data-aos="zoom-in")                
      .col-lg-8
        p(data-aos="fade-down") Este concepto forma parte de un conjunto más amplio de estrategias psicológicas que favorecen la actividad docente, como la motivación, la gestión emocional, el aprendizaje cooperativo y la propia retroalimentación constructiva. Para los estudiantes universitarios en formación docente, comprender y aplicar estas estrategias en su futura práctica pedagógica, es fundamental.

        .bg-color-4.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/20.svg")
            .col-lg
              p.mb-0 Así, no solo contribuirán al desarrollo académico de sus alumnos, sino que crearán un entorno educativo más humano y enriquecedor. El éxito en la enseñanza no se mide únicamente por el conocimiento transmitido, sino también por la capacidad de inspirar y motivar a los estudiantes a alcanzar su máximo potencial.

    .row.mb-5       
      .col-lg-8
        h3(data-aos="fade-down") Factores del docente que influyen en la atención del alumno
        p(data-aos="fade-down").mb-5 Diversos factores asociados al rol del maestro, inciden directamente en la capacidad de atención del alumno en el aula. Estos incluyen: el estilo de enseñanza, la relación interpersonal, la comunicación, la motivación, la gestión del aula, la evaluación, la regulación emocional y la formación continua.    
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          ul.lista-ul--color.ul-1
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-1  
              h5.mb-0 Estilos de enseñanza      
          p.mb-0 Los estilos de enseñanza son enfoques que cada docente utiliza para facilitar el aprendizaje. Estos influyen en la manera en que los estudiantes procesan y aplican la información, y pueden determinar el nivel de atención y participación.
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/21.png", data-aos="zoom-in")                                                                  

    .bg-full-width.bg-fondo-slider(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/22.png")           
            .col-lg-7
              h5 Tradicional o expositivo
              ul.lista-ul--color.mb-0
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-2
                  p.mb-0 Transmisión directa de información.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-2
                  p.mb-0 Clases magistrales y evaluaciones formales. 
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-2
                  p.mb-0 Poca interacción; puede desmotivar. 
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-2
                  p.mb-0 Eficiente para contenidos memorísticos.   

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/23.png")           
            .col-lg-7
              h5 Constructivista
              ul.lista-ul--color.mb-0
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-2
                  p.mb-0 Promueve el aprendizaje activo y significativo. 
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-2
                  p.mb-0 Incluye trabajo en equipo, proyectos y discusiones. 
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-2
                  p.mb-0 Fomenta el pensamiento crítico y la creatividad.   

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/24.png")           
            .col-lg-7
              h5 Basado en proyectos
              ul.lista-ul--color.mb-0
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-2
                  p.mb-0 Aprendizaje mediante proyectos reales e interdisciplinarios. 
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-2
                  p.mb-0 Enfatiza la investigación, resolución de problemas y habilidades comunicativas. 
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-2
                  p.mb-0 Puede requerir más recursos.   

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/25.png")           
            .col-lg-7
              h5 Basado en la tecnología
              ul.lista-ul--color.mb-0
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-2
                  p.mb-0 Uso de plataformas digitales. 
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-2
                  p.mb-0 Facilita el aprendizaje autónomo y acceso a la información. 
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-2
                  p.mb-0 Puede presentar desafíos por la brecha digital.   

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/26.png")           
            .col-lg-7
              h5 Socrático
              ul.lista-ul--color.mb-0
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-2
                  p.mb-0 Se centra en el diálogo y la formulación de preguntas abiertas. 
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-2
                  p.mb-0 Estimula la argumentación y el pensamiento crítico. 
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right.color-2
                  p.mb-0 Puede ser complejo para quienes prefieren más estructura.
          
    .bg-full-width.bg-color-2.mb-5(data-aos="fade-up") 
      .px-4.px-md-5.py-2
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/27.svg")
          .col-lg
            p.mb-0 Un docente eficaz suele combinar diferentes estilos, adaptándolos al contexto, a la materia y a las características de sus estudiantes, lo que favorece un ambiente de aprendizaje dinámico y participativo.

    ul(data-aos="fade-down").lista-ul--color.ul-1
      li.mb-3.d-flex
        i.far.fa-arrow-alt-circle-right.color-1  
        h5.mb-0 Relaciones interpersonales y comunicación  
    p(data-aos="fade-down").mb-4 La calidad de la relación interpersonal entre docente y estudiante, incide directamente en la atención del alumno. Un maestro que construye vínculos basados en la confianza, el respeto, la empatía y la escucha activa, genera un entorno positivo y motivador. 

    .bg-full-width.bg-color-info.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/temas/28.svg', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="22.3%" y="77%" numero="+")
                  h5 Gestión del aula 
                  p Requiere normas claras, rutinas estables y estrategias de control. Crea un entorno seguro y estructurado que favorece la atención.

                .bg-color-white.box-shadow.p-3(x="22.3%" y="40.3%" numero="+")
                  h5 Comunicación clara 
                  p Adaptada al contexto y características del grupo. Incluye tono, velocidad del habla, vocabulario y pronunciación. Facilita la comprensión y conexión con la realidad del estudiante. 

                .bg-color-white.box-shadow.p-3(x="77.6%" y="25.6%" numero="+")
                  h5 Motivación
                  p Puede ser intrínseca o extrínseca. El docente la estimula mediante contenidos relevantes y actividades significativas, promoviendo mayor atención y participación. 

                .bg-color-white.box-shadow.p-3(x="83.1%" y="56.6%" numero="+")
                  h5 Diversidad metodológica
                  p Permite responder a diferentes necesidades mediante actividades prácticas, uso de recursos multimedia y debates grupales. 

    ul(data-aos="fade-down").lista-ul--color.ul-1
      li.mb-3.d-flex
        i.far.fa-arrow-alt-circle-right.color-1  
        h5.mb-0 Estilos evaluativos
    p(data-aos="fade-down").mb-4 La forma de evaluar también incide en la atención del alumno. En particular, la evaluación formativa, centrada en el proceso y no solo en los resultados, resulta especialmente beneficiosa.

    .bg-full-width-1.bg-fondo-3.mb-5
      .px-4.px-md-5.pb-md-3
        div.row.justify-content-center.align-items-stretch.text-center
          div.col-lg-6.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/29.svg" alt="" style="width: 90px")
              h5 Formativa
              p.mb-0 Proporciona retroalimentación continua. Involucra al alumno en su propio proceso de aprendizaje. Estimula una mentalidad de mejora.

          div.col-lg-6.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/30.svg" alt="" style="width: 90px")
              h5 Sumativa 
              p.mb-0 Evalúa el resultado final del aprendizaje. Aunque necesaria, no siempre genera un compromiso sostenido durante el proceso.
        .bg-full-width.bg-h86
          .px-4.px-md-5
            .row.justify-content-center.align-items-center
              .col-lg-12
                .row.justify-content-center.align-items-center
                  .col-lg-auto.mb-3.mb-lg-0(data-aos="zoom-in")
                    img.img-a.img-t(src='@/assets/curso/temas/31.svg', alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0                 
                  .col(data-aos="fade-left")
                    p.mb-0.mt-5 La implementación de evaluaciones formativas y constructivas aumenta el involucramiento y fomenta una participación activa. 

    .row.mb-5       
      .col-lg-8
        ul.lista-ul--color.ul-1
          li.mb-3.d-flex
            i.far.fa-arrow-alt-circle-right.color-1  
            h5.mb-0 Regulación emocional y formación continua
        p(data-aos="fade-down").mb-5 Las emociones del maestro también influyen en la dinámica del aula. Un docente que gestiona adecuadamente sus emociones y mantiene una actitud positiva crea un ambiente propicio para el aprendizaje. Esta regulación emocional impacta en el bienestar del grupo y, por ende, en su capacidad de atención. Finalmente, la formación continua y el desarrollo profesional son aspectos fundamentales. Un maestro actualizado en nuevas metodologías y enfoques pedagógicos, está mejor preparado para innovar y mantener la atención de sus estudiantes.  
        .bg-color-4.p-4.mb-4(data-aos="fade-left")
          p.mb-0 Los factores dependientes del docente que influyen en la atención del alumno, son variados y complejos. Desde el estilo de enseñanza hasta la gestión del aula, cada aspecto es crucial para fomentar un aprendizaje activo y comprometido. Por ello, es indispensable que los futuros docentes reflexionen sobre su práctica y desarrollen habilidades que les permitan responder a las necesidades de sus estudiantes. La atención del alumno no se logra de forma aislada: requiere colaboración entre docentes, estudiantes e instituciones educativas, en una construcción conjunta del aprendizaje. 
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/32.png", data-aos="zoom-in")


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/111872?page=6" target="_blank" rel="noopener noreferrer") Corredor Montagut, M. V., Pérez Angulo, M. I. & Arbeláez López, R. (2009). Estrategias de enseñanza y aprendizaje. Ediciones UIS. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/278555?page=10" target="_blank" rel="noopener noreferrer") Ochoa-Angrino, S. (Comp.). (2022). Estudios sobre motivación en contextos educativos. Pontificia Universidad Javeriana Seccional Cali.              

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://colombia.universidadeuropea.com/blog/tipos-metodologias-ensenanza/" target="_blank" rel="noopener noreferrer") Universidad europea online. (2024). Tipos de metodologías de enseñanza: cómo elegir la mejor.             


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/oMPQNOD-2fo?si=LatIwc0_e12YxcwY" target="_blank" rel="noopener noreferrer") Sprouts Español. (2023). El método de aprendizaje activo.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
