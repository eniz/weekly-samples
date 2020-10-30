<template>
  <div class="hello">
    <h3>SpaceX Launches</h3>
    <ul>
      <li v-for="item in launches" :key="item.flight_number">
        Flight Number: <span>{{ item.flight_number }}</span>
        Mission Name: <span>{{ item.mission_name }}</span>
        Rocket: <span>{{ item.rocket.rocket_name }}</span>
        Details: <span>{{ item.details }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Launches',
  props: ['launches']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
