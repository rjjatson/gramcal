<template>
  <div>
    <h1>Paper Calculator</h1>
    <table>
      <tr>
        <td><p>grammature</p></td>
        <td><input type="number" v-model.number="m_grammature" /></td>
        <p>gsm</p>
      </tr>
      <tr>
        <td><p>width</p></td>
        <td><input type="number" v-model.number="m_width" /></td>
        <p>mm</p>
      </tr>
      <tr>
        <td><p>length</p></td>
        <td><input type="number" v-model.number="m_length" /></td>
        <p>mm</p>
      </tr>
      <tr>
        <td><p>price per Kg</p></td>
        <td><input type="number" v-model.number="m_price_per_kg" /></td>
        <p>IDR</p>
      </tr>
    </table>

    <button @click="runCalculation">calculate</button>

    <p id="result">price per sheer : IDR {{ result }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Calculator extends Vue {
  result = 0;
  m_grammature = 0;
  m_width = 0;
  m_length = 0;
  m_price_per_kg = 0;
  runCalculation(): void {
    this.result =
      (this.m_grammature * this.m_width * this.m_length * this.m_price_per_kg) /
      Math.pow(10, 9);
  }
}
</script>
