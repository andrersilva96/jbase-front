<template>
  <div>
    <div class="fullscreen">
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <div id="typed" class="brand"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="container" id="description">
      <div class="row">

        <div class="col-lg-4 text-white text-center">
            <i class="fas fa-code fa-4x"></i>
            <p>It abstracts much of the Database and API to be able to learn new frontend or development projects.</p>
        </div>

        <div class="col-lg-4 text-white text-center">
          <i class="fas fa-database fa-4x"></i>
          <p>You already have your tables with CRUD to develop your projects for FREE.</p>
        </div>

        <div class="col-lg-4 text-white text-center">
            <i class="fas fa-book fa-4x"></i>
            <p>Documentation that follows good programming practices to encourage good use and easy understanding.</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    this.typedWriter()
  },
  data() {
    return {
      typed: {
        element: 'typed',
        i: 0,
        pos: 0,
        texts: [
          { el: 'h1', txt: '</JBase>' },
          { el: 'h4', txt: 'A FREE WEB DATABASE AND API FOR DEVELOPERS' }
        ]
      }
    };
  },
  methods: {
    typedWriter() {
      if (this.typed.pos == this.typed.texts.length) return

      if (this.typed.texts[this.typed.pos].el) {
          var e = document.createElement(this.typed.texts[this.typed.pos].el)
          document.getElementById('typed').appendChild(e)
          this.typed.texts[this.typed.pos].el = null
          e.classList.add('typewriter')
      }

      if (this.typed.pos < this.typed.texts.length) {
          if (this.typed.i < this.typed.texts[this.typed.pos].txt.length) {
              document.getElementById('typed').lastElementChild.innerHTML += this.typed.texts[this.typed.pos].txt.charAt(this.typed.i)
              this.typed.i++
              return setTimeout(this.typedWriter, 100)
          }

          if (this.typed.pos < (this.typed.texts.length - 1)) {
            document.getElementById('typed').lastElementChild.classList.remove('typewriter')
          }
          this.typed.pos++
          this.typed.i = 0
          return setTimeout(this.typedWriter, 100)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.fullscreen {
  height: 100vh;
  min-height: 300px;
  background-size: cover;
  background-position: center center;
  position: relative;
}
.brand {
  margin-top: 25vh;
  color: #00ED83;
  text-align: center;
}
.brand h1 {
  font-size: 4.5em;
  font-weight: 800;
}
#description .row {
  padding-bottom: 70px;
}
#description i {
  color: #00ED83;
  margin: 40px 0;
}

/* Typed Start */
.typewriter {
    display: inline;
    border-right: .15em solid #00ED83;
    animation:
        typing 4s steps(30, end),
        blink-caret .5s step-end infinite;
}
@keyframes blink-caret {
    from, to {
        border-color: transparent
    }

    50% {
        border-color: #00ED83
    }
}
/* Typed End */

@media (max-width: 768px) {
  .brand h1 {
    font-size: 2.5em;
  }
}
</style>
