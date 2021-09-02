<template>
    
</template>
<script>
import * as THREE from 'three'
export default {
    name:"Demo",
    data () {
        return {
            renderer:null,
            scene:null,
            camera:null,
            cube:null
        }
    },
    mounted(){
        this.initThree()
    },
    methods: {
        initThree(){
            this.scene=new THREE.Scene()
            this.camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,1000)
            this.renderer=new THREE.WebGLRenderer()
            this.renderer.setSize(window.innerWidth,window.innerHeight)
            this.renderer.setClearColor("#FFFFFF")
            document.getElementById("main").appendChild(this.renderer.domElement)
            let geometry=new THREE.BoxGeometry(2,2,8)
            let material=new THREE.MeshBasicMaterial({color:"blue"})
            this.cube=new THREE.Mesh(geometry,material)
            this.scene.add(this.cube)
            this.camera.position.z=15
            this.renderderAnimation()
            
        },
        renderderAnimation(){
            requestAnimationFrame(this.renderderAnimation)
            this.cube.rotation.y += 0.01
            this.cube.rotation.z += 0.01
            this.cube.rotation.x += 0.01
            this.renderer.render(this.scene,this.camera)
        }
        
    }
}
</script>