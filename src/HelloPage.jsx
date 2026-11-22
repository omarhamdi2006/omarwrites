import BlurText from "./component/BlurText";
import { Link } from "react-router";
export default function HelloPage() {
  const desc =
    `This blog is meant to be a digital notebook for random sketches and
            ideas that pop into my head from time to time. Mostly, I just want a
            quiet space to share how I'm feeling—knowing full well it might feel
            like a ghost town. At the end of the day, it's a way to pin the
            serious ideas floating around in my head onto a board so I can
            actually look at them.`
      .replace(/\s+/g, " ")
      .trim();
  return (
    <div className="greet flex flex-col items-center w-full h-screen">
      <div className="navbar flex w-full h-max py-1 text-center items-center justify-center">
        <h1 className="mainFont text-5xl text-text font-semibold my-10">
          OmarWrites
        </h1>
      </div>

      {/* <h1 className="text-2xl font-semibold mt-5 mb-4 myGray">
        look at my mind! (partially)
      </h1> */}
      <div className="flex items-center justify-start flex-col w-full h-full">
        <div className="core m-5 w-3/4  text-text studpidFont text-center drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] ">
          <BlurText
            text={desc}
            effect="blur"
            animateBy="words"
            direction="top"
            staggerFrom="start"
            trigger="view"
            delay={100}
            stepDuration={0.3}
            blur={10}
            distance={0.1}
            className="text-2xl mb-8"
            loop={false}
            loopDelay={2}
            focusOnHover={false}
          />

          {/* <p className="text-2xl text-text studpidFont text-center drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]">
            This blog is meant to be a digital notebook for random sketches and
            ideas that pop into my head from time to time. Mostly, I just want a
            quiet space to share how I'm feeling—knowing full well it might feel
            like a ghost town. At the end of the day, it's a way to pin the
            serious ideas floating around in my head onto a board so I can
            actually look at them.{" "}
          </p> */}
        </div>

        <div className="px-10 flex justify-center items-center gap-10">
          <Button text="Go to Blog" path="/home" filled={true} />
          <Button
            text="LinkedIn"
            path="https://www.linkedin.com/in/omar-hamdy-6b929334b/"
            filled={false}
          />
        </div>
      </div>
    </div>
  );
}

function Button({ text, path, filled }) {
  return (
    <>
      <div className="mt-5 text-4xl">
        <Link to={path}>
          {" "}
          <div
            className={
              filled
                ? "text-background bg-text studpidFont rounded-2xl w-max p-3 hover:scale-105 duration-300 shadow-text shadow-md/30"
                : "text-text bg-background studpidFont rounded-2xl w-max p-3 hover:scale-105 duration-300 shadow-text shadow-md/30"
            }
          >
            <h1>{text}</h1>
          </div>
        </Link>
      </div>
    </>
  );
}
