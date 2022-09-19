import * as THREE from "three"

import Experience from "../Experience.js";

import Room from "./Room.js"
import GSAP from "gsap"

import Controls from "./Controls.js"
import Environment from "./Environment.js"

export default class World {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.resources = this.experience.resources;
        this.renderer = this.experience.renderer.renderer;

        this.resources.on("ready", ()=>{
            this.environment = new Environment();
            this.room = new Room();
            this.controls = new Controls();
        });

        
        this.cubeParticles();
        this.toggleSpawn();
        this.resetCanvas();
        
        this.cubeAll = []
        this.arrayExecute();
        
    }
    
    


    cubeMain(){

        this.verticesOfCube = [
            -1,-1,-1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
            -1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1,
        ];

        this.indicesOfFaces = [
            2,1,0,    0,3,2,
            0,4,7,    7,3,0,
            0,1,5,    5,4,0,
            1,2,6,    6,5,1,
            2,3,7,    7,6,2,
            4,5,6,    6,7,4
        ];

        // this.geometry = new THREE.PolyhedronGeometry( this.verticesOfCube, this.indicesOfFaces, 0.5, 2 );
        
        
        this.geometry = new THREE.BoxGeometry(1, 1, 1);
        this.material = new THREE.MeshBasicMaterial ({
            color: this.color,
            wireframe: true,
        });
        
        
        
        this.cube = new THREE.Mesh(this.geometry,this.material);
        this.cube.position.x = Math.floor(Math.random() * 5) - 2;
        this.cube.position.y = Math.floor(Math.random() * 5) - 2;
        this.cube.position.z = Math.floor(Math.random() * 5) - 2;
        this.tempx = this.cube.position.x
        this.tempy = this.cube.position.y
        this.tempz = this.cube.position.z
        this.color = new THREE.Color(0xffffff);
        this.color.setHex( Math.random() * 0xffffff );
        this.cube.color = this.color;
        this.cube.scale.x = 0;
        this.cube.scale.y = 0;
        this.cube.scale.z = 0;
        GSAP.to(this.cube.scale, {
            x: 1,
            y: 1,
            z: 1,
            ease: "elastic",
            duration:1,
            
        })
        
        this.scene.add(this.cube)
        this.cubeArray = []
        
        
        // this.cube.position.toArray(this.cubeArray);
        this.cube.position.toArray(this.cubeArray);
        this.cubeAll.push(this.cubeArray);
        for(let i = 0; i < this.cubeAll.length; i++) {
  
            
            for(let j = 0; j < this.cubeAll[i].length; j++) {
              
                // if (this.cube.position === this.cubeAll[j])
                // this.scene.add(this.cube)
                // console.log(this.cubeAll.length)
            }
         }
        
        // this.cubeArray.concat(this.cubeAll);
        console.log(this.cubeAll)
        // console.log(this.cube.position)
        // console.log(this.cubeAll)
        // this.newArray = new Array();
        // this.test = this.newArray.concat(this.cube.position)
        // this.newArray.concat(this.cube.position)
        // this.newArray.push(this.cube.position.x, this.cube.position.y, this.cube.position.z)
        // this.cubeArray.push(this.cube.position)
        // this.cubeArray
        // this.arrayInfo();
        // console.log(this.cube)
                
    }

    arrayExecute(){
        
        
        
        // for(var i = 0; i < this.cubeAll.length;i++){
        //     var value = this.cubeAll.parent[i];
         
        //     for(var j = 0; j < this.cubeAll.parent[i].length; j++){
                
        //        var innerValue = this.cubeAll.parent[i][j];
        //     }
        //  }
         
         
        
        
    }

    cubeParticles(){

        
        

        this.button = document.querySelector(".changebox")
        this.button.onclick = (event) => {
            this.cubeMain();
            // console.log(this.cube)
        }

    }

    toggleSpawn(){
        this.button = document.querySelector(".togglespawn")
        this.button.onclick = (event) => {
            if(this.button.value=="YES"){
                this.button.value="NO";
            } else if(this.button.value=="NO"){
                this.button.value="YES";
            }
            
            // console.log(this.button.value)
        }
        

    }

    resetCanvas(){
        this.button = document.querySelector(".resetcanvas")
        this.button.onclick = (event) => {
            
            // console.log(this.newArray)
            // console.log(this.cubeArray)
            console.log("Not Working Yet <3")
            
            // console.log("Cube Array" + "" + ":" + "" + this.cubeArray)
            // this.renderer.clear();
            // console.log(this.renderer)
        }
    }

    

    resize(){ 
        
    }

    update(){
        this.button = document.querySelector(".togglespawn")
        if(this.button.value=="YES"){
            this.cubeMain();
        }else if(this.button.value=="NO"){

        }

        
        
        if (this.room) {
            this.room.update();
        }
        if (this.controls) {
            this.controls.update();
        }
    }

}
     

    
