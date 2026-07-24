import { useFrame, useThree } from "@react-three/fiber";
import useMouse from "../../hooks/useMouse";

export default function CameraRig() {

    const { camera } = useThree();
    const mouse = useMouse();

    useFrame((state) => {

        const t = state.clock.elapsedTime;

        const targetX = mouse.x * 0.6;
        const targetY = mouse.y * 0.35;
        const targetZ = 6 + Math.sin(t * 0.2) * 0.2;

        camera.position.x += (targetX - camera.position.x) * 0.04;
        camera.position.y += (targetY - camera.position.y) * 0.04;
        camera.position.z += (targetZ - camera.position.z) * 0.04;

        camera.lookAt(0, 0, 0);

    });

    return null;

}
