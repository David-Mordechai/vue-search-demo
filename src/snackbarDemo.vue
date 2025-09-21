<template>
  <div class="p-4">
    <v-btn @click="show = true">Show Snackbar</v-btn>

    <v-snackbar
      v-model="show"
      timeout="-1"
      location="bottom">
      <div class="snackbar-list">
        <v-list density="compact">
          <v-list-item v-for="(msg, i) in messages" :key="i" class="error">
            <v-list-item-title  class="message-title text-error">{{ msg }}</v-list-item-title>

            <template #append>
              <v-btn class="text-error"  variant="outlined" @click="removeMessage(i)">
                Ok
              </v-btn>
            </template>
          </v-list-item>
        </v-list>
      </div>
    </v-snackbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)
const messages = ref<string[]>([])

function removeMessage(index: number) {
  messages.value.splice(index, 1)
  if (!messages.value.length) show.value = false
}
</script>

<style scoped>
.snackbar-list {
  max-height: 300px;
  overflow-y: auto;
  display: block; 
}

.snackbar-list .message-title {
  white-space: normal;
  word-break: break-word;
  overflow-wrap: anywhere;
}

.snackbar-list .v-list-item {
  min-height: 44px;
}

:deep(.v-snackbar__content) {
  padding: 0 !important;
  width: 1200px; 
}

:deep(.v-snackbar__wrapper) {
  border-radius: 0!important;;
}
</style>
