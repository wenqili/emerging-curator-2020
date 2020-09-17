<template>
  <div ref="container" class="canvas" />
</template>

<script>
// import * as THREE from "three"
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import { TransformControls } from "three/examples/jsm/controls/TransformControls.js";

export default {
  name: "Canvas",
  // props:{
  //   theme: {
  //     type: String,
  //     default: "dark",
  //   },
  // },
  // computed: {
  //   cssProps() {
  //     console.log(this.theme)
  //     return {
  //       '--nav-bg-color': this.theme === "dark" ? "black" : "white",
  //     }
  //   }
  // }
  // mounted: function() {
  //   let container = this.$refs.container
  //   console.log(container)
    
  //   // SET AND ADD CAMERA
  //   this.camera = new THREE.PerspectiveCamera(
  //     30,
  //     window.innerWidth / window.innerHeight,
  //     1,
  //     10000
  //   )
  //   this.camera.position.set(1000, 50, 1500)

  //   // ADD SCENE
  //   this.scene = new THREE.Scene()
  //   this.scene.background = new THREE.Color( 0xcce0ff )
  //   // ADD LIGHT TO SCENE
  //   this.scene.add( new THREE.AmbientLight( 0x666666 ) )


  //   // RENDER IN PAGE
  //   this.renderer = new THREE.WebGLRenderer({ antialias: true })
  //   // this.renderer.setClearColor("#dbdbdb")
  //   this.renderer.setSize(container.clientWidth, container.clientHeight)
  //   // this.renderer.gammaFactor = 1.5
  //   // this.renderer.gammaOutput = true
  //   container.appendChild(this.renderer.domElement)

  //   // SET GRID HELPER
  //   const size = 10
  //   const divisions = 25
  //   this.gridHelper = new THREE.GridHelper(size, divisions)
  //   this.scene.add(this.gridHelper)
    
  //   var loader = new THREE.TextureLoader()
	// 	var clothTexture = loader.load( '../assets/grey-triangle.png' )
	// 			clothTexture.anisotropy = 16

	// 	var clothMaterial = new THREE.MeshLambertMaterial( {
	// 				map: clothTexture,
	// 				side: THREE.DoubleSide,
	// 				alphaTest: 0.5
	// 	} )

	// 			// cloth geometry

	// 	var clothGeometry = new THREE.ParametricBufferGeometry( clothFunction, cloth.w, cloth.h );

	// 			// cloth mesh

	// 			object = new THREE.Mesh( clothGeometry, clothMaterial );
	// 			object.position.set( 0, 0, 0 );
	// 			object.castShadow = true;
	// 			scene.add( object );

	// 			object.customDepthMaterial = new THREE.MeshDepthMaterial( {
	// 				depthPacking: THREE.RGBADepthPacking,
	// 				map: clothTexture,
	// 				alphaTest: 0.5
	// 			} );
  //   this.animate()
  // },
  // methods: {
  //   animate: function() {
  //     requestAnimationFrame(this.animate)
  //     this.renderer.render(this.scene, this.camera)
  //   }
  // }

}
</script>

<style scoped>
.canvas{
  grid-area: 3 / 2 / 7 / 7;
  border: 5px solid black;
  border-left: none;
}

.canvas-left {
  grid-area: 3 / 2 / 7 / 4;
  border-top: 5px solid black;
  border-bottom: 5px solid black;
}

.canvas-right {

}
</style>