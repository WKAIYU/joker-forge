import { TriggerDefinition } from "../../ruleBuilder/types";
import {
  PlayIcon,
  ClockIcon,
  BanknotesIcon,
  RectangleStackIcon,
  ShoppingCartIcon,
  SparklesIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/outline";

export interface CategoryDefinition {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const TRIGGER_CATEGORIES: CategoryDefinition[] = [
  {
    label: "计分",  // 统一为"计分"
    icon: HandRaisedIcon,
  },
  {
    label: "盲注事件",
    icon: PlayIcon,
  },
  { 
    label: "回合事件",
    icon: ClockIcon,
  },
  {
    label: "经济",  // 统一为"经济"
    icon: BanknotesIcon,
  },
  {    
    label: "消耗品",  // 统一为"消耗品"
    icon: RectangleStackIcon,
  },
  {    
    label: "商店效果",  // 统一为"商店效果"
    icon: ShoppingCartIcon,
  },
  {    
    label: "特殊",  // 统一为"特殊"
    icon: SparklesIcon,
  },
];

export const TRIGGERS: TriggerDefinition[] = [
  {
    id: "hand_played",
    label: "当手牌被打出时",
    description: "当任何手牌被打出时触发。使用条件来指定是检查得分牌、所有打出的牌还是特定手牌类型。",
    category: "手牌得分",
  },
  {
    id: "card_scored",
    label: "当卡牌得分时",
    description: "在得分过程中为每张单独的卡牌触发。用于卡牌特定属性，如花色、点数或增强效果。",
    category: "手牌得分",
  },
  {
    id: "card_destroyed",
    label: "当卡牌被摧毁时",
    description: "当卡牌被摧毁时触发（例如玻璃卡破碎、被小丑牌吃掉、被消耗品删除）。",
    category: "特殊事件",
  },
  {
    id: "first_hand_drawn",
    label: "当首次手牌被抽取时",
    description: "仅在每回合首次抽取手牌时触发。",
    category: "盲注事件",
  },
  {
    id: "hand_drawn",
    label: "当手牌被抽取时",
    description: "当玩家抽取新一手牌时触发。",
    category: "盲注事件",
  },
  {
    id: "hand_discarded",
    label: "当手牌被弃置时",
    description: "当玩家弃置一手牌时触发（在弃置发生之前）。与'当卡牌被弃置时'不同，后者为每张单独的卡牌触发。",
    category: "盲注事件",
  },
  {
    id: "card_discarded",
    label: "当卡牌被弃置时",
    description: "每当卡牌被弃置时触发。使用条件来检查被弃置卡牌的属性。",
    category: "盲注事件",
  },
  {
    id: "card_held_in_hand",
    label: "当卡牌持在手中时",
    description: "为当前手中持有的每张单独卡牌触发。非常适合根据持有的特定卡牌进行缩放的效果，如每张Ace获得金钱或每张人头牌获得倍数。",
    category: "手牌得分",
  },
  {
    id: "playing_card_added",
    label: "当扑克牌被添加时",
    description: "当扑克牌被添加到你的牌组时触发。非常适合根据牌组大小缩放的效果，或在获得特定卡牌时触发，如全息卡在添加卡牌时获得X倍数。",
    category: "卡包与消耗品",
  },
  {
    id: "card_held_in_hand_end_of_round",
    label: "当回合结束时卡牌持在手中",
    description: "在回合结束时为当前手中持有的每张单独卡牌触发。适合模仿黄金牌或蓝印效果。",
    category: "盲注事件",
  },
  {
    id: "before_hand_played",
    label: "在手牌开始得分前",
    description: "在手牌开始得分序列或任何小丑牌计算之前触发。非常适合小小丑牌或应在其他所有事情之前每手牌发生一次的效果。",
    category: "手牌得分",
  },
  {
    id: "joker_evaluated",
    label: "当其他小丑牌被评估时",
    description: "当你拥有的其他小丑牌被评估时触发（在得分后触发）。",
    category: "手牌得分"
  },
  {
    id: "after_hand_played",
    label: "当手牌完成得分时",
    description: "在手牌完全完成得分后触发，在所有卡牌都已得分且所有小丑牌效果都已计算之后。非常适合清理效果、重置变量或应在其他所有事情之后每手牌发生一次的效果。",
    category: "手牌得分",
  },
  {
    id: "round_end",
    label: "当回合结束时",
    description: "在每个回合结束时触发，在所有手牌都已打出且盲注完成后。非常适合获得金钱、升级小丑牌或重置状态。",
    category: "盲注事件",
  },
  {
    id: "blind_selected",
    label: "当盲注被选择时",
    description: "当玩家在每个底注开始时选择新盲注时触发。",
    category: "回合事件",
  },
  {
    id: "blind_skipped",
    label: "当盲注被跳过时",
    description: "当玩家选择跳过盲注时触发。",
    category: "回合事件",
  },
  {
    id: "boss_defeated",
    label: "当Boss盲注被击败时",
    description: "在击败Boss盲注后触发。",
    category: "回合事件",
  },
  {
    id: "tag_added",
    label: "当标签被添加时",
    description: "当你获得标签时触发。",
    category: "回合事件",
  },
  {
    id: "selling_self",
    label: "当此卡牌被出售时",
    description: "当此特定小丑牌被出售时触发。",
    category: "经济系统",
  },
  {
    id: "card_sold",
    label: "当卡牌被出售时",
    description: "当任何卡牌从你的收藏或商店出售时触发。",
    category: "经济系统",
  },
  {
    id: "buying_self",
    label: "当此卡牌被购买时",
    description: "当此特定小丑牌被购买时触发。",
    category: "经济系统",
  },
  {
    id: "card_bought",
    label: "当卡牌被购买时",
    description: "当任何卡牌从商店购买时触发。",
    category: "经济系统",
  },
  {
    id: "booster_opened",
    label: "当增强包被打开时",
    description: "当玩家打开增强包时触发。",
    category: "卡包与消耗品",
  },
  {
    id: "booster_skipped",
    label: "当增强包被跳过时",
    description: "当玩家选择跳过增强包时触发。",
    category: "卡包与消耗品",
  },
  {
    id: "shop_reroll",
    label: "当商店被刷新时",
    description: "每当玩家刷新商店以获取新物品时触发。非常适合从花费金钱中获得收益或通过商店互动积累价值。",
    category: "经济系统",
  },
  {
    id: "consumable_used",
    label: "当消耗品被使用时",
    description: "当玩家使用塔罗牌、星球牌或幻灵牌时触发。",
    category: "卡包与消耗品",
  },
  {
    id: "shop_entered",
    label: "当进入商店时",
    description: "当玩家进入商店时触发。",
    category: "回合事件",
  },
  {
    id: "shop_exited",
    label: "当离开商店时",
    description: "当玩家离开商店时触发。",
    category: "回合事件",
  },
  {
    id: "game_over",
    label: "当游戏结束时",
    description: "当玩家即将输掉本轮游戏时触发（游戏结束条件）。非常适合实现'死亡保存'机制，如骷髅先生，或应在游戏不成功结束时发生的效果。",
    category: "特殊事件",
  },
  {
    id: "change_probability",
    label: "改变概率",
    description: "以任何方式改变概率",
    category: "特殊事件",
  },
  {
    id: "probability_result",
    label: "概率结果",
    description: "检查概率是否成功或失败（查看条件中的概率类别）",
    category: "特殊事件",
  },
  {
    id: "passive",
    label: "被动（始终激活）",
    description: "当小丑牌在游戏中时修改游戏规则或状态的永久效果。",
    category: "特殊事件",
  },
];

// Helper function to get a specific trigger by ID
export function getTriggerById(id: string): TriggerDefinition | undefined {
  return TRIGGERS.find((trigger) => trigger.id === id);
}
