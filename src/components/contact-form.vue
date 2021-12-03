<template>
    <section class="contact">
        
        <h4>GET IN TOUCH</h4>
        <p>Trysall transform fur sea Legs scallywag jack ketch chandler mizzenmast reef sails
            skysail. Shiver me timebers bucko belaying pin Sea Legs boom gumwalls booty jury mast fare.
        </p>

        <div class="form-container">
            <form action="">
                <div>
                    <p class="form-title">Contact Form</p>
                </div>

                <div class="form-grid">
                    <div>
                        <p>
                            <label for="name">Name*</label>
                        </p>
                        <input type="text">
                    </div>
                    <div>
                        <p>
                            <label for="name">Email Address*</label>
                        </p>
                        <input type="text">
                    </div>
                </div>

                <div>
                    <p><label for="message">Message*</label></p>
                    <textarea name="" id="" cols="30" rows="3"></textarea>
                </div>
                <div class="text-right">
                    <button>send</button>
                </div>

            </form>
        </div>
        
    </section>
</template>

<script lang="ts">

import Vue from 'vue'
import Component from 'vue-class-component';

@Component
export default class ContactForm extends Vue {}

</script>

<style lang="stylus" scoped>

</style>
