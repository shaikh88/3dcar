import React, { useEffect, useMemo, useState, useRef } from 'react';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


const Animation = () => {

        const [loading ,setLoading] = useState(0);
        const canvasRef = useRef();
        const [loader, setLoader] = useState(new GLTFLoader())
        const [scene , setScene] = useState(new THREE.Scene())
        const [camera , setCamera ] = useState(new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ))
        const [renderer , setRenderer] = useState(new THREE.WebGLRenderer({
            alpha:true,
            canvas: canvasRef.current
        }))


        useEffect(() => {

            const light = new THREE.AmbientLight( 0x404040 ); // soft white light
            light.intensity = 3;
            scene.add( light );

            const pointLight =  new THREE.PointLight(0xffffff, 0.1);
            pointLight.position.set(1,1,1);
            pointLight.intensity = 0.2;
            scene.add(pointLight);

            const pointLight2 =  new THREE.PointLight(0xffffff, 0.1);
            pointLight2.position.set(-3,-3,-3);
            pointLight2.intensity = 0.2;
            scene.add(pointLight2);


            renderer.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( renderer.domElement );

            const geometry = new THREE.SphereBufferGeometry();
            const material = new THREE.MeshStandardMaterial( { color: 0x301934, wireframe: true });
            material.metalness = 1;
            material.roughness = 0;
            const sphere =  new THREE.Mesh( geometry, material );
            // scene.add( sphere );

            // camera.position.z = 5;
            camera.position.set( 0, 0.5, 1 );

            const controls = new OrbitControls( camera, renderer.domElement );
            controls.update();

            let model;
            loader.load('./3d/scene.gltf',function(glt){
                scene.add(glt.scene);
                model = glt.scene;
                model.scale.set(1,1,1);
                animate(model);
            },
            function ( xhr ) {
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
                setLoading(xhr.loaded / xhr.total * 100 );
            },
            function ( error ) {
                console.log( 'An error happened', error );
            })
            let z = .01;
            function animate() {
                requestAnimationFrame( animate );
                // model.rotation.x += 0.01;
                model.rotation.y += 0.005;
                // model.translateOnAxis(new THREE.Vector3(0, 1, 0).normalize(), z)
                renderer.render( scene, camera );
            };

            window.addEventListener('resize',handlewindowResize)
            function  handlewindowResize(){
                    // Update camera
                    const {current : container} = canvasRef;
                    camera.aspect = container.clientWidth / container.clientHeight;
                    camera.updateProjectionMatrix();
                    // Update renderer
                    renderer.setSize(container.clientWidth, container.clientHeight)
                    renderer.render(scene, camera);
                };
        },[])

    return(
    <>
    {loading > 100 ? 
    <canvas ref={canvasRef} style={{height: '100%' , width: '100%'}} >
        </canvas>
        : 
        <p>loading ... {loading}%</p>
    }        
       </>
    )
}

export default React.memo(Animation)