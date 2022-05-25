<template>
  <div class="container">
    <div class="header clearfix">
      <nav>
        <ul class="nav nav-pills float-right">
          <li class="nav-item">
            <router-link class="nav-link active" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/home">Othe pages</router-link>
          </li>
        </ul>
      </nav>
      <h3 class="text-muted"><router-link to="/">Awesome App</router-link></h3>
    </div>

    <div class="jumbotron my-5">
      <h1 class="display-3">Hi, there!!</h1>
      <p class="lead">
        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce
        dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
        fermentum massa justo sit amet risus.
      </p>
    </div>

    <footer class="footer">
      <p>Internet Programming ©<a href="#">GIC</a> 2022</p>
    </footer>
  </div>
</template>
<style>
.footer {
  text-align: center;
}
</style>
