<template>
  <div>
    <h1>Paper Calculator</h1>
    <table>
      <tr>
        <td><p>paper type</p></td>
        <td>
          <select @change="onChange($event)">
            <option value="default">custom type</option>
            <option v-for="p in PriceList" v-bind:key="p.paperType">
              {{ p.paperType }}
            </option>
          </select>
        </td>
      </tr>
      <tr>
        <td><p>price per kg</p></td>
        <td><input type="number" v-model.number="mPricePerKg" /></td>
        <p>IDR</p>
      </tr>
      <tr>
        <td><p>grammature</p></td>
        <td><input type="number" v-model.number="mGrammature" /></td>
        <p>gsm</p>
      </tr>
      <tr>
        <td><p>width</p></td>
        <td><input type="number" v-model.number="mWidth" /></td>
        <p>mm</p>
      </tr>
      <tr>
        <td><p>length</p></td>
        <td><input type="number" v-model.number="mLength" /></td>
        <p>mm</p>
      </tr>
    </table>

    <button @click="runCalculation">calculate</button>

    <p id="result">price per sheer : IDR {{ result }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PriceModel from "@/models/price-model";

@Component
export default class Calculator extends Vue {
  get PriceList(): PriceModel[] {
    return this.$store.state.price;
  }
  result = 0;
  mGrammature = 0;
  mWidth = 0;
  mLength = 0;
  mPricePerKg = 0;
  runCalculation(): void {
    this.result =
      (this.mGrammature * this.mWidth * this.mLength * this.mPricePerKg) /
      Math.pow(10, 9);
  }
  onChange(event: Event): void {
    const paperType = (event.target as HTMLInputElement).value;
    if (paperType === "default") {
      this.mPricePerKg = 0;
      return;
    }
    let priceList = Array<PriceModel>();
    priceList = this.$store.state.price;
    priceList.forEach(p => {
      if (p.paperType == paperType) {
        this.mPricePerKg = p.pricePerKg;
      }
    });
  }
}
</script>
