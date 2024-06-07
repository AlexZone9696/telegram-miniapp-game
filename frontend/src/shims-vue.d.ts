import { ComponentCustomProperties } from 'vue'
import { MyFilters } from '@/filters' // предполагается, что у вас есть файл с фильтрами

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $filters: MyFilters
  }
}