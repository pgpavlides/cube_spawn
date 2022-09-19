import * as THREE from "three"

import Experience from "../Experience.js";

import GSAP from "gsap"

export default class Room {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.room = this.resources.items.room;
        // this.actualRoom = this.room.scene
        
    
        

        this.setModel();
        this.setAnimation();
        // this.onMouseMove();
        
    }

   

    setModel() {

        // console.log(this.resources.items.screen)
        // console.log(this.actualRoom)

        // this.actualRoom.children.forEach (child=>{
        //     child.castShadow = true;
        //     child.receiveShadow = true;

        //     if(child instanceof THREE.Group){
        //         child.children.forEach ((groupchild)=>{
        //             groupchild.castShadow = true;
        //             groupchild.receiveShadow = true;
        //         })
        //     }

        // });

        // console.log(this.video)
        // console.log(this.resources.items.screen)
 
        // this.scene.add(this.actualRoom)
        
    }

    setAnimation() {
        // this.mixer = new THREE.AnimationMixer(this.actualRoom);
    //     this.swim = this.mixer.clipAction(this.room.animations[0]);
                
    //     this.swim.play();
        
    // //   
    //     console.log(this.room);
    }

    
    // onMouseMove(){
    //     // window.addEventListener("mousemove", (e)=>{
    //     //     // console.log(e);
    //     //     this.rotation = ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;
    //     //     this.lerp.target = this.rotation * 0.1;
    //     //     console.log(this.rotation)
    //     // });
    // }
    
    resize(){

    }

    update(){
        
        // this.lerp.current = GSAP.utils.interpolate(
        //     this.lerp.current,
        //     this.lerp.target,
        //     this.lerp.ease
        // );

        // this.actualRoom.rotation.y = this.lerp.current;
        // this.controls.update();  
        // this.mixer.update(this.time.delta * 0.0007);
    }

}