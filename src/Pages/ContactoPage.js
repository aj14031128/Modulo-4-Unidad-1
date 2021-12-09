import '../Styles/Components/Pages/ContactoPage.css'


const ContactoPage=(props)=>{
    return(
<div>
  <h1>CONTACTO</h1>
    <div className="CONTACTO1">
      <div className="CONTACTO2">
        <p>FORMULARIO DE CONTACTO</p>
          <form action="" class="formulario">
          <p>
            <label for="">Nombre</label>
            <input type="text"/>
          </p>
          <p>
            <label for="">Email</label>
            <input type="email"/>
          </p>
          <p>
            <label for="">Telefono</label>
            <input type="text"/>
          </p>
          <p>
            <label for="">Comentario</label>
            <textarea name="" id="comentario" cols="30" rows="10"></textarea>
          </p>
            <p className="acciones"><input type="submit" value="Enviar"/></p>
          </form>
      </div>
      <div className="CONTACTO3">
        <p>OTROS MEDIOS DE CONTACTO</p>
        <p>Puede comunicarse con nosotros, a través de:</p>
        <ul>
          <li>Telefono 1157588779</li>
              <li>email jaltamirano@efectum.com.ar</li>
              <li>Linkedin: https://www.linkedin.com/in/efectum-proyectos-y-energ%C3%ADa-66bb571a0/</li>
            </ul>
      </div>
    </div>  
</div>
        );
    }
    export default ContactoPage;