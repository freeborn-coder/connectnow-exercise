<template>
    <section class="contact">
        <h4>GET IN TOUCH</h4>
        <p>Trysall transform fur sea Legs scallywag jack ketch chandler mizzenmast reef sails
            skysail. Shiver me timebers bucko belaying pin Sea Legs boom gumwalls booty jury mast fare.
        </p>
        <ContactForm />
    </section>
</template>

<script>
import ContactForm from '@/components/contact-form'
import Component from 'vue-class-component'
import Vue from 'vue'

@Component({
    components:{ ContactForm }
})
export default class Contact extends Vue {}
</script>

<style lang="stylus" scoped>

</style>
