export const SearchCity = () => {
   return (
      <>
         <section>
            <header>
               <h1>WeatherApp</h1>
            </header>
            <input type="text" />
            <div>
               <h2>Cochabamba</h2>
               <p>Bolivia</p>
               //Aqui entra el svg de la nube
               <p>24°</p>
               <p>Parcialmente nublado</p>
               <div>
                  <article>
                     //SVG viento
                     <p>Viento</p>
                     <h4>13.3 km/h</h4>
                  </article>
                  <article>
                     //SVG Fecha
                     <p>Fecha</p>
                     <h4>4 ene</h4>
                  </article>
               </div>
            </div>
            <p>Buscador</p>
         </section>
         <section>
            <p>Pronosticos</p>
         </section>
      </>
   );
};
