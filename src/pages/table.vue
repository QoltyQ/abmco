<template>
  <div class="q-pa-md">
    <q-option-group
      v-model="separator"
      inline
      class="q-mb-md"
      :options="separatorOptions"
    />

    <q-markup-table :separator="separator" flat bordered>
      <thead>
        <tr>
          <th class="text-left">Student full name</th>
          <th class="text-right">Geography</th>
          <th class="text-right">Mathematics</th>
          <th class="text-right">Front-end</th>
          <th class="text-right">Back-end</th>
          <th class="text-right">Data Bases</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-left">Azamat Jamanov</td>
          <td class="text-right">100</td>
          <td class="text-right">100</td>
          <td class="text-right">100</td>
          <td class="text-right">100</td>
          <td class="text-right">100</td>
        </tr>
        <tr>
          <td class="text-left">Asqar Jumekov</td>
          <td class="text-right">100</td>
          <td class="text-right">100</td>
          <td class="text-right">100</td>
          <td class="text-right">100</td>
          <td class="text-right">100</td>
        </tr>
        <tr>
          <td class="text-left">Askhat Aitimov</td>
          <td class="text-right">100</td>
          <td class="text-right">100</td>
          <td class="text-right">100</td>
          <td class="text-right">100</td>
          <td class="text-right">100</td>
        </tr>
        <tr>
          <td class="text-left">Zanggar Yesbol</td>
          <td class="text-right">100</td>
          <td class="text-right">100</td>
          <td class="text-right">100</td>
          <td class="text-right">100</td>
          <td class="text-right">100</td>
        </tr>
        <tr>
          <td class="text-left">Quantay Kirmanov</td>
          <td class="text-right">100</td>
          <td class="text-right">100</td>
          <td class="text-right">100</td>
          <td class="text-right">100</td>
          <td class="text-right">100</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      separator: ref('vertical'),
      separatorOptions: [
        { label: 'Horizontal', value: 'horizontal' },
        { label: 'Vertical', value: 'vertical' },
        { label: 'Cell', value: 'cell' },
        { label: 'None', value: 'none' }
      ]
    }
  }
}
</script>
