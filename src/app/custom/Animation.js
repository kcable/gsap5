import gsap from "gsap/all";
//import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import selectors from "./selectors";

export default class Animation {
  constructor() {
    // adding timelines to master timeline
    this._tl = gsap.timeline().pause();
    this._tl.add(this.shoppingList());
    this._tl.add(this.shippingButton());
    this._tl.add(this.truckMoovement());

    // button listeners
    selectors.playBtn.addEventListener("click", () => {
      if (this._pausedFlag) {
        this._tl.resume();
        this._pausedFlag = false;
      } else {
        this._tl.play(0);
      }
    });

    selectors.truckBtn.addEventListener("click", () => {
      this._tl.play(0);
    });

    selectors.pauseBtn.addEventListener("click", () => {
      this._pausedFlag = true;
      this._tl.pause();
    });

    selectors.reverseBtn.addEventListener("click", () => {
      this._tl.reverse();
    });
  }
  /**
   * this function returns the timeLine that controls the animation of the shopping list
   * and its items
   */
  shoppingList() {
    const timeline = gsap.timeline();
    timeline.to(selectors.list, { duration: 1, y: -80, id: "listUp" });
    timeline.to(selectors.list, { duration: 0.3, y: 0, id: "listDown" });
    // isnt it better to call  timeline.to(selectors.listItems, { y: 100, opacity: 0, duration: 0.3 }); instead ?
    timeline.to(selectors.listItems[0], {
      y: 100,
      opacity: 0,
      duration: 0.3,
      id: "listItem0",
    });
    timeline.to(
      selectors.listItems[1],
      { y: 100, opacity: 0, duration: 0.3, id: "listItem1" },
      "<"
    );
    timeline.to(
      selectors.listItems[2],
      { y: 100, opacity: 0, duration: 0.3, id: "listItem2" },
      "<"
    );
    return timeline;
  }
  /**
   * this function returns a timeline that controlls the animation of the transformation of the button to a truck
   */
  shippingButton() {
    const timeline = gsap.timeline();
    // button grow and shrink
    timeline.to(selectors.truckBtnBg, {
      duration: 0.5,
      scale: 1.1,
      transformOrigin: "50% 50%",
      id: "truckBtnScaleUp",
    });
    timeline.to(selectors.truckBtnBg, {
      duration: 0.1,
      scale: 1,
      transformOrigin: "50% 50%",
      id: "truckBtnScaleDown",
    });
    // shadows and truck parts isn`t it better to do
    // timeline.to([selectors.container, selectors.containerParts], {
    //   opacity: 1,
    //   duration: 0.5,
    // });

    timeline.to(selectors.container, {
      opacity: 1,
      duration: 0.5,
      id: "container",
    });

    timeline.to(
      selectors.containerParts,
      {
        opacity: 1,
        duration: 0.5,
        id: "containerParts",
      },
      "<"
    );
    // back wheels isnt it better to use
    // timeline.to(
    //   [
    //     selectors.backWheel1,
    //     selectors.backWheelBack1,
    //     selectors.backWheel2,
    //     selectors.backWheelBack2,
    //   ],
    //   { opacity: 1, duration: 0.5 }
    // );

    timeline.to(selectors.backWheel1, {
      opacity: 1,
      duration: 0.5,
      id: "backWheel1",
    });

    timeline.to(
      selectors.backWheel2,
      {
        opacity: 1,
        duration: 0.5,
        id: "backWheel2",
      },
      "<"
    );

    timeline.to(
      selectors.backWheelBack1,
      {
        opacity: 1,
        duration: 0.5,
        id: "backWheelBack1",
      },
      "<"
    );

    timeline.to(
      selectors.backWheelBack2,
      {
        opacity: 1,
        duration: 0.5,
        id: "backWheelBack2",
      },
      "<"
    );

    // front group and wheels isnt it better to use
    // timeline.to(
    //   [
    //     selectors.frontGroup,
    //     selectors.frontWheelsBack,
    //     selectors.frontWheel1,
    //     selectors.frontWheel2,
    //   ],
    //   { opacity: 1, duration: 0.5 }
    // );

    timeline.to(selectors.frontGroup, {
      opacity: 1,
      duration: 0.5,
      id: "frontGroup",
    });

    timeline.to(
      selectors.frontWheel1,
      {
        opacity: 1,
        duration: 0.5,
        id: "frontWheel1",
      },
      "<"
    );

    timeline.to(
      selectors.frontWheel2,
      {
        opacity: 1,
        duration: 0.5,
        id: "frontWheel2",
      },
      "<"
    );

    timeline.to(
      selectors.frontWheelsBack,
      {
        opacity: 1,
        duration: 0.5,
        id: "frontWheelsBack",
      },
      "<"
    );

    return timeline;
  }
  /**
   * the following function controls the animation of the truck exiting the scene
   */
  truckMoovement() {
    const timeline = gsap.timeline();
    timeline.to(selectors.truck, { x: -200, duration: 1, id: "truckMovement" });
    timeline.to(selectors.truck, { x: 400, duration: 1 }, ">");
    timeline.to(selectors.truck, { opacity: 0, duration: 0.4 }, ">-0.4");
    timeline.to(selectors.shippedLabel, { opacity: 1, id: "shippedLabel" });
    return timeline;
  }
}
