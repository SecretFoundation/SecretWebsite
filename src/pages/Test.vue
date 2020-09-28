<template>
  <base-layout>
      <simple-hero>
        <template #cover>
          <g-image src="../assets/dots.jpg"></g-image>
        </template>
        <h1><g-image src="../assets/flare-logo.png" width="70px" height="70px"></g-image> Flare</h1>
        <h2>Sistema de diseño</h2>
        <p>Flare es una filosofía de diseño digital, una librería que la implementa y una plantilla de inicio con buenas prácticas incluídas para permitir la creación
          instantanea de aplicaciones web de cualquier tipo.</p>
        <g-link to="/">Servicios</g-link>
      </simple-hero>
      <slim-column>
        <h1>Flare</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend posuere orci, quis suscipit ligula.
          Sed gravida, sem eu egestas fringilla, tellus lacus maximus orci, ac finibus nibh tellus in risus.
          Pellentesque sit amet felis sagittis arcu hendrerit suscipit id vel orci. Mauris efficitur gravida pharetra.
          Aliquam neque purus, mattis et massa et, vestibulum finibus mi. Vestibulum facilisis erat sed facilisis suscipit.
          Nam tempor, nisi non laoreet commodo, quam quam posuere orci, vulputate auctor felis nisi nec arcu. Morbi in aliquam sapien.</p>
        <h2>Título</h2>
        <h3>Subtítulo</h3>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris leo mauris,
          iaculis vitae varius non, eleifend id sem. Donec in dapibus augue. Sed commodo nunc magna, quis congue leo mollis nec.
          Nam ultricies sem ut ipsum rutrum fermentum. Aliquam elementum vehicula purus, id dapibus libero. Sed bibendum blandit pretium.
          Integer non ex suscipit, pulvinar sapien nec, luctus augue. Nam nec sapien sit amet tortor egestas ullamcorper.
          Etiam hendrerit finibus metus, ac sagittis lacus consectetur eget. Quisque tincidunt hendrerit ex.
          Curabitur odio odio, tincidunt in odio id, gravida pulvinar urna.</p>
        <h3>Subtítulo</h3>
        <p>Nulla ut odsio a est ornare auctor. Praesent efficitur, sem vitae maximus iaculis, justo ipsum hendrerit augue,
          non accumsan risus sapien quis lacus. Sed elementum iaculis tortor vel suscipit. Morbi nisi risus, efficitur eget justo vitae,
          suscipit tincidunt nunc. Integer ultrices, est a fringilla pellentesque, leo metus tristique metus, quis dignissim nunc tellus in leo.
          Integer dapibus ligula vel ex malesuada, vel aliquet purus placerat. Pellentesque tempus mattis lacus eget malesuada.
          Cras rutrum elit felis. Aenean consectetur ligula libero, in suscipit nunc ullamcorper et. Nunc id velit in risus aliquet facilisis.</p>
      </slim-column>
  </base-layout>
</template>

<script>
  import BaseLayout from '../layouts/BaseLayout';
  export default {
    name: 'Index',
    components: { BaseLayout },
  };
</script>

<style lang="scss" scoped>
</style>
