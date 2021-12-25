<template>
    <!-- <h1>Hi</h1>
<p style="color:skyblue" id="content" class="first">Hello world</p>
<p>Happy to see you guys!!!</p> -->
<div class="plan-options">
	<div class="plan">
		<div class="plan-header">
			<h3 class="plan-heading">Intro</h3>
			<!--     <button class="plan-save"> Save $40</button> -->
		</div>
		<ul class="plan-feature">
			<li>Final 40/40</li>
			<li>Final 40/40</li>
			<li>Final 40/40</li>
			<li>Final 40/40</li>
			<li>Final 40/40</li>
		</ul>
		<p>$<span class="plan-amount">123</span> <span class="plan-duration">/month</span></p>
		<button class="plan-choose">Choose</button>
	</div>
	<div class="plan">
		<div class="plan-header">
			<h3 class="plan-heading">Base</h3>
			<!--     <button class="plan-save"> Save $40</button> -->
		</div>
		<ul class="plan-feature">
			<li>Final 40/40</li>
			<li>Final 40/40</li>
			<li>Final 40/40</li>
			<li>Final 40/40</li>
			<li>Final 40/40</li>
		</ul>
		<p>$<span class="plan-amount">123</span> <span class="plan-duration">/month</span></p>
		<button class="plan-choose">Choose</button>
	</div>
	<div class="plan">
		<div class="plan-header">
			<h3 class="plan-heading">Pro</h3>
			<button class="plan-save"> Save $40</button>
		</div>
		<ul class="plan-feature">
			<li>Final 40/40</li>
			<li>Final 40/40</li>
			<li>Final 40/40</li>
			<li>Final 40/40</li>
			<li>Final 40/40</li>
		</ul>
		<p>$<span class="plan-amount">123</span> <span class="plan-duration">/month</span></p>
		<button class="plan-choose"> Try 1 month</button>
	</div>
	<div class="plan">
		<div class="plan-header">
			<h3 class="plan-heading">Enterprise</h3>
			<!--     <button class="plan-save"> Save $40</button> -->
		</div>
		<ul class="plan-feature">
			<li>Final 40/40</li>
			<li>Final 40/40</li>
			<li>Final 40/40</li>
			<li>Final 40/40</li>
			<li>Final 40/40</li>
		</ul>
		<p>$<span class="plan-amount">123</span> <span class="plan-duration">/month</span></p>
		<button class="plan-choose"> Choose </button>
	</div>
</div>
</template>

<style scoped>
    /* p{
  color: pink;
} */
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

/* p {
  font-size: 25px;
  color: crimson;
} */

.first {
	color: orange;
	/* Overide    */
}
/* 
#content {
  color: green !important;
} */

/* !important (bootstrap) > iniline > id (unqiue) > class > elements > *  */
body {
	background: #f6f5fa;
	display: grid;
	place-items: center;
	height: 100vh;
    width: 100vh;
	  /* background: crimson; */
}

.plan {
	background: white;
	border-radius: 24px;
	padding: 24px;
	color: var(--q-secondary);
	font-family: "Inter", sans-serif;
	transition: all 0.2s;
}

.plan:hover {
	background: var(--q-secondary);
	color: #ffffff;
}

.plan-heading {
	font-size: 24px;
}

.plan-feature {
	list-style: none;
	padding: 0px;
}

/* :before, :hover, :after, @media, @import, @support */

.plan-feature li:before {
	content: "✓";
	/*   padding-right: 5px; */
	margin-right: 16px;
	/*   border: 3px solid black; */
}

.plan-feature li:last-child:before {
	/*   color: crimson; */
	content: "✖";
}

/* .plan-feature li:after{
  content: '*';
    color: red;
} */

.plan-feature li {
	margin-bottom: 16px;
	display: flex;
}

/* DRY - Dont Repeat Yourself*/
.plan-feature li:last-child {
	/*   color: crimson; */
	opacity: 0.3;
}

.plan-amount {
	font-size: 24px;
	font-weight: bold;
}

.plan-duration {
	opacity: 0.6;
}

.plan-choose {
	width: 100%;
	background: var(--q-primary);
	border-radius: 8px;
	border: none;
	color: white;
	font-size: 20px;
	padding: 12px;
	font-weight: bold;
}
/* .plan-feature li:nth-child(even){
  color: pink;
} */

.plan-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.plan-save {
	background: white;
	border: none;
	padding: 5px;
	border-radius: 4px;
	color: var(--q-primary);
	font-weight: bold;
}

.plan:first-child .plan-feature li {
	opacity: 0.3;
}

.plan:first-child .plan-feature li:first-child {
	opacity: 1;
}

.plan:first-child .plan-feature li:nth-child(n + 2):before {
	/*   color: crimson; */
	content: "✖";
}

/* .plan:nth-child(2) .plan-feature li:nth-child(3), .plan:nth-child(2) .plan-feature li:nth-child(4) {
  opacity: 0.3;
} */

/* DRY */
.plan:nth-child(2) .plan-feature li:nth-child(n + 3) {
	opacity: 0.3;
}

.plan:nth-child(4) .plan-feature li {
	opacity: 1;
}

.plan:nth-child(4) .plan-feature li:before {
	content: "✓";
}

.plan-options {
	display: grid;
	/*     grid-template-columns: 1fr 1fr 1fr 1fr; */
	grid-template-columns: 1fr;
	gap: 10px;
}
/*  cal */

/*  ipad */
@media (min-width: 440px) {
	.plan-options {
		grid-template-columns: 1fr 1fr;
	}
}

/* small laptop */
@media (min-width: 760px) {
	.plan-options {
		grid-template-columns: repeat(4, 1fr);
	}
	.plan:hover {
		/*      transform: translateY(-20px) translateX(10px);  */
		/*      transform: translate3d(10px, -20px) */
		transform: scale(1.1);
	}
}
.plan-options{
    margin: 70px;
}

</style>