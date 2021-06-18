<template>
  <div>
  <div class="confirm">
    <div class="products-list">
      <h1>Cart</h1>
      <ul>
        <li v-for="item in cart" :key="item.product.id">
          <CartPosition :item="item"/>
        </li>
      </ul>
      <h2>Total: ${{ sum }}</h2>
    </div>
    <section>
      <h2>Address</h2>
      <h3>Name:</h3>
      <p>{{order.name}}</p>
      <h3>Address:</h3>
      <p>{{order.address}}</p>
      <h3 v-if="order.zip">ZIP or postal code (optional)</h3>
      <p v-if="order.zip">{{order.zip}}</p>
      <h3>Telephone</h3>
      <p>{{order.phone}}</p>
      <h3>Delivery</h3>
      <p>{{order.delivery}}</p>
    </section>
    <section>
      <h2>Payment form</h2>
      <h3>Card number</h3>
      <p>{{order.cardNumber}}</p>
      <h3>Expiry date</h3>
      <p>{{order.expDay}}</p>
      <h3>Security code</h3>
      <p>{{order.sequrityCode}}</p>
    </section>
  </div>
    <button @click="onConfirm">Confirm</button>
    <button @click="onCancel">Cancel</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ICartPosition, IOrder } from '@/common/interfaces';
import CartPosition from '@/components/CartPosition.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    CartPosition,
  },
  methods: {
    onConfirm() {
      this.$store.commit('CLEAR_CART');
      this.$store.commit('CLEAR_ORDER');
      this.$router.push({ path: '/' });
    },
    onCancel() {
      this.$store.commit('CLEAR_CART');
      this.$store.commit('CLEAR_ORDER');
      this.$router.push({ path: '/' });
    },
  },
  computed: {
    cart(): ICartPosition[] {
      return this.$store.getters.cart;
    },
    sum(): number {
      return this.cart.reduce((sum, item) => sum + item.num * item.product.price, 0);
    },
    order(): IOrder {
      return this.$store.getters.order;
    },
  },
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/_main';

.confirm {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

h1 {
  font-size: 2em;
  color: $fg2;
  text-shadow: 2px 2px 4px $shadow;
}

h2 {
  font-size: 1.5em;
  color: $fg1;
  text-shadow: 1px 1px 1px $shadow;
}

ul {
  list-style: none;
}

section {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

</style>
