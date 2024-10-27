<template>
  <div>
    <div class="racers-info">
      <table>
        <thead>
        <tr>
          <th scope="col">_</th>
          <th scope="col">Rider</th>
          <th scope="col">222222</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <th>Chris Chris</th>
          <td>250 m</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <th>Dennis Chris</th>
          <td>124 m</td>
        </tr>
        </tbody>
      </table>
    </div>
    <header>
      <div class="race-time" id="race-time">22:22:42</div>
    </header>
    <main>
      <canvas id="canvas" width="1200" height="240"></canvas>
    </main>
    <footer>
      <button class="btn" id="btn-start">Start</button>
      <div id="race-indicator" class="indicator"></div>
    </footer>
  </div>
</template>

<script>
</script>

<style>
header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background-color: antiquewhite; */
}

.navbar_controls {
  display: flex;
  flex-direction: row;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
}

footer {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  width: 100%;
}

canvas {
  position: absolute;
  top: 420px;
  background-color: aliceblue;
}

</style>
