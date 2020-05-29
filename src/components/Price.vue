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

    <button>save</button>
  </div>
</template>
