import {
  ConditionParameterOption,
  ConditionTypeDefinition,
} from "../../ruleBuilder/types";
import {
  HandRaisedIcon,
  RectangleStackIcon,
  UserIcon,
  ArchiveBoxIcon,
  ReceiptPercentIcon,
  InformationCircleIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { CategoryDefinition } from "./Triggers";
import {
  RANKS,
  RANK_GROUPS,
  SUITS,
  SUIT_GROUPS,
  POKER_HANDS,
  ENHANCEMENTS,
  EDITIONS,
  SEALS,
  COMPARISON_OPERATORS,
  CARD_SCOPES,
  TAROT_CARDS,
  PLANET_CARDS,
  SPECTRAL_CARDS,
  CUSTOM_CONSUMABLES,
  CONSUMABLE_SETS,
  RARITIES,
  VOUCHERS,
  STICKERS,
  BOSS_BLINDS,
  TAGS,
} from "../BalatroUtils";

export const GENERIC_TRIGGERS: string[] = [
  "blind_selected",
  "card_scored",
  "hand_played",
  "blind_skipped",
  "boss_defeated",
  "booster_opened",
  "booster_skipped",
  "consumable_used",
  "hand_drawn",
  "first_hand_drawn",
  "shop_entered",
  "shop_exited",
  "card_discarded",
  "hand_discarded",
  "round_end",
  "shop_reroll",
  "card_held_in_hand",
  "card_held_in_hand_end_of_round",
  "after_hand_played",
  "before_hand_played",
  "joker_evaluated",
  "card_sold",
  "card_bought",
  "selling_self",
  "buying_self",
  "card_destroyed",
  "playing_card_added",
  "game_over",
  "probability_result",
  "tag_added",
];

export const PROBABILITY_IDENTIFIERS: {
  jokers: ConditionParameterOption[];
  consumables: ConditionParameterOption[];
  enhancements: ConditionParameterOption[];
  blinds: ConditionParameterOption[];
} = {
  jokers: [
    { value: "8ball", label: "8 Ball" },
    { value: "gros_michel", label: "Gros Michel" },
    { value: "business", label: "Business Card" },
    { value: "space", label: "Space Joker" },
    { value: "cavendish", label: "Cavendish" },
    { value: "parking", label: "Reserved Parking" },
    { value: "halu1", label: "Hallucination" },
    { value: "bloodstone", label: "Bloodstone" },
  ],
  consumables: [{ value: "wheel_of_fortune", label: "Wheel of Fortune" }],
  enhancements: [
    { value: "lucky_mult", label: "Lucky Card Mult" },
    { value: "lucky_money", label: "Lucky Card Money" },
    { value: "glass", label: "Glass Card" },
  ],
  blinds: [{ value: "wheel", label: "The Wheel" }],
};

export const CONDITION_CATEGORIES: CategoryDefinition[] = [
  {
    label: "手牌",
    icon: HandRaisedIcon,
  },
  {
    label: "卡牌",
    icon: RectangleStackIcon,
  },
  {
    label: "小丑牌",
    icon: RectangleStackIcon,
  },
  {
    label: "玩家资源",
    icon: UserIcon,
  },
  {
    label: "牌组与小丑牌",
    icon: ArchiveBoxIcon,
  },
  {
    label: "概率",
    icon: ReceiptPercentIcon,
  },
  {
    label: "游戏状态",
    icon: InformationCircleIcon,
  },
  {
    label: "特殊",
    icon: SparklesIcon,
  },
];

export const CONDITION_TYPES: ConditionTypeDefinition[] = [
  {
    id: "hand_type",
    label: "手牌类型",
    description: "检查扑克手牌的类型",
    applicableTriggers: [
      "hand_played",
      "card_scored",
      "after_hand_played", 
      "before_hand_played",
    ],
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
          { value: "most_played_hand", label: "最常使用的手牌" },
          { value: "least_played_hand", label: "最少使用的手牌" },
        ],
      },
    ],
    category: "手牌",
  },
  {
    id: "card_count",
    label: "卡牌数量",
    description: "检查打出手牌中的卡牌数量",
    applicableTriggers: [
      "hand_played",
      "card_scored",
      "after_hand_played",
      "before_hand_played",
    ],
    params: [
      {
        id: "card_scope",
        type: "select",
        label: "卡牌范围",
        options: [
          ...CARD_SCOPES,
          { value: "unscored", label: "未得分的卡牌" },
        ],
        default: "scoring",
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
        default: 5,
      },
    ],
    category: "手牌",
  },
  {
    id: "suit_count",
    label: "花色数量",
    description: "检查手牌中特定花色的卡牌数量",
    applicableTriggers: [
      "hand_played",
      "card_scored",
      "after_hand_played",
      "before_hand_played",
    ],
    params: [
      {
        id: "card_scope",
        type: "select",
        label: "卡牌范围",
        options: [...CARD_SCOPES],
        default: "scoring",
      },
      {
        id: "suit_type",
        type: "select",
        label: "花色类型",
        options: [
          { value: "specific", label: "特定花色" },
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
      {
        id: "quantifier",
        type: "select",
        label: "条件",
        options: [
          { value: "all", label: "所有卡牌必须为此花色" },
          { value: "none", label: "不能有任何卡牌为此花色" },
          { value: "exactly", label: "恰好 N 张卡牌为此花色" },
          { value: "at_least", label: "至少 N 张卡牌为此花色" },
          { value: "at_most", label: "至多 N 张卡牌为此花色" },
        ],
      },
      {
        id: "count",
        type: "number",
        label: "数量",
        default: 1,
        min: 1,
        showWhen: {
          parameter: "quantifier",
          values: ["exactly", "at_least", "at_most"],
        },
      },
    ],
    category: "手牌",
  },
  {
    id: "rank_count",
    label: "点数数量",
    description: "检查手牌中特定点数的卡牌数量",
    applicableTriggers: [
      "hand_played",
      "card_scored",
      "after_hand_played",
      "before_hand_played",
    ],
    params: [
      {
        id: "card_scope",
        type: "select",
        label: "卡牌范围",
        options: [...CARD_SCOPES],
        default: "scoring",
      },
      {
        id: "rank_type",
        type: "select",
        label: "点数类型",
        options: [
          { value: "specific", label: "特定点数" },
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
      {
        id: "quantifier",
        type: "select",
        label: "条件",
        options: [
          { value: "all", label: "所有卡牌必须为此点数" },
          { value: "none", label: "不能有任何卡牌为此点数" },
          { value: "exactly", label: "恰好 N 张卡牌为此点数" },
          { value: "at_least", label: "至少 N 张卡牌为此点数" },
          { value: "at_most", label: "至多 N 张卡牌为此点数" },
        ],
      },
      {
        id: "count",
        type: "number",
        label: "数量",
        default: 1,
        min: 1,
        showWhen: {
          parameter: "quantifier",
          values: ["exactly", "at_least", "at_most"],
        },
      },
    ],
    category: "手牌",
  },
  {
    id: "discarded_card_count",
    label: "弃置卡牌数量",
    description: "检查弃置手牌中的卡牌数量",
    applicableTriggers: ["card_discarded", "hand_discarded"],
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
        label: "卡牌数量",
        default: 5,
      },
    ],
    category: "手牌",
  },
  {
    id: "discarded_suit_count",
    label: "弃置花色数量",
    description: "检查弃置手牌中特定花色的卡牌数量",
    applicableTriggers: ["card_discarded", "hand_discarded"],
    params: [
      {
        id: "suit_type",
        type: "select",
        label: "花色类型",
        options: [
          { value: "specific", label: "特定花色" },
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
      {
        id: "quantifier",
        type: "select",
        label: "条件",
        options: [
          { value: "all", label: "所有卡牌必须为此花色" },
          { value: "none", label: "不能有任何卡牌为此花色" },
          { value: "exactly", label: "恰好 N 张卡牌为此花色" },
          { value: "at_least", label: "至少 N 张卡牌为此花色" },
          { value: "at_most", label: "至多 N 张卡牌为此花色" },
        ],
      },
      {
        id: "count",
        type: "number",
        label: "数量",
        default: 1,
        min: 1,
        showWhen: {
          parameter: "quantifier",
          values: ["exactly", "at_least", "at_most"],
        },
      },
    ],
    category: "手牌",
  },
  {
    id: "discarded_rank_count",
    label: "弃置点数数量",
    description: "检查弃置手牌中特定点数的卡牌数量",
    applicableTriggers: ["card_discarded", "hand_discarded"],
    params: [
      {
        id: "rank_type",
        type: "select",
        label: "点数类型",
        options: [
          { value: "specific", label: "特定点数" },
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
      {
        id: "quantifier",
        type: "select",
        label: "条件",
        options: [
          { value: "all", label: "所有卡牌必须为此点数" },
          { value: "none", label: "不能有任何卡牌为此点数" },
          { value: "exactly", label: "恰好 N 张卡牌为此点数" },
          { value: "at_least", label: "至少 N 张卡牌为此点数" },
          { value: "at_most", label: "至多 N 张卡牌为此点数" },
        ],
      },
      {
        id: "count",
        type: "number",
        label: "数量",
        default: 1,
        min: 1,
        showWhen: {
          parameter: "quantifier",
          values: ["exactly", "at_least", "at_most"],
        },
      },
    ],
    category: "手牌",
  },
  {
    id: "card_rank",
    label: "卡牌点数",
    description: "检查卡牌的点数",
    applicableTriggers: [
      "card_scored",
      "card_discarded",
      "card_held_in_hand",
      "card_held_in_hand_end_of_round",
      "card_destroyed",
    ],
    params: [
      {
        id: "rank_type",
        type: "select",
        label: "点数类型",
        options: [
          { value: "specific", label: "特定点数" },
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
    applicableTriggers: [
      "card_scored",
      "card_discarded",
      "card_held_in_hand",
      "card_held_in_hand_end_of_round",
      "card_destroyed",
    ],
    params: [
      {
        id: "suit_type",
        type: "select",
        label: "花色类型",
        options: [
          { value: "specific", label: "特定花色" },
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
    id: "card_enhancement",
    label: "卡牌增强",
    description: "检查卡牌是否具有特定增强效果",
    applicableTriggers: [
      "card_scored",
      "card_discarded",
      "card_held_in_hand",
      "card_held_in_hand_end_of_round",
      "card_destroyed",      
    ],
    params: [
      {
        id: "enhancement",
        type: "select",
        label: "增强类型",
        options: () => [
          { value: "any", label: "任意增强" },
          ...ENHANCEMENTS(),
        ],
      },
    ],
    category: "卡牌",
  },
  {
    id: "card_edition",
    label: "卡牌版本",
    description: "检查卡牌是否具有特定版本",
    applicableTriggers: [
      "card_scored",
      "card_discarded",
      "card_held_in_hand",
      "card_held_in_hand_end_of_round",
      "card_destroyed",
    ],
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
    description: "检查卡牌是否具有特定封印",
    applicableTriggers: [
      "card_scored",
      "card_discarded",
      "card_held_in_hand",
      "card_held_in_hand_end_of_round",
      "card_destroyed",
    ],
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
    description: "检查卡牌是否在手牌中的特定位置",
    applicableTriggers: [
      "card_scored",
      "card_held_in_hand",
      "card_held_in_hand_end_of_round",
      "card_discarded",
    ],
    params: [
      {
        id: "index_type",
        type: "select",
        label: "位置类型",
        options: [
          { value: "number", label: "特定编号" },
          { value: "first", label: "首张卡牌" },
          { value: "last", label: "末张卡牌" },
        ],
        default: "first",
      },
      {
        id: "index_number",
        type: "number",
        label: "位置编号",
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
    id: "player_money",
    label: "玩家金钱",
    description: "检查玩家拥有多少金钱",
    applicableTriggers: [...GENERIC_TRIGGERS, "change_probability"],
    params: [
      {
        id: "operator",
        type: "select",
        label: "比较运算符",
        options: [...COMPARISON_OPERATORS],
      },
      {
        id: "value",
        type: "number",
        label: "金额 ($)",
        default: 10,
      },
    ],
    category: "玩家资源",
  },
  {
    id: "enhancement_count",
    label: "增强牌数量",
    applicableTriggers: [
      "hand_played",
      "card_scored", 
      "after_hand_played",
      "before_hand_played",
    ],
    description: "检查手牌中拥有特定增强效果的卡牌数量",
    params: [
      {
        id: "card_scope",
        type: "select",
        label: "卡牌范围",
        options: [...CARD_SCOPES],
        default: "scoring",
      },
      {
        id: "enhancement", 
        type: "select",
        label: "增强类型",
        options: () => [
          { value: "any", label: "任意增强" },
          ...ENHANCEMENTS(),
        ],
      },
      {
        id: "operator",
        type: "select", 
        label: "比较运算符",
        options: [...COMPARISON_OPERATORS],
      },
      {
        id: "value",
        type: "number",
        label: "数量",
        default: 1,
      },
    ],
    category: "手牌",
  },
  {
    id: "edition_count",
    label: "版本牌数量",
    description: "检查手牌中拥有特定版本的卡牌数量",
    applicableTriggers: [
      "hand_played",
      "card_scored",
      "after_hand_played",
      "before_hand_played",
    ],
    params: [
      {
        id: "card_scope",
        type: "select",
        label: "卡牌范围",
        options: [...CARD_SCOPES],
        default: "scoring",
      },
      {
        id: "edition",
        type: "select",
        label: "版本类型",
        options: [{ value: "any", label: "任意版本" }, ...EDITIONS()],
      },
      {
        id: "operator",
        type: "select",
        label: "比较运算符",
        options: [...COMPARISON_OPERATORS],
      },
      {
        id: "value",
        type: "number",
        label: "数量",
        default: 1,
      },
    ],
    category: "手牌",
  },
  {
    id: "seal_count",
    label: "蜡封牌数量",
    description: "检查手牌中拥有特定蜡封的卡牌数量",
    applicableTriggers: [
      "hand_played",
      "card_scored",
      "after_hand_played",
      "before_hand_played",
    ],
    params: [
      {
        id: "card_scope",
        type: "select",
        label: "卡牌范围",
        options: [...CARD_SCOPES],
        default: "scoring",
      },
      {
        id: "seal",
        type: "select",
        label: "蜡封类型",
        options: () => [{ value: "any", label: "任意封印" }, ...SEALS()],
      },
      {
        id: "operator",
        type: "select",
        label: "比较运算符",
        options: [...COMPARISON_OPERATORS],
      },
      {
        id: "value",
        type: "number",
        label: "数量",
        default: 1,
      },
    ],
    category: "手牌",
  },
  {
    id: "poker_hand_been_played",
    label: "扑克牌型已使用",
    description: "检查当前扑克牌型是否已在本回合中使用过",
    applicableTriggers: [
      "hand_played",
      "card_scored",
      "after_hand_played",
      "before_hand_played",
    ],
    params: [],
    category: "手牌",
  },
  {
    id: "generic_compare",
    label: "通用数值比较",
    description: "使用运算符比较两个自定义数值",
    applicableTriggers: [...GENERIC_TRIGGERS, "change_probability"],
    params: [
      {
        id: "value1",
        type: "number",
        label: "第一个数值",
        default: 0,
      },
      {
        id: "operator",
        type: "select",
        label: "比较运算符",
        options: [...COMPARISON_OPERATORS],
      },
      {
        id: "value2",
        type: "number",
        label: "第二个数值",
        default: 0,
      },
    ],
    category: "特殊",
  },
  {
    id: "remaining_hands",
    label: "剩余手牌数",
    description: "检查玩家剩余的手牌次数",
    applicableTriggers: [...GENERIC_TRIGGERS, "change_probability"],
    params: [
      {
        id: "operator",
        type: "select",
        label: "比较运算符",
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
    category: "玩家资源",
  },
  {
    id: "remaining_discards",
    label: "剩余弃牌数",
    description: "检查玩家剩余的弃牌次数",
    applicableTriggers: [...GENERIC_TRIGGERS, "change_probability"],
    params: [
      {
        id: "operator",
        type: "select",
        label: "比较运算符",
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
    category: "玩家资源",
  },
  {
    id: "glass_card_destroyed",
    label: "玻璃牌被摧毁",
    description: "检查是否有玻璃牌被摧毁/破碎",
    applicableTriggers: ["card_destroyed"],
    params: [],
    category: "手牌",
  },
  {
    id: "joker_count",
    label: "小丑牌数量",
    description: "检查玩家拥有多少张小丑牌",
    applicableTriggers: [...GENERIC_TRIGGERS, "change_probability"],
    params: [
      {
        id: "operator",
        type: "select",
        label: "比较运算符",
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
    category: "牌组与小丑牌",
  },
  {
    id: "first_last_scored",
    label: "首张/末张计分牌",
    description: "检查此牌是否为特定类型的首张或末张计分牌",
    applicableTriggers: ["card_scored"],
    params: [
      {
        id: "position",
        type: "select",
        label: "位置",
        options: [
          { value: "first", label: "首张" },
          { value: "last", label: "末张" },
        ],
        default: "first",
      },
      {
        id: "check_type",
        type: "select",
        label: "检查类型",
        options: [
          { value: "any", label: "任意卡牌" },
          { value: "rank", label: "特定点数" },
          { value: "suit", label: "特定花色" },
        ],
        default: "any",
      },
      {
        id: "specific_rank",
        type: "select",
        label: "点数",
        options: [...RANKS, ...RANK_GROUPS],
        showWhen: {
          parameter: "check_type",
          values: ["rank"],
        },
      },
      {
        id: "specific_suit",
        type: "select",
        label: "花色",
        options: [...SUITS],
        showWhen: {
          parameter: "check_type",
          values: ["suit"],
        },
      },
    ],
    category: "卡牌",
  },
  {
    id: "specific_joker",
    label: "特定小丑牌",
    description: "检查你的收藏中是否有特定的小丑牌",
    applicableTriggers: [...GENERIC_TRIGGERS, "change_probability"],
    params: [
      {
        id: "operator",
        type: "select",
        label: "条件",
        options: [
          { value: "has", label: "拥有此小丑牌" },
          { value: "does_not_have", label: "未拥有此小丑牌" },
        ],
        default: "has",
      },
      {
        id: "joker_key",
        type: "text",
        label: "小丑牌标识符 (例如: joker, greedy_joker)",
        default: "joker",
      },
    ],
    category: "牌组与小丑牌",
  },
  {
    id: "internal_variable",
    label: "内部变量",
    description: "检查此小丑牌内部变量的值",
    applicableTriggers: [...GENERIC_TRIGGERS, "change_probability"],
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
        label: "比较运算符",
        options: [...COMPARISON_OPERATORS],
      },
      {
        id: "value",
        type: "number",
        label: "数值",
        default: 0,
      },
    ],
    category: "特殊",
  },
  {
    id: "check_flag",
    label: "检查标志位",
    description: "检查你模组中的特定标志位是否为真",
    applicableTriggers: [...GENERIC_TRIGGERS,],
    params: [
      {
        id: "flag_name",
        type: "text",
        label: "标志位名称",
        default: "custom_flag",
      },
    ],
    category: "特殊",
  },
  {
    id: "which_tag",
    label: "检查添加的标签",
    description: "检查添加了哪个标签",
    applicableTriggers: ["tag_added"],
    params: [
      {
        id: "operator",
        type: "select",
        label: "运算符",
        options: [
          { value: "equals", label: "等于" },
          { value: "not_equals", label: "不等于" },
        ],
        default: "equals",
      },
      {
        id: "value",
        type: "select",
        label: "标签标识",
        options: [...TAGS],
        default: "double",
      },
    ],
    category: "特殊",
  },
  {
    id: "consumable_count",
    label: "消耗品数量",
    description: "检查玩家拥有多少消耗品",
    applicableTriggers: [...GENERIC_TRIGGERS, "change_probability",],
    params: [
      {
        id: "consumable_type",
        type: "select",
        label: "消耗品类型",
        options: () => [
          { value: "any", label: "任意消耗品" },
          ...CONSUMABLE_SETS(),
        ],
        default: "any",
      },
      {
        id: "specific_card",
        type: "select",
        label: "特定卡牌",
        options: (parentValues: Record<string, unknown>) => {
          const selectedSet = parentValues?.consumable_type as string;

          if (!selectedSet || selectedSet === "any") {
            return [];
          }

          // Handle vanilla sets
          if (selectedSet === "Tarot") {
            const vanillaCards = TAROT_CARDS.map((card) => ({
              value: card.key,
              label: card.label,
            }));

            const customCards = CUSTOM_CONSUMABLES()
              .filter((consumable) => consumable.set === "Tarot")
              .map((consumable) => ({
                value: consumable.value,
                label: consumable.label,
              }));

            return [
              { value: "any", label: "集合中任意" },
              ...vanillaCards,
              ...customCards,
            ];
          }

          if (selectedSet === "Planet") {
            const vanillaCards = PLANET_CARDS.map((card) => ({
              value: card.key,
              label: card.label,
            }));

            const customCards = CUSTOM_CONSUMABLES()
              .filter((consumable) => consumable.set === "Planet")
              .map((consumable) => ({
                value: consumable.value,
                label: consumable.label,
              }));

            return [
              { value: "any", label: "集合中任意" },
              ...vanillaCards,
              ...customCards,
            ];
          }

          if (selectedSet === "Spectral") {
            const vanillaCards = SPECTRAL_CARDS.map((card) => ({
              value: card.key,
              label: card.label,
            }));

            const customCards = CUSTOM_CONSUMABLES()
              .filter((consumable) => consumable.set === "Spectral")
              .map((consumable) => ({
                value: consumable.value,
                label: consumable.label,
              }));

            return [
              { value: "any", label: "集合中任意" },
              ...vanillaCards,
              ...customCards,
            ];
          }

          // Handle custom sets
          const setKey = selectedSet.includes("_")
            ? selectedSet.split("_").slice(1).join("_")
            : selectedSet;

          const customConsumablesInSet = CUSTOM_CONSUMABLES().filter(
            (consumable) =>
              consumable.set === setKey || consumable.set === selectedSet
          );

          return [
            { value: "any", label: "集合中任意" },
            ...customConsumablesInSet,
          ];
        },
        default: "any",
      },

      {
        id: "operator",
        type: "select",
        label: "比较运算符",
        options: [...COMPARISON_OPERATORS],
      },
      {
        id: "value",
        type: "number",
        label: "消耗品数量",
        min: 0,
        default: 1,
      },
    ],
    category: "玩家资源",
  },
  {
    id: "consumable_type",
    label: "消耗品类型",
    description: "检查购买或使用的消耗品类型",
    applicableTriggers: ["card_bought", "consumable_used"],
    params: [
      {
        id: "consumable_type",
        type: "select",
        label: "消耗品类型",
        options: () => [
          { value: "any", label: "任意消耗品" },
          ...CONSUMABLE_SETS(),
        ],
        default: "any",
      },
      {
        id: "specific_card",
        type: "select",
        label: "特定卡牌",
        options: (parentValues: Record<string, unknown>) => {
          const selectedSet = parentValues?.consumable_type as string;

          if (!selectedSet || selectedSet === "any") {
            return [];
          }

          // Handle vanilla sets
          if (selectedSet === "Tarot") {
            const vanillaCards = TAROT_CARDS.map((card) => ({
              value: card.key,
              label: card.label,
            }));

            const customCards = CUSTOM_CONSUMABLES()
              .filter((consumable) => consumable.set === "Tarot")
              .map((consumable) => ({
                value: consumable.value,
                label: consumable.label,
              }));

            return [
              { value: "any", label: "集合中任意" },
              ...vanillaCards,
              ...customCards,
            ];
          }

          if (selectedSet === "Planet") {
            const vanillaCards = PLANET_CARDS.map((card) => ({
              value: card.key,
              label: card.label,
            }));

            const customCards = CUSTOM_CONSUMABLES()
              .filter((consumable) => consumable.set === "Planet")
              .map((consumable) => ({
                value: consumable.value,
                label: consumable.label,
              }));

            return [
              { value: "any", label: "集合中任意" },
              ...vanillaCards,
              ...customCards,
            ];
          }

          if (selectedSet === "Spectral") {
            const vanillaCards = SPECTRAL_CARDS.map((card) => ({
              value: card.key,
              label: card.label,
            }));

            const customCards = CUSTOM_CONSUMABLES()
              .filter((consumable) => consumable.set === "Spectral")
              .map((consumable) => ({
                value: consumable.value,
                label: consumable.label,
              }));

            return [
              { value: "any", label: "集合中任意" },
              ...vanillaCards,
              ...customCards,
            ];
          }

          // Handle custom sets
          const setKey = selectedSet.includes("_")
            ? selectedSet.split("_").slice(1).join("_")
            : selectedSet;

          const customConsumablesInSet = CUSTOM_CONSUMABLES().filter(
            (consumable) =>
              consumable.set === setKey || consumable.set === selectedSet
          );

          return [
            { value: "any", label: "集合中任意" },
            ...customConsumablesInSet,
          ];
        },
        default: "any",
      },
    ],
    category: "玩家资源",
  },
  {
    id: "hand_level",
    label: "牌型等级",
    description: "检查扑克牌型的等级",
    applicableTriggers: [...GENERIC_TRIGGERS, "change_probability"],
    params: [
      {
        id: "operator",
        type: "select",
        label: "比较运算符",
        options: [...COMPARISON_OPERATORS],
      },
      {
        id: "hand_selection",
        type: "select",
        label: "牌型选择",
        options: [
          { value: "played", label: "已出牌型" },
          { value: "specific", label: "特定牌型" },
          { value: "any", label: "任意牌型" },
        ],
        default: "any",
      },
      {
        id: "specific_hand",
        type: "select",
        label: "特定牌型",
        options: [...POKER_HANDS],
        showWhen: {
          parameter: "hand_selection",
          values: ["specific"],
        },
      },
      {
        id: "value",
        type: "number",
        label: "牌型等级",
        min: 0,
        default: 1,
      },
    ],
    category: "游戏状态",
  },
  {
    id: "blind_type",
    label: "盲注类型",
    description: "检查当前盲注的类型",
    applicableTriggers: [...GENERIC_TRIGGERS, "change_probability"],
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
    category: "游戏状态",
  },
  {
    id: "boss_blind_type",
    label: "首领盲注类型",
    description: "检查当前首领盲注的类型",
    applicableTriggers: [...GENERIC_TRIGGERS, "blind_selected"],
    params: [
      {
        id: "operator",
        type: "select",
        label: "运算符",
        options: [
          { value: "equals", label: "等于" },
          { value: "not_equals", label: "不等于" },
        ],
        default: "equals",
      },
      {
        id: "value",
        type: "select",
        label: "首领盲注",
        options: [...BOSS_BLINDS],
        default: "bl_hook",
      },
    ],
    category: "游戏状态",
  },
  {
    id: "blind_name",
    label: "盲注名称",
    description: "检查当前盲注",
    applicableTriggers: [...GENERIC_TRIGGERS, "blind_selected"],
    params: [
      {
        id: "operation",
        type: "select",
        label: "模式",
        options: [
          { value: "equals", label: "等于" },
          { value: "not_equals", label: "不等于" },
        ],
        default: "equals",
      },
      {
        id: "value",
        type: "select",
        label: "盲注",
        options: [
          { value: "Small Blind", label: "小盲注" },
          { value: "Big Blind", label: "大盲注" },
          { value: "The Hook", label: "钩子" },
          { value: "The Ox", label: "公牛" },
          { value: "The House", label: "房屋" },
          { value: "The Wall", label: "围墙" },
          { value: "The Wheel", label: "车轮" },
          { value: "The Arm", label: "手臂" },
          { value: "The Club", label: "梅花" },
          { value: "The Fish", label: "鱼" },
          { value: "The Psychic", label: "灵媒" },
          { value: "The Goad", label: "挑衅" },
          { value: "The Water", label: "水" },
          { value: "The Window", label: "窗户" },
          { value: "The Manacle", label: "镣铐" },
          { value: "The Eye", label: "眼睛" },
          { value: "The Mouth", label: "嘴巴" },
          { value: "The Plant", label: "植物" },
          { value: "The Serpent", label: "巨蟒" },
          { value: "The Pillar", label: "支柱" },
          { value: "The Needle", label: "针" },
          { value: "The Head", label: "头部" },
          { value: "The Tooth", label: "牙齿" },
          { value: "The Flint", label: "燧石" },
          { value: "The Mark", label: "标记" },
          { value: "Amber Acorn", label: "琥珀之实" },
          { value: "Verdant Leaf", label: "翠绿之叶" },
          { value: "Violet Vessel", label: "靛紫之杯" },
          { value: "Crimson Heart", label: "绯红之心" },
          { value: "Cerulean Bell", label: "蔚蓝之铃" },
        ],
        default: "小盲注",
      },
    ],
    category: "游戏状态",
  },
  {
    id: "check_blind_requirements",
    label: "盲注要求",
    description: "检查当前基础手牌分数相对于盲注要求的百分比（例如：110% 表示超出盲注要求10%，超过100%的值检查是否已超过盲注）",
    applicableTriggers: [
      "after_hand_played",
      "before_hand_played",
      "hand_played",
      "card_scored",
      "round_end",
      "hand_discarded",
      "card_discarded",
      "selling_self",
      "card_sold",
      "hand_drawn",
      "first_hand_drawn",
      "game_over",
      "card_destroyed",
    ],
    params: [
      {
        id: "operator",
        type: "select",
        label: "比较运算符",
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
    category: "游戏状态",
  },
  {
    id: "joker_selected",
    label: "小丑牌选中状态",
    description: "检查小丑牌是否被选中/高亮显示",
    applicableTriggers:  [...GENERIC_TRIGGERS],
    params: [],
    category: "牌组与小丑牌",
  },
  {
    id: "voucher_redeemed",
    label: "代金券已兑换",
    description: "检查在本次游戏中是否兑换了特定的代金券",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [
      {
        id: "voucher",
        type: "select",
        label: "代金券",
        options: [...VOUCHERS()],
        default: "v_overstock_norm",
      },
    ],
    category: "游戏状态",
  },
  {
    id: "lucky_card_triggered",
    label: "幸运牌触发",
    description: "检查计分时是否触发了幸运牌的特殊效果",
    applicableTriggers: ["card_scored"],
    params: [],
    category: "卡牌",
  },
  {
    id: "triggered_boss_blind",
    label: "首领盲注触发",
    description: "检查当前首领盲注的效果是否已被触发",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [],
    category: "游戏状态",
  },
  {
    id: "ante_level",
    label: "底注等级",
    description: "检查当前底注等级",
    applicableTriggers: [...GENERIC_TRIGGERS, "change_probability"],
    params: [
      {
        id: "operator",
        type: "select",
        label: "比较运算符",
        options: [...COMPARISON_OPERATORS],
      },
      {
        id: "value",
        type: "number",
        label: "底注等级",
        min: 1,
        default: 1,
      },
    ],
    category: "游戏状态",
  },
  {
    id: "first_played_hand",
    label: "首轮出牌",
    description: "检查这是否是当前回合中首次出的手牌",
    applicableTriggers: [
      "hand_played",
      "card_scored",
      "card_discarded",
      "after_hand_played",
      "before_hand_played",
    ],
    params: [],
    category: "游戏状态",
  },
  {
    id: "first_discarded_hand",
    label: "首轮弃牌",
    description: "检查这是否是当前回合中首次弃掉的手牌",
    applicableTriggers: ["card_discarded", "hand_discarded"],
    params: [],
    category: "游戏状态",
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
    category: "游戏状态",
  },
  {
    id: "hand_size",
    label: "手牌数量",
    description: "检查当前手牌数量",
    applicableTriggers: [...GENERIC_TRIGGERS, "change_probability"],
    params: [
      {
        id: "operator",
        type: "select",
        label: "比较运算符",
        options: [...COMPARISON_OPERATORS],
      },
      {
        id: "value",
        type: "number",
        label: "手牌数量",
        default: 8,
      },
    ],
    category: "玩家资源",
  },
  {
    id: "deck_size",
    label: "牌组大小",
    description: "检查牌组的大小",
    applicableTriggers: [...GENERIC_TRIGGERS, "change_probability"],
    params: [
      {
        id: "size_type",
        type: "select",
        label: "大小类型",
        options: [
          { value: "remaining", label: "牌组剩余" },
          { value: "total", label: "牌组总数" },
        ],
        default: "remaining",
      },
      {
        id: "operator",
        type: "select",
        label: "比较运算符",
        options: [...COMPARISON_OPERATORS],
      },
      {
        id: "value",
        type: "number",
        label: "卡牌数量",
        default: 52,
      },
    ],
    category: "牌组与小丑牌",
  },
  {
    id: "deck_count",
    label: "牌组统计",
    description: "按属性统计整个牌组中的卡牌数量",
    applicableTriggers: [...GENERIC_TRIGGERS, "change_probability"],
    params: [
      {
        id: "property_type",
        type: "select",
        label: "属性类型",
        options: [
          { value: "rank", label: "点数" },
          { value: "suit", label: "花色" },
          { value: "enhancement", label: "增强" },
          { value: "seal", label: "封印" },
          { value: "edition", label: "版本" },
        ],
        default: "enhancement",
      },
      {
        id: "rank",
        type: "select",
        label: "点数",
        options: [{ value: "any", label: "任意点数" }, ...RANKS],
        showWhen: {
          parameter: "property_type",
          values: ["rank"],
        },
      },
      {
        id: "suit",
        type: "select",
        label: "花色",
        options: [
          { value: "any", label: "任意花色" },
          ...SUIT_GROUPS,
          ...SUITS,
        ],
        showWhen: {
          parameter: "property_type",
          values: ["suit"],
        },
      },
      {
        id: "enhancement",
        type: "select",
        label: "增强",
        options: () => [
          { value: "any", label: "任意增强" },
          { value: "none", label: "无增强" },
          ...ENHANCEMENTS(),
        ],
        showWhen: {
          parameter: "property_type",
          values: ["enhancement"],
        },
      },
      {
        id: "seal",
        type: "select",
        label: "封印",
        options: () => [
          { value: "any", label: "任意封印" },
          { value: "none", label: "无封印" },
          ...SEALS(),
        ],
        showWhen: {
          parameter: "property_type",
          values: ["seal"],
        },
      },
      {
        id: "edition",
        type: "select",
        label: "版本",
        options: [
          { value: "any", label: "任意版本" },
          { value: "none", label: "无版本" },
          ...EDITIONS(),
        ],
        showWhen: {
          parameter: "property_type",
          values: ["edition"],
        },
      },
      {
        id: "operator",
        type: "select",
        label: "比较运算符",
        options: [...COMPARISON_OPERATORS],
      },
      {
        id: "value",
        type: "number",
        label: "数量",
        default: 1,
      },
    ],
    category: "牌组与小丑牌",
  },
  {
    id: "probability_succeeded",
    label: "概率成功",
    description: "检查概率是否成功或失败",
    applicableTriggers: ["probability_result"],
    params: [
      {
        id: "status",
        type: "select",
        label: "状态",
        options: [
          { value: "succeeded", label: "成功" },
          { value: "failed", label: "失败" },
        ],
        default: "succeeded",
      },
    ],
    category: "概率",
  },
  {
    id: "probability_identifier",
    label: "检测概率来源",
    description: "检查触发概率掷骰的卡牌",
    applicableTriggers: ["change_probability", "probability_result"],
    params: [
      {
        id: "mode",
        type: "select",
        label: "模式",
        options: [
          { value: "vanilla", label: "原版" },
          { value: "custom", label: "自定义" },
        ],
        default: "vanilla",
      },
      {
        id: "property_type",
        type: "select",
        label: "属性类型",
        options: [
          { value: "jokers", label: "小丑牌" },
          { value: "consumables", label: "消耗品" },
          { value: "enhancements", label: "增强牌" },
          { value: "blinds", label: "盲注" },
        ],
        default: "jokers",
        showWhen: {
          parameter: "mode",
          values: ["vanilla"],
        },
      },
      {
        id: "specific_card",
        type: "select",
        label: "特定卡牌",
        options: (parentValues) => {
          switch (parentValues?.property_type) {
            case "jokers":
              return [...PROBABILITY_IDENTIFIERS.jokers];
            case "consumables":
              return [...PROBABILITY_IDENTIFIERS.consumables];
            case "enhancements":
              return [...PROBABILITY_IDENTIFIERS.enhancements];
            case "blinds":
              return [...PROBABILITY_IDENTIFIERS.blinds];
            default:
              return [...PROBABILITY_IDENTIFIERS.jokers];
          }
        },
        default: "8ball",
        showWhen: {
          parameter: "mode",
          values: ["vanilla"],
        },
      },
      {
        id: "card_key",
        type: "text",
        label: "卡牌标识符 (小丑牌: j_modprefix_key, 消耗品: c_modprefix_key)",
        showWhen: {
          parameter: "mode",
          values: ["custom"],
        },
      },
    ],
    category: "概率",
  },
  {
    id: "probability_part_compare",
    label: "概率部分比较",
    description: "比较分子或分母与自定义数值",
    applicableTriggers: ["change_probability", "probability_result"],
    params: [
      {
        id: "part",
        type: "select",
        label: "分子或分母",
        options: [
          { value: "numerator", label: "分子" },
          { value: "denominator", label: "分母" },
        ],
        default: "numerator",
      },
      {
        id: "operator",
        type: "select",
        label: "比较运算符",
        options: [...COMPARISON_OPERATORS],
      },
      {
        id: "value",
        type: "number",
        label: "第二个数值",
        default: 1,
      },
    ],
    category: "概率",
  },
  {
    id: "joker_specific",
    label: "特定小丑牌",
    description: "检查被评估小丑牌的标识符",
    applicableTriggers: ["joker_evaluated"],
    params: [
      {
        id: "joker_key",
        type: "text",
        label: "小丑牌标识符 ( [modprefix]_joker )",
        default: "joker",
      },
    ],
    category: "小丑牌",
  },
  {
    id: "joker_rarity",
    label: "小丑牌稀有度",
    description: "检查被评估小丑牌的稀有度",
    applicableTriggers: ["joker_evaluated"],
    params: [
      {
        id: "rarity",
        type: "select",
        label: "稀有度",
        options: () => [...RARITIES()],
        default: "common",
      },
    ],
    category: "小丑牌",
  },
  {
    id: "joker_index",
    label: "小丑牌位置",
    description: "检查被评估小丑牌的位置",
    applicableTriggers: ["joker_evaluated"],
    params: [
      {
        id: "position",
        type: "select",
        label: "位置",
        options: [
          { value: "first", label: "首个位置" },
          { value: "last", label: "末尾位置" },
          { value: "specific", label: "特定索引" },
        ],
        default: "first",
      },
      {
        id: "specific_index",
        type: "number",
        label: "小丑牌索引 (1-5)",
        default: 1,
        showWhen: {
          parameter: "position",
          values: ["specific"],
        },
      },
    ],
    category: "小丑牌",
  },
  {
    id: "this_joker_index",
    label: "此小丑牌位置",
    description: "检查此小丑牌的位置",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [
      {
        id: "position",
        type: "select",
        label: "位置",
        options: [
          { value: "first", label: "首个位置" },
          { value: "last", label: "末尾位置" },
          { value: "specific", label: "特定索引" },
        ],
        default: "first",
      },
      {
        id: "specific_index",
        type: "number",
        label: "小丑牌索引 (1-5)",
        default: 1,
        showWhen: {
          parameter: "position",
          values: ["specific"],
        },
      },
    ],
    category: "牌组与小丑牌",
  },
  {
    id: "joker_sticker",
    label: "小丑牌贴纸",
    description: "检查被评估小丑牌的贴纸",
    applicableTriggers: ["joker_evaluated"],
    params: [
      {
        id: "sticker",
        type: "select",
        label: "贴纸",
        options: [...STICKERS.map(({ value, label }) => ({ value, label }))],
        default: "eternal",
      },
    ],
    category: "小丑牌",
  },
  {
    id: "this_joker_sticker",
    label: "此小丑牌贴纸",
    description: "检查此小丑牌的贴纸",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [
      {
        id: "sticker",
        type: "select",
        label: "贴纸",
        options: [...STICKERS.map(({ value, label }) => ({ value, label }))],
        default: "eternal",
      },
    ],
    category: "牌组与小丑牌",
  },
  {
    id: "joker_flipped",
    label: "小丑牌已翻转",
    description: "检查被评估小丑牌是否已翻转（背面朝上）",
    applicableTriggers: ["joker_evaluated"],
    params: [],
    category: "小丑牌",
  },
  {
    id: "this_joker_flipped",
    label: "此小丑牌已翻转",
    description: "检查此小丑牌是否已翻转（背面朝上）",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [],
    category: "牌组与小丑牌",
  },
];

export function getConditionTypeById(
  id: string
): ConditionTypeDefinition | undefined {
  return CONDITION_TYPES.find((conditionType) => conditionType.id === id);
}

export function getConditionsForTrigger(
  triggerId: string
): ConditionTypeDefinition[] {
  return CONDITION_TYPES.filter(
    (condition) =>
      condition.applicableTriggers &&
      condition.applicableTriggers.includes(triggerId)
  );
}
