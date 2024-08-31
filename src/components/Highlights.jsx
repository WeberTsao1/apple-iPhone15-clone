import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";
import { animateWithGsap } from "../utils/animations";
import ScrollTrigger from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      duration: 0.8,
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#title",
        toggleActions: "restart reverse restart reverse",
        start: "top 95%",
      },
    });

    gsap.to(".link", {
      duration: 1,
      opacity: 1,
      y: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".link",
        toggleActions: "restart reverse restart reverse",
        start: "top 95%",
      },
    });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1
            id="title"
            className="section-heading"
          >
            Get the highlights
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film{" "}
              <img
                src={watchImg}
                alt="watch"
                className="ml-2"
              ></img>
            </p>
            <p className="link">
              Watch the event{" "}
              <img
                src={rightImg}
                alt="watch"
                className="ml-2"
              ></img>
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
