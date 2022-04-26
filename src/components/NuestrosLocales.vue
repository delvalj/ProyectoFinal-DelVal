<template>
  <div class="bg-light">
    <h1 class="pseudoTitulo"></h1>

    <div class="container fuenteLocales">
      <b-card-group class="m-1 p-4 ">
        <b-card class="shadow" title="Restaurante 1" img-src="https://picsum.photos/900/400/?image=163" img-alt="Image" img-top>
          <b-card-text class="fst-italic ">
            Es un típico restaurante steak-house americano, situado en pleno corazón del barrio de Palermo en la ciudad
            de Buenos Aires. Un sitio ideal para compartir una deliciosa comida, celebrar y degustar una amplia variedad
            de exquisitos platos.
          </b-card-text>
          <b-card-text class="border fw-bold"> Av. Corrientes 1220
            Teléfono: (54 11) 4382-1354
          </b-card-text>
          <template #footer>
            <small class="text-muted">Buenos Aires</small>
          </template>
        </b-card>

        <b-card class="shadow" title="Restaurante 2" img-src="https://picsum.photos/900/400/?image=195" img-alt="Image" img-top>
          <b-card-text class="fst-italic">
            Acorde con las últimas tendencias mundiales en grandes centros de compras, La Barraca Mall conjuga un bello
            desarrollo arquitectónico con un entorno de arboledas, espacios verdes y espejos de agua.
          </b-card-text>
          <b-card-text class="border fw-bold"> La Barraca Mall, Las Cañas 1833, Guaymallén, Mendoza,
            Local 2.
            Teléfono: (54 261) 457 8475
          </b-card-text>
          <template #footer>
            <small class="text-muted">Mendoza</small>
          </template>
        </b-card>

        <b-card class="shadow" title="Restaurante 3" img-src="https://picsum.photos/900/400/?image=192" img-alt="Image" img-top>
          <b-card-text class="fst-italic">
            Se encuentra en la ciudad de Córdoba, en el barrio Cerro de las Rosas, donde dispone de un amplio salón, con
            muy buena luminosidad, y un carácter intenso. Ideal para los que desean comer al aire libre.
          </b-card-text>
          <b-card-text class="border fw-bold">
            Av. Rafael Nuñez 3803, Bº Cerro Las Rosas.
            Teléfono: (0351) 482 5718 / (0351) 481 1975
          </b-card-text>
          <template #footer>
            <small class="text-muted">Córdoba</small>
          </template>
        </b-card>
      </b-card-group>
    </div>


<!--    <hr class="mt-5">-->

  </div>
</template>

<script>
export default {
  name: "NuestrosLocales"
}
</script>

<style scoped>
.pseudoTitulo {
  margin-top: 10px;
  padding: 10px;
  border: 4px dashed #d0d0d0;
  font-weight: 600;

}

.pseudoTitulo::before {
  content: 'Nuestros ';
  color: #020024;
}

.pseudoTitulo::after {
  content: 'Locales';
  color: #d0d0d0;

}

</style>
