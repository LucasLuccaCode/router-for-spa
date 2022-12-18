<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/"> Tarefas </router-link>
        </li>
        <li>
          <router-link to="/users"> Usuários </router-link>
        </li>
        <li>
          <router-link to="/comments"> Comentários </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
</style>