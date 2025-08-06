<template>
  <base-card>
    <template #header>
      <h2>Available Badges</h2>
    </template>
    <template #default>
      <ul>
        <li>
          <base-bagde type="admin" caption="ADMIN"></base-bagde>
        </li>
        <li>
          <base-bagde type="author" caption="AUTHOR"></base-bagde>
        </li>
      </ul>
    </template>
  </base-card>
</template>

<style>
section h2 {
  color: #3a3a3a;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}
</style>