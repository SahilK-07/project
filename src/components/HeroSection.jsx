import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
      style={{position:"relative",right:"300px",top:"150px"}}>
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
             Ankit
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Dubey
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I build clean and modern web apps using React, Node.js, and Tailwind. Passionate about full-stack development.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
        <div className="relative top-60 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce" >
        <span className="text-sm text-muted-foreground mb-2" > Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
      </div>

      
      {/* <div  style={{position:"relative",left:"800px",bottom:"310px", height:"350px", width:"350px", borderRadius: "50%",border: "2px solid #ccc",overflow:"hidden"}}>
        <img src="/projects/profile.jpg" alt="ankit" style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}/>
      </div> */}
      <div
  style={{
    position: "relative",
    left: "850px",
    bottom: "300px",
    height: "350px",
    width: "350px",
    borderRadius: "50%",
    overflow: "hidden",
     
      border: "4px solid #ccc",
    boxShadow: "0 10px 20px rgba(0,0,0,0.15)", // Soft shadow
    transition: "transform 0.3s ease-in-out",
  }}
  onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
  onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
>
  <img
    src="/projects/p1.JPG"
    alt="ankit"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />
</div>

    </section>
  );
};
