import './scss/index.scss'

document.querySelector('#app').innerHTML = `
	<div class="nav">
		<button onclick="document.location='/pages/chapter2.html'" class="pushable">
		  <span class="front">
		    Chapter 2
		  </span>
		</button>
		<button onclick="document.location='/pages/chapter3.html'" class="pushable">
		  <span class="front">
		    Chapter 3
		  </span>
		</button>
		<button onclick="document.location='/pages/chapter4.html'" class="pushable">
		  <span class="front">
		    Chapter 4
		  </span>
		</button>
		<button onclick="document.location='/pages/chapter5.html'" class="pushable">
		  <span class="front">
		    Chapter 5
		  </span>
		</button>
		<button onclick="document.location='/pages/chapter6.html'" class="pushable">
		  <span class="front">
		    Chapter 6
		  </span>
		</button>
		<button onclick="document.location='/pages/chapter7.html'" class="pushable">
		  <span class="front">
		    Chapter 7
		  </span>
		</button>
		<button onclick="document.location='/pages/chapter8.html'" class="pushable">
		  <span class="front">
		    Chapter 8
		  </span>
		</button>
	</div>
  <div class="container">
    <div class="box">
        <div class="title">
            <span class="block"></span>
            <h1>Yeddah Quijano<span></span></h1>
        </div>

        <div class="role">
            <div class="block"></div>
            <p>Student</p>
        </div>

    </div>
</div>

`
