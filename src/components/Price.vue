<template>
  <div>
    <h1>Paper Price</h1>
    <table>
      <tr>
        <td><p>Paper Type</p></td>
        <td><input type="string" v-model="m_paper_type" /></td>
      </tr>
      <tr>
        <td><p>Price per Kg</p></td>
        <td><input type="number" v-model.number="m_price_per_kg" /></td>
      </tr>
    </table>

    <button @click="save">save</button>
    <button @click="deleteAll">delete all</button>

    <table border="1">
      <thead>
        <th>Paper Type</th>
        <th>Price per Kg</th>
      </thead>
      <tbody>
        <tr v-for="p in priceList" v-bind:key="p.paperType">
          <td>{{ p.paperType }}</td>
          <td>{{ p.pricePerKg }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PriceModel from "@/models/price-model";

@Component
export default class Price extends Vue {
  priceList = Array<PriceModel>();

  public m_paper_type = "";
  public m_price_per_kg = 0;

  save(): void {
    this.priceList.push({
      paperType: this.m_paper_type,
      pricePerKg: this.m_price_per_kg
    });
  }

  deleteAll(): void {
    this.priceList = [];
  }
}
</script>
