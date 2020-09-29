<template>
  <div class="hideMarker">
	<!-- <span>  -->
    <svg class="upArrow" width="14px" height="14px" viewBox="0 0 255 255" fill="#000">
      <g id="arrow-drop-up">
        <polygon points="0,191.25 127.5,63.75 255,191.25" />
      </g>
    </svg>
	<p class="markerText">
    {{ showText }} </p>
	<!-- </span> -->
  </div>
</template>

<script>
export default {
	name: 'Hint',
	props: {hintText:{type: String, default:"Click"}},
	data: function(){
		return {
			showText: this.hintText
		}
	},

}
</script>

<style scope>
.markerText {
	writing-mode: vertical-rl;
	text-orientation: mixed;
	opacity: 0.72;
}

.upArrow {
	padding-left: 2px;
	-moz-animation: blinkAnimation 1.5s ease-in-out infinite;
	-webkit-animation: blinkAnimation 1.5s ease-in-out infinite;
	-o-animation: blinkAnimation 1.5s ease-in-out infinite;
	animation: blinkAnimation 1.5s ease-in-out infinite;
}

@keyframes blinkAnimation {
  50% {
    opacity: 0;
  }
}

@-webkit-keyframes blinkAnimation {
  50% {
    opacity: 0;
  }
}

</style>