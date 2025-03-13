import { gsap } from "gsap";

// Inicia a animação assim que o componente for carregado (sem precisar do DOMContentLoaded)
window.onload = () => {
    gsap.from(".titulo", {
        opacity: 0,       
        y: 50,            
        duration: 1,      
        ease: "power3.out" 
    });

    gsap.from(".descricao", {
        opacity: 0,       
        delay: 0.5,       
        duration: 1,
        ease: "power2.out"
    });

    gsap.from(".icone", {
        scale: 0,         
        duration: 1.5,    
        ease: "bounce.out", 
        delay: 1          
    });
}
