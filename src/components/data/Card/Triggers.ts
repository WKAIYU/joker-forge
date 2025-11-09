import { TriggerDefinition } from "../../ruleBuilder/types";
import { HandRaisedIcon } from "@heroicons/react/24/outline";

export interface CategoryDefinition {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const GENERIC_TRIGGERS = [
  "card_scored",
  "card_held",
  "card_discarded",
  "card_held_in_hand_end_of_round",
];

export const SCORING_TRIGGERS = ["card_scored", "card_held"];

export const CARD_TRIGGER_CATEGORIES: CategoryDefinition[] = [
  {
    label: "卡牌",
    icon: HandRaisedIcon,
  },
];

export const CARD_TRIGGERS: TriggerDefinition[] = [
  {
    id: "card_scored",
    label: "当卡牌计分时",
    description: "当此卡牌被计分时触发",
    category: "Card",
  },
  {
    id: "card_held",
    label: "当卡牌在手牌中时",
    description: "当此卡牌被保留在手牌中时触发",
    category: "Card",
  },
  {
    id: "card_held_in_hand_end_of_round",
    label: "回合结束时手牌中的卡牌",
    description:
      "在每个回合结束时触发，针对仍然保留在手牌中的卡牌。（如蓝色蜡封，黄金卡）",
    category: "Card",
  },
  {
    id: "card_discarded",
    label: "当卡牌被弃置时",
    description:
      "当此卡牌被弃置（从手牌或场上移除）时触发",
    category: "Card",
  },
];

export function getCardTriggerById(id: string): TriggerDefinition | undefined {
  return CARD_TRIGGERS.find((trigger) => trigger.id === id);
}
