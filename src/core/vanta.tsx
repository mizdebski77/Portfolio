import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import * as THREE from "three";

interface VantaEffectInstance {
    destroy: () => void;
}

const VantaWrapper = styled.div`
    height: 100vh;
    max-width: 100vw;
    width: 100%;
    position: absolute;
    opacity: 0.2;
`;

//rings, halo, net, globe
const VantaEffect: React.FC = () => {
    const vantaRef = useRef<HTMLDivElement>(null);
    const vantaEffectInstance = useRef<VantaEffectInstance | null>(null);

    useEffect(() => {
        const loadVanta = async () => {
            // @ts-ignore
            const VANTA = await import("vanta/dist/vanta.net.min");
            vantaEffectInstance.current = VANTA.default({
                el: vantaRef.current,
                THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.0,
                color: 0xffffff,
                color2: 0x346caf,
                scale: 1,
                minWidth: 200.0,
            });
        };

        loadVanta();

        // Cleanup effect on unmount
        return () => {
            if (vantaEffectInstance.current) {
                vantaEffectInstance.current.destroy();
            }
        };
    }, []);

    return <VantaWrapper ref={vantaRef} />;
};

export default VantaEffect;
