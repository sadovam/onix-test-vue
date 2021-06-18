<template>
  <div class="cart">
    <div class="products-list">
      <h1>Cart</h1>
      <ul>
        <li v-for="item in cart" :key="item.product.id">
          <CartPosition :item="item"/>
        </li>
      </ul>
      <h2>Total: ${{ sum }}</h2>
    </div>
    <form @submit.prevent="onFormSubmit">
      <section>
      <h2>Address</h2>
        <label for="name">Name*</label>
        <input v-model="order.name" name="name" autocomplete="name"
          maxlength="100" pattern="[\p{L} \-\.]+" required>
        <label for="address">Address*</label>
        <textarea v-model="order.address" name="address" autocomplete="address"
          maxlength="300" required></textarea>
        <label for="postal-code">ZIP or postal code (optional)</label>
        <input v-model="order.zip" name="postal-code"
          autocomplete="postal-code" maxlength="20">
        <label for="tel">Telephone*</label>
        <input v-model="order.phone" name="tel" autocomplete="tel" type="tel"
          maxlength="30" pattern="[\d \-\+]+" enterkeyhint="done" required>
        <label for="delivery">Delivery*</label>
        <select v-model="order.delivery" name="delivery" required>
          <option value="AirPost">AirPost</option>
          <option value="Post">Post</option>
          <option value="Train">Train</option>
          <option value="Postmart">Postmart</option>
        </select>
      </section>
      <section>
        <h2>Payment form</h2>

        <label for="cc-number">Card number*</label>
        <input v-model="order.cardNumber" name="cc-number" autocomplete="cc-number"
        inputmode="numeric" pattern="[\d ]{10,30}" required>

        <label for="cc-exp">Expiry date*</label>
        <input v-model="order.expDay" name="cc-exp" autocomplete="cc-exp"
          placeholder="MM/YY" maxlength="5" required>
          <label for="cc-csc">Security code*</label>
        <input v-model="order.sequrityCode" name="cc-csc" autocomplete="cc-csc"
          inputmode="numeric" maxlength="3" required>
          <p>Back of card, last 3 digits</p>
      <button id="save-address">Submit</button>
      </section>
    </form>
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
    onFormSubmit() {
      this.$router.push({ path: '/confirm' });
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

.cart, form {
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
  padding: 0;
}

section {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

input, select, textarea {
  min-width: 250px;
  padding: 5px 10px;
  margin: 5px 10px;
}

textarea {
  height: 100px;
}

</style>
