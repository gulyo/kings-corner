import { CategoryProvider } from "typescript-logging-category-style";
import { LogLevel } from "typescript-logging";

const provider = CategoryProvider.createProvider("KingsCornerProvider", {
  level: LogLevel.Info,
});

const quarkCategory = provider.getCategory("KingsCorner");
export const comLogger = quarkCategory.getChildCategory("Communication");
export const componentLogger = quarkCategory.getChildCategory("Component");
export const logicLogger = quarkCategory.getChildCategory("Logic");
