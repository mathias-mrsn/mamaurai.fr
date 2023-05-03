import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

interface IData {
    fov: number;
    cameraZ: number;
    backgroundColor: number;
    opacity: number;
    tubeRadius: number;
    resY: number;
    resX: number;
    noiseCoef: number;
    timeCoef: number;
    mouseCoef: number;
    heightCoef: number;
    ambientColor: number;
    lightIntensity: number;
    lightDistance: number;
    light1Color: number;
    light2Color: number;
    light3Color: number;
    light4Color: number;
}

interface IScene {
    scene: THREE.Scene | undefined;
    camera: THREE.PerspectiveCamera | undefined;
    renderer: THREE.WebGLRenderer | undefined;
    controls: OrbitControls | undefined;
    width: number;
    height: number;
    cx: number;
    cy: number;
    wWidth: number;
    wHeight: number;
    light1: THREE.PointLight | undefined;
    light2: THREE.PointLight | undefined;
    light3: THREE.PointLight | undefined;
    light4: THREE.PointLight | undefined;
    objects: THREE.Mesh[] | undefined;
    noiseConf: any;
    cscale: any;
    mouse: THREE.Vector2 | undefined;
}

export class Tubes {

    data: IData;
    scene: IScene;
    id: string;

    constructor(
        data: IData,
        scene: IScene,
        id: string,
    ) {
        this.data = data;
        this.scene = scene;
        this.id = id;

        this.scene.mouse = new THREE.Vector2(); // create mouse vector
        this.init();
    }

    init() {
        this.scene.scene = new THREE.Scene(); // create scene

        this.scene.camera = new THREE.PerspectiveCamera(this.data.fov, this.scene.width / this.scene.height, 0.1, 1000); // create camera
        this.scene.camera.position.z = this.data.cameraZ; // set camera position in Z axis
        this.scene.camera.position.set(15, 15, -40); // set camera position

        this.scene.renderer = new THREE.WebGLRenderer({
            antialias: true, // to get smoother output
            canvas: document.getElementById(this.id) as HTMLCanvasElement,
        });


        this.scene.scene.background = new THREE.Color(this.data.backgroundColor); // set background color
        
        

        
        // this.scene.mouse = new THREE.Vector2(); // create mouse vector
        
        this.setSize();
        window.addEventListener('resize', this.setSize); // every time the window is resized, we call the setSize function to update the renderer and the camera aspect ratio.
        
        window.addEventListener('mousemove', (event) => {
            if (!this.scene.mouse) return;
            this.scene.mouse.x = (event.clientX / this.scene.wWidth) * 2 - 1;
            this.scene.mouse.y = -(event.clientY / this.scene.wHeight) * 2 + 1;
        });
        
        // Create Scene
        
        // Create Lights
        // this.scene.scene.add(new THREE.AmbientLight(this.data.ambientColor, this.data.lightIntensity)); // add ambient light
        // this.scene.light1 = new THREE.PointLight(this.data.light1Color, this.data.lightIntensity, this.data.lightDistance); // create light 1
        // this.scene.light1.position.set(0, 0, 10); // set light 1 position
        // this.scene.scene.add(this.scene.light1); // add light 1 to the scene
        // this.scene.light2 = new THREE.PointLight(this.data.light2Color, this.data.lightIntensity, this.data.lightDistance); // create light 2
        // this.scene.light2.position.set(10, 10, 10); // set light 2 position
        // this.scene.scene.add(this.scene.light2); // add light 2 to the scene
        // this.scene.light3 = new THREE.PointLight(this.data.light3Color, this.data.lightIntensity, this.data.lightDistance); // create light 3
        // this.scene.light3.position.set(10, 0, 10); // set light 3 position
        // this.scene.scene.add(this.scene.light3); // add light 3 to the scene
        // this.scene.light4 = new THREE.PointLight(this.data.light4Color, this.data.lightIntensity, this.data.lightDistance); // create light 4
        // this.scene.light4.position.set(0, 10, 10); // set light 4 position
        // this.scene.scene.add(this.scene.light4); // add light 4 to the scene
        
        // Create Objects
        
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(0, 10, -10);
        this.scene.scene.add(light);
        
        // const geometry = new THREE.TubeGeometry(new CustomCurve(10), 200, 2, 8, false); // create geometry
        const geometry = new THREE.BoxGeometry(16, 16, 16);
        const material = new THREE.MeshStandardMaterial({ // create material
            color: 0xffff0f,
        });
        this.scene.scene.add(new THREE.Mesh(geometry, material)); // add mesh to the scene  
        
        this.scene.controls = new OrbitControls(this.scene.camera, this.scene.renderer.domElement); // create controls
        this.scene.renderer.render(this.scene.scene, this.scene.camera); // render the scene
        
    }

    setSize() {
        this.scene.width = window.innerWidth; // change the width of the scene
        this.scene.height = window.innerHeight; // change the height of the scene
        this.scene.cx = this.scene.width / 2; // center of the screen X axis
        this.scene.cy = this.scene.height / 2; // center of the screen Y axis
        if (this.scene.renderer && this.scene.camera) {
            this.scene.renderer.setSize(this.scene.width, this.scene.height); // resize the renderer
            this.scene.camera.aspect = this.scene.width / this.scene.height; // update the camera aspect ratio
            this.scene.camera.updateProjectionMatrix(); // Must be called after any change to the camera's transform

            // const zsize = this.getRendererSize();
            // this.scene.wWidth = zsize[0];
            // this.scene.wHeight = zsize[1];
        }
    }

    getRendererSize() { // TODO: understand this part
        if (!this.scene.camera) return [0, 0]
        const cam = new THREE.PerspectiveCamera(this.scene.camera.fov, this.scene.camera.aspect);
        const vFOV = (cam.fov * Math.PI) / 180;
        const height = 2 * Math.tan(vFOV / 2) * Math.abs(this.data.cameraZ);
        const width = height * cam.aspect;
        return [width, height];
      }

}

class CustomCurve extends THREE.Curve<THREE.Vector3> {
    
    scale: number;
    
    constructor(
        scale : number = 1,
    ) {
        super();
        this.scale = scale;
    }

    getPoint(t: number) {
        const tx = t * 3 - 1.5;
        const ty = Math.sin(2 * Math.PI * t);
        const tz = 0;
        return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);
    }
}

// source : https://codepen.io/soju22/pen/JzzvbR?editors=0010

/*

        const tubes = new Tubes({
            fov: 75,
            cameraZ: 10,
            backgroundColor: 0x0a1f6f,
            opacity: 1,
            tubeRadius: 3,
            resY: 10,
            resX: 4,
            noiseCoef: 50,
            timeCoef: 50,
            mouseCoef: 50,
            heightCoef: 20,
            ambientColor: 0xc00ccc,
            lightIntensity: 1,
            lightDistance: 20,
            light1Color: 0x24f59e,
            light2Color: 0xe15040,
            light3Color: 0x1b859e,
            light4Color: 0x4cb04b,
        },
        {
            scene: undefined,
            camera: undefined,
            renderer: undefined,
            controls: undefined,
            width: 0,
            height: 0,
            cx: 0,
            cy: 0,
            wHeight: 0,
            wWidth: 0,
            light1: undefined,
            light2: undefined,
            light3: undefined,
            light4: undefined,
            objects: undefined,
            noiseConf: {},
            cscale: {},
            mouse: undefined,
        },
        "canvas-id"
        )
        if (tubes.scene.renderer?.domElement)
            document.body.appendChild(tubes.scene.renderer.domElement);

*/