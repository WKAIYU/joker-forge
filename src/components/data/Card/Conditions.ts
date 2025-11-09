import { ConditionTypeDefinition } from "../../ruleBuilder/types";
import {
  UserIcon,
  InformationCircleIcon,
  IdentificationIcon,
  ArchiveBoxIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { CategoryDefinition } from "../Jokers/Triggers";
import {
  RANKS,
  RANK_GROUPS,
  SUITS,
  SUIT_GROUPS,
  COMPARISON_OPERATORS,
  POKER_HANDS,
  EDITIONS,
  SEALS,
  RARITIES,
  VOUCHERS,
  CARD_SCOPES,
} from "../../data/BalatroUtils";
import { GENERIC_TRIGGERS } from "./Triggers";

export const CARD_GENERIC_TRIGGERS: string[] = ["card_scored", "card_held"];

export const CARD_CONDITION_CATEGORIES: CategoryDefinition[] = [
  {
    label: "玩家状态",
    icon: UserIcon,
  },
  {
    label: "游戏上下文",
    icon: InformationCircleIcon,
  },
  {
    label: "卡牌",
    icon: IdentificationIcon,
  },
  {
    label: "牌组 & 小丑牌",
    icon: ArchiveBoxIcon,
  },
  {
    label: "特殊",
    icon: SparklesIcon,
  },
];

export const CARD_CONDITION_TYPES: ConditionTypeDefinition[] = [
  {
    id: "player_money",
    label: "玩家金钱",
    description: "检查玩家当前金钱",
    applicableTriggers: GENERIC_TRIGGERS,
    params: [
      {
        id: "operator",
        type: "select",
        label: "运算符",
        options: [...COMPARISON_OPERATORS],
        default: "greater_equals",
      },
      {
        id: "value",
        type: "number",
        label: "金额",
        default: 5,
        min: 0,
      },
    ],
    category: "玩家状态",
  },
  {
    id: "card_rank",
    label: "卡牌点数",
    description: "检查卡牌的点数",
    applicableTriggers: GENERIC_TRIGGERS,
    params: [
      {
        id: "rank_type",
        type: "select",
        label: "点数类型",
        options: [
          { value: "specific", label: "具体点数" },
          { value: "group", label: "点数组" },
        ],
      },
      {
        id: "specific_rank",
        type: "select",
        label: "点数",
        options: [...RANKS],
        showWhen: {
          parameter: "rank_type",
          values: ["specific"],
        },
      },
      {
        id: "rank_group",
        type: "select",
        label: "点数组",
        options: [...RANK_GROUPS],
        showWhen: {
          parameter: "rank_type",
          values: ["group"],
        },
      },
    ],
    category: "卡牌",
  },
  {
    id: "card_suit",
    label: "卡牌花色",
    description: "检查卡牌的花色",
    applicableTriggers: GENERIC_TRIGGERS,
    params: [
      {
        id: "suit_type",
        type: "select",
        label: "花色类型",
        options: [
          { value: "specific", label: "具体花色" },
          { value: "group", label: "花色组" },
        ],
      },
      {
        id: "specific_suit",
        type: "select",
        label: "花色",
        options: [...SUITS],
        showWhen: {
          parameter: "suit_type",
          values: ["specific"],
        },
      },
      {
        id: "suit_group",
        type: "select",
        label: "花色组",
        options: [...SUIT_GROUPS],
        showWhen: {
          parameter: "suit_type",
          values: ["group"],
        },
      },
    ],
    category: "卡牌",
  },
  {
    id: "card_edition",
    label: "卡牌版本",
    description: "检查卡牌是否有特定版本",
    applicableTriggers: GENERIC_TRIGGERS,
    params: [
      {
        id: "edition",
        type: "select",
        label: "版本类型",
        options: [
          { value: "any", label: "任意版本" },
          { value: "none", label: "无版本" },
          ...EDITIONS(),
        ],
      },
    ],
    category: "卡牌",
  },
  {
    id: "card_seal",
    label: "卡牌封印",
    description: "检查卡牌是否有特定封印",
    applicableTriggers: GENERIC_TRIGGERS,
    params: [
      {
        id: "seal",
        type: "select",
        label: "封印类型",
        options: () => [{ value: "any", label: "任意封印" }, ...SEALS()],
      },
    ],
    category: "卡牌",
  },
  {
    id: "card_index",
    label: "卡牌位置",
    description: "检查卡牌是否在得分手牌中的特定位置",
    applicableTriggers: GENERIC_TRIGGERS,
    params: [
      {
        id: "index_type",
        type: "select",
        label: "位置类型",
        options: [
          { value: "number", label: "具体数字" },
          { value: "first", label: "第一张卡" },
          { value: "last", label: "最后一张卡" },
        ],
        default: "first",
      },
      {
        id: "index_number",
        type: "number",
        label: "位置数字",
        default: 1,
        min: 1,
        showWhen: {
          parameter: "index_type",
          values: ["number"],
        },
      },
    ],
    category: "卡牌",
  },
  {
    id: "blind_type",
    label: "盲注类型",
    description: "检查当前盲注的类型",
    applicableTriggers: GENERIC_TRIGGERS,
    params: [
      {
        id: "blind_type",
        type: "select",
        label: "盲注类型",
        options: [
          { value: "small", label: "小盲注" },
          { value: "big", label: "大盲注" },
          { value: "boss", label: "首领盲注" },
        ],
      },
    ],
    category: "游戏上下文",
  },
  {
    id: "ante_level",
    label: "盲注等级",
    description: "检查当前盲注等级",
    applicableTriggers: GENERIC_TRIGGERS,
    params: [
      {
        id: "operator",
        type: "select",
        label: "运算符",
        options: [...COMPARISON_OPERATORS],
      },
      {
        id: "value",
        type: "number",
        label: "盲注等级",
        min: 1,
        default: 1,
      },
    ],
    category: "游戏上下文",
  },
  {
    id: "hand_size",
    label: "手牌大小",
    description: "检查当前手牌大小",
    applicableTriggers: GENERIC_TRIGGERS,
    params: [
      {
        id: "operator",
        type: "select",
        label: "运算符",
        options: [...COMPARISON_OPERATORS],
      },
      {
        id: "value",
        type: "number",
        label: "手牌大小",
        default: 8,
      },
    ],
    category: "玩家状态",
  },
  {
    id: "remaining_hands",
    label: "剩余手牌数",
    description: "检查玩家剩余手牌数量",
    applicableTriggers: GENERIC_TRIGGERS,
    params: [
      {
        id: "operator",
        type: "select",
        label: "运算符",
        options: [...COMPARISON_OPERATORS],
      },
      {
        id: "value",
        type: "number",
        label: "手牌数量",
        min: 0,
        default: 1,
      },
    ],
    category: "玩家状态",
  },
  {
    id: "remaining_discards",
    label: "剩余弃牌数",
    description: "检查玩家剩余弃牌数量",
    applicableTriggers: GENERIC_TRIGGERS,
    params: [
      {
        id: "operator",
        type: "select",
        label: "运算符",
        options: [...COMPARISON_OPERATORS],
      },
      {
        id: "value",
        type: "number",
        label: "弃牌数量",
        min: 0,
        default: 1,
      },
    ],
    category: "玩家状态",
  },
  {
    id: "first_played_hand",
    label: "首次出手牌",
    description: "检查这是否是当前回合中第一次出手牌",
    applicableTriggers: GENERIC_TRIGGERS,
    params: [],
    category: "游戏上下文",
  },
  {
    id: "poker_hand",
    label: "扑克手牌类型",
    description: "检查所出扑克手牌的类型",
    applicableTriggers: GENERIC_TRIGGERS,
    params: [
      {
        id: "card_scope",
        type: "select",
        label: "卡牌范围",
        options: [...CARD_SCOPES],
        default: "scoring",
      },
      {
        id: "operator",
        type: "select",
        label: "运算符",
        options: [
          { value: "contains", label: "包含" },
          { value: "equals", label: "等于" },
        ],
        default: "contains",
      },
      {
        id: "value",
        type: "select",
        label: "手牌类型",
        options: [
          ...POKER_HANDS,
          { value: "most_played_hand", label: "最常出手牌" },
          { value: "least_played_hand", label: "最少出手牌" },
        ],
      },
    ],
    category: "游戏上下文",
  },
  {
    id: "hand_level",
    label: "手牌等级",
    description: "检查扑克手牌的等级",
    applicableTriggers: GENERIC_TRIGGERS,
    params: [
      {
        id: "operator",
        type: "select",
        label: "运算符",
        options: [...COMPARISON_OPERATORS],
      },
      {
        id: "hand_selection",
        type: "select",
        label: "手牌选择",
        options: [
          { value: "played", label: "所出手牌" },
          { value: "specific", label: "特定手牌" },
          { value: "any", label: "任意手牌" },
        ],
        default: "any",
      },
      {
        id: "specific_hand",
        type: "select",
        label: "特定手牌",
        options: [...POKER_HANDS],
        showWhen: {
          parameter: "hand_selection",
          values: ["specific"],
        },
      },
      {
        id: "value",
        type: "number",
        label: "手牌等级",
        min: 0,
        default: 1,
      },
    ],
    category: "游戏上下文",
  },
  {
    id: "blind_requirements",
    label: "盲注需求",
    description: "检查盲注需求的满足百分比",
    applicableTriggers: GENERIC_TRIGGERS,
    params: [
      {
        id: "operator",
        type: "select",
        label: "运算符",
        options: [...COMPARISON_OPERATORS],
        default: "greater_equals",
      },
      {
        id: "percentage",
        type: "number",
        label: "百分比 (%)",
        default: 25,
      },
    ],
    category: "游戏上下文",
  },
  {
    id: "joker_count",
    label: "小丑牌数量",
    description: "检查玩家拥有多少张小丑牌",
    applicableTriggers: GENERIC_TRIGGERS,
    params: [
      {
        id: "operator",
        type: "select",
        label: "运算符",
        options: [...COMPARISON_OPERATORS],
      },
      {
        id: "rarity",
        type: "select",
        label: "稀有度",
        options: () => [{ value: "any", label: "任意稀有度" }, ...RARITIES()],
        default: "any",
      },
      {
        id: "value",
        type: "number",
        label: "小丑牌数量",
        min: 0,
        default: 1,
      },
    ],
    category: "牌组 & 小丑牌",
  },
  {
    id: "specific_joker",
    label: "特定小丑牌",
    description: "检查你的收藏中是否有特定小丑牌",
    applicableTriggers: GENERIC_TRIGGERS,
    params: [
      {
        id: "operator",
        type: "select",
        label: "条件",
        options: [
          { value: "has", label: "拥有此小丑牌" },
          { value: "does_not_have", label: "不拥有此小丑牌" },
        ],
        default: "has",
      },
      {
        id: "joker_key",
        type: "text",
        label: "小丑牌键（例如：j_joker、j_greedy_joker 或仅 joker）",
        default: "j_joker",
      },
    ],
    category: "牌组 & 小丑牌",
  },
  {
    id: "deck_size",
    label: "牌组大小",
    description: "检查牌组的大小",
    applicableTriggers: GENERIC_TRIGGERS,
    params: [
      {
        id: "size_type",
        type: "select",
        label: "大小类型",
        options: [
          { value: "remaining", label: "牌组中剩余" },
          { value: "total", label: "总牌组大小" },
        ],
        default: "remaining",
      },
      {
        id: "operator",
        type: "select",
        label: "运算符",
        options: [...COMPARISON_OPERATORS],
      },
      {
        id: "value",
        type: "number",
        label: "卡牌数量",
        default: 52,
      },
    ],
    category: "牌组 & 小丑牌",
  },
  {
    id: "voucher_redeemed",
    label: "已兑换优惠券",
    description: "检查在本轮中是否兑换了特定优惠券",
    applicableTriggers: GENERIC_TRIGGERS,
    params: [
      {
        id: "voucher",
        type: "select",
        label: "优惠券",
        options: [...VOUCHERS()],
        default: "v_overstock_norm",
      },
    ],
    category: "游戏上下文",
  },
  {
    id: "triggered_boss_blind",
    label: "首领盲注已触发",
    description: "检查当前首领盲注的效果是否已触发",
    applicableTriggers: GENERIC_TRIGGERS,
    params: [],
    category: "游戏上下文",
  },
  {
    id: "system_condition",
    label: "玩家操作系统",
    description: "检查玩家使用的操作系统",
    applicableTriggers: GENERIC_TRIGGERS,
    params: [
      {
        id: "system",
        type: "select",
        label: "操作系统",
        options: [
          {value: "Windows",label: "Windows"},
          {value: "OS X",label: "OS X"},
          {value: "Linux",label: "Linux"},
          {value: "Android",label: "Android"},
          {value: "iOS",label: "iOS"},
        ],
        default: "Windows",
      },
    ],
    category: "游戏上下文",
  },
  {
    id: "generic_compare",
    label: "通用比较",
    description: "使用运算符比较两个自定义值",
    applicableTriggers: [...GENERIC_TRIGGERS, "change_probability"],
    params: [
      {
        id: "value1",
        type: "number",
        label: "第一个值",
        default: 0,
      },
      {
        id: "operator",
        type: "select",
        label: "运算符",
        options: [...COMPARISON_OPERATORS],
      },
      {
        id: "value2",
        type: "number",
        label: "第二个值",
        default: 0,
      },
    ],
    category: "特殊",
  },
  {
    id: "internal_variable",
    label: "内部变量",
    description: "检查此小丑牌的内部变量值",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [
      {
        id: "variable_name",
        type: "text",
        label: "变量名称",
        default: "var1",
      },
      {
        id: "operator",
        type: "select",
        label: "运算符",
        options: [...COMPARISON_OPERATORS],
      },
      {
        id: "value",
        type: "number",
        label: "值",
        default: 0,
      },
    ],
    category: "特殊",
  },
  {
    id: "check_flag",
    label: "检查标志",
    description: "检查你的模组中的特定标志是否为真",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [
      {
        id: "flag_name",
        type: "text",
        label: "标志名称",
        default: "custom_flag",
      },
    ],
    category: "特殊",
  },
];

export function getCardConditionsForTrigger(
  triggerId: string
): ConditionTypeDefinition[] {
  return CARD_CONDITION_TYPES.filter((condition) =>
    condition.applicableTriggers?.includes(triggerId)
  );
}

export function getCardConditionTypeById(
  id: string
): ConditionTypeDefinition | undefined {
  return CARD_CONDITION_TYPES.find((condition) => condition.id === id);
}
