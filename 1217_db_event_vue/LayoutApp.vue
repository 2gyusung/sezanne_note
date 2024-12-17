<template>
    <Header />
    <Container />
    <Footer />
</template>

<script>
import Header from './headers/Header';
import Container from './container/Container.vue';
import Footer from './footer/Footer.vue';
export default {
  components : {
    Header,
    Container,
    Footer
  }

}
</script>
