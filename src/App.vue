<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-black text-white">
      <q-toolbar class="justify-center">
        <q-toolbar-title class="flex items-center">
          <q-avatar>
            <img :src="logo" alt="Logo" />
          </q-avatar>
          <div class="title-text">UAS PRAKTIKUM PBK</div>
        </q-toolbar-title>

        <q-btn-dropdown flat icon="menu" class="text-white">
          <q-list>
            <q-item clickable tag="router-link" to="/tugas7">
              <q-item-section>
                <q-item-label>Weather Widget (Tugas 7)</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable tag="router-link" to="/tugas1">
              <q-item-section>
                <q-item-label>Portofolio (Tugas 1)</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable tag="router-link" to="/tugas2">
              <q-item-section>
                <q-item-label>Basic Syntax (Tugas 2)</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable tag="router-link" to="/tugas3">
              <q-item-section>
                <q-item-label>Advance Syntax (Tugas 3)</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable tag="router-link" to="/tugas4">
              <q-item-section>
                <q-item-label>Parent and Child Component (Tugas 4)</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable tag="router-link" to="/tugas5">
              <q-item-section>
                <q-item-label>Landing Page (Tugas 5)</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable tag="router-link" to="/tugas6">
              <q-item-section>
                <q-item-label>Integrasi API (Tugas 6)</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <router-view></router-view>

    <q-footer elevated class="bg-black text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar></q-avatar>
        </q-toolbar-title>
        <div class="text-center q-ml-auto">
          <div>Rifa Alya Shadrina-223510640</div>
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import logoImage from './assets/Logo.png';

export default {
  setup() {
    const router = useRouter();
    
    const logo = ref(logoImage);
    const dropdownLinks = ref([
      { label: 'Tugas 1', path: '/tugas1' },
      { label: 'Tugas 2', path: '/tugas2' },
      { label: 'Tugas 3', path: '/tugas3' },
      { label: 'Tugas 4', path: '/tugas4' },
      { label: 'Tugas 5', path: '/tugas5' },
      { label: 'Tugas 6', path: '/tugas6' },
      { label: 'Tugas 7', path: '/tugas7'},
    ]);

    const navigate = (path) => {
      router.push(path);
    };

    return {
      logo,
      dropdownLinks,
      navigate,
    };
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}

.no-scroll {
  overflow: hidden;
}
.text-center {
  text-align: center;
}
.q-page-container {
  overflow: hidden;
}
.q-toolbar-title {
  flex: 1; 
}
.title-text {
  margin-left: 10px;
}
.justify-center {
  justify-content: center;
}
</style>
