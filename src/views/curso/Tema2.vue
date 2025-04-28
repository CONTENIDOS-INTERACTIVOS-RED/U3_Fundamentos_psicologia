<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Factores dependientes del alumno'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img.img-a.img-t(src='@/assets/curso/temas/36.png', alt='')            
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La atención es un componente esencial del proceso de aprendizaje en todos los niveles educativos. Se define como la capacidad para concentrarse en tareas específicas y filtrar estímulos irrelevantes, lo cual es crucial en entornos donde se exige una carga académica considerable. Esta capacidad puede verse afectada por múltiples factores propios del estudiante, entre ellos: la motivación, el estado emocional, las habilidades de autorregulación y las características individuales.

    h3(data-aos="fade-down") La motivación y su impacto en la atención
    p(data-aos="fade-down") La motivación es uno de los factores más determinantes en la atención académica. Un estudiante motivado tiende a enfocarse mejor en las tareas, pues encuentra un propósito claro y un interés genuino en los contenidos. La motivación escolar, como proceso, involucra variables cognitivas y afectivas. Según el Modelo de Autovaloración de (Bañuelos, 2006), cuanto más competente se perciba un estudiante, mayor será su motivación para alcanzar aprendizajes significativos.

    p(data-aos="fade-down").mb-5 Existen dos tipos principales de motivación que influyen en la atención del estudiante:

    .row.justify-content-center.align-items-stretch.text-center.mb-4
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .custom-image-card-2.h-100.br-1
          img.custom-image-card__image(src="@/assets/curso/temas/33.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Intrínseca
            ul(data-aos="fade-down").lista-ul--color
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-2  
                p.mb-0 Impulsada por el deseo genuino de aprender y superarse. 
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-2  
                p.mb-0 Favorece la atención sostenida y el rendimiento estable. 
      .col-lg-6.mb-4(data-aos="zoom-in-down")
        .custom-image-card-2.h-100.br-1
          img.custom-image-card__image(src="@/assets/curso/temas/34.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Extrínseca
            ul(data-aos="fade-down").lista-ul--color
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-2  
                p.mb-0 Basada en recompensas externas (notas, elogios). 
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-2  
                p.mb-0 Puede ser efectiva a corto plazo, pero menos estable a largo plazo.

    .bg-full-width.bg-color-4.mb-5(data-aos="fade-up") 
      .px-4.px-md-5.py-2
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/35.svg")
          .col-lg
            p.mb-0 Los estudiantes con motivación intrínseca tienden a mostrar mayor atención y compromiso. En cambio, una dependencia exclusiva de la motivación extrínseca puede provocar desinterés cuando las recompensas no son inmediatas, afectando negativamente el rendimiento académico.

    .row.mb-5       
      .col-lg-8.mb-3.mb-lg-0
        ul.lista-ul--color.ul-1
          li.mb-3.d-flex
            i.far.fa-arrow-alt-circle-right.color-1  
            h5.mb-0 Relación entre motivación y disciplina
        
        p(data-aos="fade-down") La motivación también se entrelaza con la #[b disciplina], entendida como la capacidad del estudiante para gestionar su tiempo, resistir distracciones y mantener el compromiso con sus estudios. Cuando un alumno está motivado intrínsecamente, es más probable que desarrolle hábitos de estudio sólidos y una actitud proactiva.

        .bg-h87.p-4(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto.up
              img.img-a.img-t(src="@/assets/curso/temas/38.svg")
            .col-lg.up
              p.mb-0.mt-4 En contraste, quienes dependen de motivación extrínseca pueden presentar menor disciplina, lo cual dificulta su capacidad de concentración y compromiso a largo plazo.
        .bg-color-2.p-4(data-aos="fade-right") 
          h5 ¿Qué pueden hacer las instituciones educativas?

          p.mb-0 Implementar metodologías activas, fomentar la curiosidad, y promover la autoevaluación son estrategias clave para desarrollar tanto la motivación como la disciplina, potenciando así la atención y el rendimiento académico.                     
              
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/37.png", data-aos="zoom-in") 

    h3(data-aos="fade-down") Estado emocional y atención

    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5.py-0
        .row.justify-content-center.align-items-center
          .col-lg-6.p-0
            figure
              img.img-a.img-t(src="@/assets/curso/temas/39.svg", data-aos="zoom-in")
          .col-lg-6
            p(data-aos="fade-left").mb-4.text-white A continuación, se aborda cómo el estado emocional de los estudiantes influye directamente en su capacidad para concentrarse y aprender.
            
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="El impacto del estado emocional en la atención y el aprendizaje"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )  

    .bg-full-width-3.bg-fondo-1.py-4
      .px-4.px-md-5
        .row.mb-5       
          .col-lg-8.mb-3.mb-lg-0 
            h3(data-aos="fade-down") Habilidades de autorregulación
            p(data-aos="fade-down") En línea con el estado emocional, las habilidades de autorregulación representan un pilar clave que incide directamente en la atención y el rendimiento académico. Estas habilidades permiten al estudiante gestionar su tiempo, establecer metas claras, planificar, monitorear su progreso y ajustar estrategias según los resultados. 

            .bg-color-1.p-4.mb-4(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto
                  img.img-a.img-t(src="@/assets/curso/temas/40.svg")
                .col-lg
                  p.mb-0 Aquellos alumnos que desarrollan una sólida autorregulación tienden a mantener la atención de forma sostenida, reduciendo distracciones y optimizando su desempeño académico.
            p(data-aos="fade-down") Es importante destacar que la autorregulación no es una capacidad innata, sino que puede ser enseñada y fortalecida mediante estrategias específicas. A continuación se presentan algunas de las más efectivas:                  
          .col-lg-4
            figure
              img.img-a.img-t(src="@/assets/curso/temas/41.png", data-aos="zoom-in") 

        div.row.justify-content-center.align-items-stretch.text-center
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/42.png" alt="" style="width: 90px")
              h5.mb-2.text-center Fijación de metas 
              p.mb-0 Ayuda a enfocar la atención hacia objetivos concretos y medibles, lo que orienta el esfuerzo del estudiante.

          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/43.png" alt="" style="width: 90px")
              h5.mb-2.text-center Auto-monitoreo
              p.mb-0 Permite evaluar el propio desempeño y realizar ajustes, fortaleciendo la conciencia del proceso de estudio.

          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/44.png" alt="" style="width: 90px")
              h5.mb-2.text-center Reflexión crítica
              p.mb-0 Estimula el análisis sobre el propio aprendizaje, identifica áreas de mejora y consolida aprendizajes previos. 

    .bg-full-width.bg-color-7.mb-5(data-aos="fade-up") 
      .px-4.px-md-5.py-2
        p.mb-0 Cuando los estudiantes se sienten en control de su proceso de aprendizaje, no solo mejoran su atención, sino que también desarrollan un aprendizaje más profundo y significativo. Por ello, fomentar la autorregulación debe ser una prioridad en la práctica educativa, ya que prepara al alumno para los desafíos tanto académicos como personales. 

    .bg-full-width-2.bg-fondo-4.py-4
      .px-4.px-md-5
        .row.mb-5       
          .col-lg-9.mb-3.mb-lg-0 
            h3(data-aos="fade-down") Características individuales
            p(data-aos="fade-down").mb-5 Las características individuales de cada estudiante, también influyen notablemente en su capacidad de atención. Aspectos como el estilo de aprendizaje, las preferencias sensoriales y el nivel de energía física, juegan un papel importante en cómo cada alumno procesa la información.  
            .bg-color-4.p-4.mb-4(data-aos="fade-left")
              p.mb-0 Por ejemplo, algunos estudiantes se benefician de estímulos visuales (gráficos, esquemas, videos), mientras que otros prefieren estímulos auditivos (explicaciones orales, discusiones) o kinestésicos (aprendizaje práctico y experimental). Reconocer estas diferencias y ofrecer variedad de recursos didácticos, permite una mejor adaptación a las necesidades de atención de cada estudiante.
          .col-lg-3
            figure
              img.img-a.img-t(src="@/assets/curso/temas/45.png", data-aos="zoom-in")      

    .bg-full-width.bg-color-5.text-white.mb-5(data-aos="fade-up") 
      .px-4.px-md-5.py-2
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/46.svg")
          .col-lg
            p.mb-0 Asimismo, el estado físico afecta la concentración. Factores como la falta de sueño, una alimentación deficiente o la inactividad física pueden deteriorar la capacidad de atención. Por lo tanto, adoptar un estilo de vida saludable, con sueño reparador, dieta equilibrada y ejercicio regular, es clave para un rendimiento cognitivo óptimo.

    .row.mb-5 
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/47.png", data-aos="zoom-in")              

      .col-lg-8.mb-3.mb-lg-0
        p(data-aos="fade-down") La atención académica, como elemento central del aprendizaje, se ve influenciada por diversos factores dependientes del propio estudiante. Entre los más relevantes se encuentran:

        .bg-color-8.p-3(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-2
              p.mb-0 La motivación (especialmente la intrínseca).
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-2
              p.mb-0 El estado emocional y la estabilidad afectiva.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-2
              p.mb-0 Las habilidades de autorregulación.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right.color-2
              p.mb-0 Las características individuales como el estilo de aprendizaje o el estado físico.
        .bg-color-1.p-3(data-aos="fade-right") 
          p.mb-0 Dado este panorama, las instituciones educativas deben adoptar un enfoque integral que considere estos aspectos al diseñar entornos de enseñanza-aprendizaje. Implementar metodologías flexibles, ofrecer apoyo emocional, fomentar la autorregulación y promover hábitos saludables contribuirá a mejorar la atención y, en consecuencia, el rendimiento académico de los estudiantes. 

    .bg-full-width.bg-color-3.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center 
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/48.png', alt='')                  
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Factores externos que influyen emocionalmente en el proceso de aprendizaje
            p.mb-4(data-aos="fade-right") Se invita a leer el documento #[b Factores externos que influyen emocionalmente en el proceso de aprendizaje], donde se aborda cómo diferentes elementos del entorno, influyen en la dimensión emocional del aprendizaje estudiantil. 
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Factores externos que influyen emocionalmente en el proceso de aprendizaje 


    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/164648" target="_blank" rel="noopener noreferrer") Hoyos Botero, C., Cadavid Zapata, A. & Echeverry, M. I. (2018). Bullying o acoso escolar: abordaje psicojurídico. Ediciones Unaula. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/6928?page=1" target="_blank" rel="noopener noreferrer") Bañuelos Márquez, A. M. (2006). Motivación escolar: estudio de variables afectivas. Red Perfiles Educativos. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/63228?page=6" target="_blank" rel="noopener noreferrer") Romero Vela, M. J. (2010). Familia y escuela. Wanceulen Editorial. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/41169?page=8" target="_blank" rel="noopener noreferrer") Zubillaga Rodríguez, A. C. & Zavala Ojeda, M. A. (2017). Estrategias de enseñanza para la promoción de aprendizajes significativos. Editorial Digital UNID.                                 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://humanas.blog.scielo.org/es/2024/11/29/redes-de-apoyo-emocional-y-familiar-universitarios/" target="_blank" rel="noopener noreferrer") Morales, R. E. (2024) Las redes de apoyo emocional y familiar son vitales para la adaptación social de los estudiantes universitarios. Scielo en Perspectiva.   
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.unicef.es/blog/educacion/acoso-escolar" target="_blank" rel="noopener noreferrer") Lopez de Turiso Sánchez, A. (2024). Causas y consecuencias del bullying o acoso escolar. Unicef.                                           


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/lOzlXCtlvfk?si=BVg6e6wMLSGrb-kS" target="_blank" rel="noopener noreferrer") COIE UNED. (2020).  Motivación al estudio. Emoción vs. Estado de ánimo.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/EHdYuRNwxhE?si=HuCyTNBnlGy0XDZ3" target="_blank" rel="noopener noreferrer") SM365 Salud. (2024).  Bullying: Definición, historia y estadísticas impactantes.              

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Fundamentos de psicología',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Qué aspecto es fundamental para que el aprendizaje sea efectivo según el texto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La cantidad de información que se transmite.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'La preparación para aprender.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'La duración de las clases.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'La tecnología utilizada en el aula.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: 'La motivación intrínseca se refiere a:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aprender por recompensas externas.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'El deseo de aprender por el placer que esto implica.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'La presión de los padres para obtener buenas calificaciones.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'La competencia con otros estudiantes.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de las siguientes estrategias se menciona como útil para desarrollar la inteligencia emocional en docentes?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Uso de tecnología avanzada en el aula.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Incorporación de técnicas de mindfulness.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Aplicación de exámenes estandarizados.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Fomento de la competencia entre estudiantes.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'El aprendizaje cooperativo se basa en:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La competencia entre estudiantes.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'El trabajo individual en tareas asignadas.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'La colaboración entre estudiantes para alcanzar un objetivo común.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'John B. Watson',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto: 'Un ambiente de aula bien estructurado se refiere a:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Un lugar lleno de tecnología.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Un espacio donde se establecen normas claras y se mantienen rutinas.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Un aula donde los estudiantes pueden hacer lo que quieran.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Explorar la historia de la humanidad.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
