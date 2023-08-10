import { NavigatorDirection } from "../../type";
import animations from "./navigatorAnimations.module.scss";

type NavigatorPhase = "from" | "to";

export const navigatorAnimationMap: {
  [phase in NavigatorPhase]: { [dir in NavigatorDirection]: string };
} = {
  from: {
    left: animations.disappearLeft,
    right: animations.disappearRight,
  },
  to: {
    left: animations.appearLeft,
    right: animations.appearRight,
  },
};
