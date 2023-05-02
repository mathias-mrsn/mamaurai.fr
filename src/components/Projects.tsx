import { gsap } from 'gsap';
import { useEffect } from 'react';
import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';

export const Projects = () => {

    function createShape (
        values: {x: number, y: number, z: number}[],
        pos: {x: number, y: number, z: number}
    ) {
        const shape = new THREE.Shape();
        let r = 1;
        let num = 70;
        for (let i = 0; i < num; i++) {
            r = i % 2 === 0 ? 1 : 0.8;
            const angle = (i * 2 * Math.PI) / num;
            const x = Math.cos(angle) * r;
            const y = Math.sin(angle) * r;
            if (i === 0) {
                shape.moveTo(x, y);
            } else {
                shape.lineTo(x, y);
            }

        }

        const extrudeSettings = {
            steps: 100,
            depth: 20,
            bevelEnabled: false,
            bevelThickness: 1,
            bevelSize: 1,
            bevelSegments: 1,
            extrudePath: new THREE.CatmullRomCurve3(
                values.map((value) => new THREE.Vector3(value.x, value.y, value.z))
            ),
        };
        
        const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
        const material = new THREE.MeshStandardMaterial({
            color: 0x0e0e0e,
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(pos.x, pos.y, pos.z);
        return mesh;
    }

    function R (max: number) {
        let precision = 100; // 2 decimals
        let randomnum = Math.floor(Math.random() * (max * precision - 1 * precision) + 1 * precision) / (1*precision);
        if (randomnum % 2)
            randomnum *= -1;

        console.log(randomnum)
        
        return randomnum;
    }

    useEffect(() => {
        const scene = new THREE.Scene();

        // const geometry = new THREE.SphereGeometry(3, 64, 64);
        // const material = new THREE.MeshStandardMaterial({
        //     color: 0x00ffff,
            
        // });
        // const mesh = new THREE.Mesh(geometry, material);
        // scene.add(mesh);

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++){
                const shape = createShape([
                    {x: 0, y: R(2.5), z: 0},
                    {x: 1, y: R(2.5), z: 0},
                    {x: 2, y: R(2.5), z: 0},
                    {x: 3, y: R(2.5), z: 0},
                    {x: 4, y: R(2.5), z: 0},
                    {x: 5, y: R(2.5), z: 0},
                    {x: 6, y: R(2.5), z: 0},
                    {x: 7, y: R(2.5), z: 0},
                ],
                {
                    x: -50 + i * 10,
                    y: -20 + j * 5,
                    z: -10,
                });
                shape.rotateZ(R(6));
                scene.add(shape);
            }
        }

        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        const light = new THREE.PointLight(0xffffff, 1, 100);
        light.position.set(20, 0, 20);
        scene.add(light);

        const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 100);
        camera.position.z = 20;
        scene.add(camera);

        const renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector('#canvas-id') as HTMLCanvasElement
        });

        
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.render(scene, camera);
        renderer.setClearColor( 0x000000, 0 );
        
        window.addEventListener('resize', () => {
            sizes.width = window.innerWidth;
            sizes.height = window.innerHeight;
            
            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();
            renderer.setSize(sizes.width, sizes.height);
        })
        
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.enableRotate = false;
        controls.autoRotate = false;
        
        const animation = () => {
            controls.update();
            renderer.render(scene, camera);
            window.requestAnimationFrame(animation);
        }
        animation();

        const tl = gsap.timeline({defaults: {duration: 2, ease: 'in-out'}, delay: 3});
        tl.fromTo('#container', {scale: 0.5}, {scale: 1});
        



    })

    return (
    <>
        <div className='bg-black w-full h-full absolute top-0 left-0'>
            <div id='container' className='relative w-auto h-auto bg-yellow-400'>
                <canvas id="canvas-id" className="relative m-0 p-0 box-border overflow-x-hidden"></canvas>
            </div>
        </div>
    </>
    )
}

/*

const shape = new THREE.Shape();
let r = 1;
let num = 70;
for (let i = 0; i < num; i++) {
    r = i % 2 === 0 ? 1 : 0.7;
    const angle = (i * 2 * Math.PI) / num;
    const x = Math.cos(angle) * r;
    const y = Math.sin(angle) * r;
    if (i === 0) {
        shape.moveTo(x, y);
    } else {
        shape.lineTo(x, y);
    }

}

const extrudeSettings = {
    steps: 100,
    depth: 20,
    bevelEnabled: false,
    bevelThickness: 1,
    bevelSize: 1,
    bevelSegments: 1,
    extrudePath: new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 1, 5),
        new THREE.Vector3(0, -1, 7),
        new THREE.Vector3(0, 0, 15),
        new THREE.Vector3(0, 0, 20),
    ]),
};

*/