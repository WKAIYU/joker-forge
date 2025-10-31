import { EffectTypeDefinition } from "../../ruleBuilder/types";
import {
  ChartBarIcon,
  BanknotesIcon,
  Cog6ToothIcon,
  ReceiptPercentIcon,
  PencilSquareIcon,
  SparklesIcon,
  CakeIcon,
  UserGroupIcon,
  VariableIcon,
} from "@heroicons/react/24/outline";
import { CategoryDefinition } from "./Triggers";
import { GENERIC_TRIGGERS } from "./Conditions";
import {
  RANKS,
  SUITS,
  ENHANCEMENTS,
  EDITIONS,
  SEALS,
  POKER_HANDS,
  TAROT_CARDS,
  PLANET_CARDS,
  SPECTRAL_CARDS,
  ALL_CONSUMABLES,
  RARITIES,
  CONSUMABLE_TYPES,
  TAGS,
  CUSTOM_CONSUMABLES,
  CONSUMABLE_SETS,
  STICKERS,
  VOUCHERS,
} from "../BalatroUtils";

export const EFFECT_CATEGORIES: CategoryDefinition[] = [
  {
    label: "计分",           // 统一为中文
    icon: ChartBarIcon,
  },
  {
    label: "经济",           // 统一为中文
    icon: BanknotesIcon,
  },
  {
    label: "卡牌效果",        // 原 Card Effects
    icon: PencilSquareIcon,
  },
  {
    label: "消耗品",          // 统一为中文
    icon: CakeIcon,
  },
  {
    label: "小丑牌",          // 统一为中文
    icon: UserGroupIcon,
  },
  {
    label: "游戏规则",        // 统一为中文
    icon: Cog6ToothIcon,
  },
  {
    label: "概率",           // 原 Probability
    icon: ReceiptPercentIcon,
  },
  {
    label: "变量",           // 原 Variables
    icon: VariableIcon,
  },
  {
    label: "特殊",           // 统一为中文
    icon: SparklesIcon,
  },  
];

export const EFFECT_TYPES: EffectTypeDefinition[] = [
  {
    id: "add_chips",
    label: "添加筹码",
    description: "向手牌分数添加固定数量的筹码",
    applicableTriggers: [
      "hand_played",
      "card_scored",
      "card_held_in_hand",
      "joker_evaluated",
    ],
    params: [
      {
        id: "value",
        type: "number",
        label: "数量",
        default: 10,
        min: 0,
      },
    ],
    category: "计分",
  },
  {
    id: "apply_x_chips",
    label: "应用筹码乘数",
    description: "将筹码乘以该数值",
    applicableTriggers: [
      "hand_played",
      "card_scored",
      "card_held_in_hand",
      "joker_evaluated",
    ],
    params: [
      {
        id: "value",
        type: "number",
        label: "乘数",
        default: 1.5,
      },
    ],
    category: "计分",
  },
  {
    id: "apply_exp_chips",
    label: "应用指数筹码 (^Chips)",
    description: "应用指数筹码 (echips) - 需要 TALISMAN 模组",
    applicableTriggers: [
      "hand_played",
      "card_scored",
      "card_held_in_hand",
      "joker_evaluated",
    ],
    params: [
      {
        id: "value",
        type: "number",
        label: "指数筹码数值",
        default: 1.1,
      },
    ],
    category: "计分",
  },
  {
    id: "apply_hyper_chips",
    label: "应用超级筹码",
    description: "应用 (n)^ 筹码 - 需要 TALISMAN 模组",
    applicableTriggers: [
      "hand_played",
      "card_scored",
      "card_held_in_hand",
      "joker_evaluated",
    ],
    params: [
      {
        id: "arrows",
        type: "number",
        label: "箭头数量",
        default: 1,
        min: 1
      },
      {
        id: "value",
        type: "number",
        label: "超级筹码数值",
        default: 1.1,
      },
    ],
    category: "计分",
  },
  {
    id: "add_mult",
    label: "添加倍数",
    description: "向手牌分数添加固定数量的倍数",
    applicableTriggers: [
      "hand_played",
      "card_scored",
      "card_held_in_hand",
      "joker_evaluated",
    ],
    params: [
      {
        id: "value",
        type: "number",
        label: "数量",
        default: 5,
        min: 0,
      },
    ],
    category: "计分",
  },
  {
    id: "apply_x_mult",
    label: "应用倍数乘数",
    description: "将分数乘以该数值",
    applicableTriggers: [
      "hand_played",
      "card_scored",
      "card_held_in_hand",
      "joker_evaluated",
    ],
    params: [
      {
        id: "value",
        type: "number",
        label: "乘数",
        default: 1.5,
      },
    ],
    category: "计分",
  },
  {
    id: "apply_exp_mult",
    label: "应用指数倍数 (^Mult)",
    description: "应用指数倍数 (emult) - 需要 TALISMAN 模组",
    applicableTriggers: [
      "hand_played",
      "card_scored",
      "card_held_in_hand",
      "joker_evaluated",
    ],
    params: [
      {
        id: "value",
        type: "number",
        label: "指数倍数数值",
        default: 1.1,
      },
    ],
    category: "计分",
  },
  {
    id: "apply_hyper_mult",
    label: "应用超级倍数",
    description: "应用 (n)^ 倍数 - 需要 TALISMAN 模组",
    applicableTriggers: [
      "hand_played",
      "card_scored",
      "card_held_in_hand",
      "joker_evaluated",
    ],
    params: [
      {
        id: "arrows",
        type: "number",
        label: "箭头数量",
        default: 1,
        min: 1
      },
      {
        id: "value",
        type: "number",
        label: "超级倍数数值",
        default: 1.1,
      },
    ],
    category: "计分",
  },
  {
    id: "set_dollars",
    label: "编辑金钱",
    description: "修改你的金钱余额",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [
      {
        id: "operation",
        type: "select",
        label: "操作",
        options: [
          { value: "add", label: "添加" },
          { value: "subtract", label: "减少" },
          { value: "set", label: "设置为" },
        ],
        default: "add",
      },
      {
        id: "value",
        type: "number",
        label: "数量",
        default: 5,
      },
    ],
    category: "经济",
  },
  {
    id: "allow_debt",
    label: "允许负债",
    description: "允许玩家负债指定金额",
    applicableTriggers: ["passive"],
    params: [
      {
        id: "value",
        type: "number",
        label: "负债金额",
        default: 20,
      },
    ],
    category: "经济",
  },
  {
    id: "retrigger_cards",
    label: "重复触发",
    description: "重复触发已计分/激活的卡牌",
    applicableTriggers: [
      "card_scored",
      "card_discarded",
      "card_held_in_hand",
      "card_held_in_hand_end_of_round",
    ],
    params: [
      {
        id: "repetitions",
        type: "number",
        label: "重复次数",
        default: 1,
      },
    ],
    category: "卡牌效果",
  },
  {
    id: "level_up_hand",
    label: "升级牌型",
    description: "提高扑克牌型的等级",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [
      {
        id: "hand_selection",
        type: "select",
        label: "牌型选择",
        options: [
          { value: "current", label: "当前牌型 (已出牌/已弃牌)" },
          { value: "specific", label: "特定牌型" },
          { value: "most", label: "最常使用" },
          { value: "least", label: "最少使用" },
          { value: "random", label: "随机牌型" },
        ],
        default: "current",
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
        label: "等级",
        default: 1,
        min: 1,
      },
    ],
    category: "游戏规则",
  },
  {
    id: "edit_hand",
    label: "编辑手牌次数",
    description: "修改可用的手牌次数",
    applicableTriggers: [...GENERIC_TRIGGERS, "passive"],
    params: [
      {
        id: "operation",
        type: "select",
        label: "操作",
        options: [
          { value: "add", label: "添加" },
          { value: "subtract", label: "减少" },
          { value: "set", label: "设置为" },
        ],
        default: "add",
      },
      {
        id: "duration",
        type: "select",
        label: "持续时间",
        options: [
          { value: "permanent", label: "永久" },
          { value: "round", label: "本回合" },
        ],
        default: "permanent",
      },
      {
        id: "value",
        type: "number",
        label: "数量",
        default: 1,
        min: 0,
      },
    ],
    category: "游戏规则",
  },
  {
    id: "edit_discard",
    label: "编辑弃牌次数",
    description: "修改可用的弃牌次数",
    applicableTriggers: [...GENERIC_TRIGGERS, "passive"],
    params: [
      {
        id: "operation",
        type: "select",
        label: "操作",
        options: [
          { value: "add", label: "添加" },
          { value: "subtract", label: "减少" },
          { value: "set", label: "设置为" },
        ],
        default: "add",
      },
      {
        id: "duration",
        type: "select",
        label: "持续时间",
        options: [
          { value: "permanent", label: "永久" },
          { value: "round", label: "本回合" },
        ],
        default: "permanent",
      },
      {
        id: "value",
        type: "number",
        label: "数量",
        default: 1,
        min: 0,
      },
    ],
    category: "游戏规则",
  },
  {
    id: "edit_hand_size",
    label: "编辑手牌大小",
    description: "修改手牌大小 (可以持有的卡牌数量)",
    applicableTriggers: [...GENERIC_TRIGGERS, "passive"],
    params: [
      {
        id: "operation",
        type: "select",
        label: "操作",
        options: [
          { value: "add", label: "添加" },
          { value: "subtract", label: "减少" },
          { value: "set", label: "设置为" },
        ],
        default: "add",
      },
      {
        id: "value",
        type: "number",
        label: "数量",
        default: 1,
      },
    ],
    category: "游戏规则",
  },
  {
    id: "draw_cards",
    label: "抽牌到手牌",
    description: "从你的牌组中抽牌到手牌",
    applicableTriggers: [
      "hand_played",
      "card_scored",
      "card_destoyed",
      "card_held_in_hand",
      "after_hand_played",
      "before_hand_played",
      "consumable_used",
      "card_discarded",
      "hand_discarded",
    ],
    params: [
      {
        id: "value",
        type: "number",
        label: "数量",
        default: 1,
      },
    ],
    category: "游戏规则",
  },
  {
    id: "edit_play_size",
    label: "编辑出牌大小",
    description: "修改出牌大小 (可以选择和出牌的卡牌数量)",
    applicableTriggers: [...GENERIC_TRIGGERS, "passive"],
    params: [
      {
        id: "operation",
        type: "select",
        label: "操作",
        options: [
          { value: "add", label: "添加" },
          { value: "subtract", label: "减少" },
          { value: "set", label: "设置为" },
        ],
        default: "add",
      },
      {
        id: "value",
        type: "number",
        label: "数量",
        default: 1,
      },
    ],
    category: "游戏规则",
  },
  {
    id: "edit_discard_size",
    label: "编辑弃牌大小",
    description: "修改弃牌大小 (可以选择和弃牌的卡牌数量)",
    applicableTriggers: [...GENERIC_TRIGGERS, "passive"],
    params: [
      {
        id: "operation",
        type: "select",
        label: "操作",
        options: [
          { value: "add", label: "添加" },
          { value: "subtract", label: "减少" },
          { value: "set", label: "设置为" },
        ],
        default: "add",
      },
      {
        id: "value",
        type: "number",
        label: "数量",
        default: 1,
      },
    ],
    category: "游戏规则",
  },
  {
    id: "modify_internal_variable",
    label: "修改内部变量",
    description: "更改此小丑牌的内部变量值",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [
      {
        id: "variable_name",
        type: "text",
        label: "变量名称",
        default: "var1",
      },
      {
        id: "operation",
        type: "select",
        label: "操作",
        options: [
          { value: "set", label: "设置为数值" },
          { value: "increment", label: "增加数值" },
          { value: "decrement", label: "减少数值" },
          { value: "multiply", label: "乘以数值" },
          { value: "divide", label: "除以数值" },
          { value: "power", label: "数值次方" },
          { value: "absolute", label: "取绝对值"},
          { value: "natural_log", label: "自然对数"},
          { value: "log10", label: "常用对数"},
          { value: "square_root", label: "平方根"},
          { value: "ceil", label: "向上取整"},
          { value: "floor", label: "向下取整"},
        ],
      },
      {
        id: "value",
        type: "number",
        label: "数值",
        default: 1,
        showWhen: {
          parameter: "operation",
          values: [
            "set", "increment", "decrement",
            "multiply", "divide", "power"
          ]
        }
      },
    ],
    category: "变量",
  },
  {
    id: "add_card_to_deck",
    label: "添加卡牌到牌组",
    description: "创建新的扑克牌并添加到你的牌组",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [
      {
        id: "suit",
        type: "select",
        label: "花色",
        options: [{ value: "random", label: "随机" }, ...SUITS],
        default: "random",
      },
      {
        id: "rank",
        type: "select",
        label: "点数",
        options: [{ value: "random", label: "随机" }, ...RANKS],
        default: "random",
      },
      {
        id: "enhancement",
        type: "select",
        label: "增强",
        options: () => [
          { value: "none", label: "无" },
          { value: "random", label: "随机" },
          ...ENHANCEMENTS().map((enhancement) => ({
            value: enhancement.key,
            label: enhancement.label,
          })),
        ],
        default: "none",
      },
      {
        id: "seal",
        type: "select",
        label: "封印",
        options: () => [
          { value: "none", label: "无" },
          { value: "random", label: "随机" },
          ...SEALS().map((seal) => ({
            value: seal.key,
            label: seal.label,
          })),
        ],
        default: "none",
      },
      {
        id: "edition",
        type: "select",
        label: "版本",
        options: [
          { value: "none", label: "无" },
          { value: "random", label: "随机" },
          ...EDITIONS().map((edition) => ({
            value: edition.key,
            label: edition.label,
          })),
        ],
        default: "none",
      },
    ],
    category: "卡牌效果",
  },
  {
    id: "copy_triggered_card",
    label: "复制触发卡牌",
    description: "将触发此效果的卡牌复制到你的牌组",
    applicableTriggers: [
      "card_scored",
      "card_discarded",
      "card_held_in_hand",
      "card_held_in_hand_end_of_round",
    ],
    params: [],
    category: "卡牌效果",
  },
  {
    id: "copy_played_card",
    label: "复制已出卡牌",
    description: "将已出手牌中的特定卡牌复制到你的牌组",
    applicableTriggers: ["hand_played"],
    params: [
      {
        id: "card_index",
        type: "select",
        label: "手牌位置",
        options: [
          { value: "any", label: "任意位置" },
          { value: "1", label: "第1张卡" },
          { value: "2", label: "第2张卡" },
          { value: "3", label: "第3张卡" },
          { value: "4", label: "第4张卡" },
          { value: "5", label: "第5张卡" },
        ],
        default: "any",
      },
      {
        id: "card_rank",
        type: "select",
        label: "点数",
        options: [{ value: "any", label: "任意点数" }, ...RANKS],
        default: "any",
      },
      {
        id: "card_suit",
        type: "select",
        label: "花色",
        options: [{ value: "any", label: "任意花色" }, ...SUITS],
        default: "any",
      },
    ],
    category: "卡牌效果",
  },
  {
    id: "delete_triggered_card",
    label: "摧毁触发卡牌",
    description: "摧毁触发此效果的卡牌",
    applicableTriggers: [
      "card_scored",
      "card_discarded",
      "card_held_in_hand",
      "card_held_in_hand_end_of_round",
    ],
    params: [],
    category: "卡牌效果",
  },
  {
    id: "edit_triggered_card",
    label: "编辑触发卡牌",
    description: "修改触发此效果的卡牌属性",
    applicableTriggers: [
      "card_scored",
      "card_discarded",
      "card_held_in_hand",
      "card_held_in_hand_end_of_round",
    ],
    params: [
      {
        id: "new_rank",
        type: "select",
        label: "新点数",
        options: [
          { value: "none", label: "不更改" },
          { value: "random", label: "随机" },
          ...RANKS.map((rank) => ({ value: rank.label, label: rank.label })),
        ],
        default: "none",
      },
      {
        id: "new_suit",
        type: "select",
        label: "新花色",
        options: [
          { value: "none", label: "不更改" },
          { value: "random", label: "随机" },
          ...SUITS,
        ],
        default: "none",
      },
      {
        id: "new_enhancement",
        type: "select",
        label: "新增强",
        options: () => [
          { value: "none", label: "不更改" },
          { value: "remove", label: "移除增强" },
          { value: "random", label: "随机" },
          ...ENHANCEMENTS().map((enhancement) => ({
            value: enhancement.key,
            label: enhancement.label,
          })),
        ],
        default: "none",
      },
      {
        id: "new_seal",
        type: "select",
        label: "新封印",
        options: () => [
          { value: "none", label: "不更改" },
          { value: "remove", label: "移除封印" },
          { value: "random", label: "随机" },
          ...SEALS().map((seal) => ({
            value: seal.key,
            label: seal.label,
          })),
        ],
        default: "none",
      },
      {
        id: "new_edition",
        type: "select",
        label: "新版本",
        options: [
          { value: "none", label: "不更改" },
          { value: "remove", label: "移除版本" },
          { value: "random", label: "随机" },
          ...EDITIONS().map((edition) => ({
            value: edition.key,
            label: edition.label,
          })),
        ],
        default: "none",
      },
    ],
    category: "卡牌效果",
  },
  {
    id: "add_card_to_hand",
    label: "添加卡牌到手牌",
    description: "创建新的扑克牌并添加到你的手牌",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [
      {
        id: "suit",
        type: "select",
        label: "花色",
        options: [{ value: "random", label: "随机" }, ...SUITS],
        default: "random",
      },
      {
        id: "rank",
        type: "select",
        label: "点数",
        options: [{ value: "random", label: "随机" }, ...RANKS],
        default: "random",
      },
      {
        id: "enhancement",
        type: "select",
        label: "增强",
        options: () => [
          { value: "none", label: "无" },
          { value: "random", label: "随机" },
          ...ENHANCEMENTS().map((enhancement) => ({
            value: enhancement.key,
            label: enhancement.label,
          })),
        ],
        default: "none",
      },
      {
        id: "seal",
        type: "select",
        label: "封印",
        options: () => [
          { value: "none", label: "无" },
          { value: "random", label: "随机" },
          ...SEALS().map((seal) => ({
            value: seal.key,
            label: seal.label,
          })),
        ],
        default: "none",
      },
      {
        id: "edition",
        type: "select",
        label: "版本",
        options: [
          { value: "none", label: "无" },
          { value: "random", label: "随机" },
          ...EDITIONS().map((edition) => ({
            value: edition.key,
            label: edition.label,
          })),
        ],
        default: "none",
      },
    ],
    category: "卡牌效果",
  },
  {
    id: "copy_triggered_card_to_hand",
    label: "复制触发卡牌到手牌",
    description: "将触发此效果的卡牌复制到你的手牌",
    applicableTriggers: [
      "card_scored",
      "card_discarded",
      "card_held_in_hand",
      "card_held_in_hand_end_of_round",
    ],
    params: [],
    category: "卡牌效果",
  },
  {
    id: "copy_played_card_to_hand",
    label: "复制已出卡牌到手牌",
    description: "将已出手牌中的特定卡牌复制到你的手牌",
    applicableTriggers: ["hand_played"],
    params: [
      {
        id: "card_index",
        type: "select",
        label: "手牌位置",
        options: [
          { value: "any", label: "任意位置" },
          { value: "1", label: "第1张卡" },
          { value: "2", label: "第2张卡" },
          { value: "3", label: "第3张卡" },
          { value: "4", label: "第4张卡" },
          { value: "5", label: "第5张卡" },
        ],
        default: "any",
      },
      {
        id: "card_rank",
        type: "select",
        label: "点数",
        options: [{ value: "any", label: "任意点数" }, ...RANKS],
        default: "any",
      },
      {
        id: "card_suit",
        type: "select",
        label: "花色",
        options: [{ value: "any", label: "任意花色" }, ...SUITS],
        default: "any",
      },
    ],
    category: "卡牌效果",
  },
  {
    id: "set_sell_value",
    label: "编辑出售价值",
    description: "修改小丑牌/消耗品的出售价值",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [
      {
        id: "target",
        type: "select",
        label: "目标",
        options: [
          { value: "specific", label: "特定小丑牌" },
          { value: "all_jokers", label: "所有小丑牌" },
          { value: "all", label: "所有小丑牌和消耗品" },
        ],
        default: "specific",
      },{
        id: "specific_target",
        type: "select",
        label: "特定小丑牌",
        options: [
          { value: "self", label: "此小丑牌" },
          { value: "right", label: "右侧小丑牌" },
          { value: "left", label: "左侧小丑牌" },
          { value: "first", label: "最左侧小丑牌" },
          { value: "last", label: "最右侧小丑牌" },
          { value: "random", label: "随机小丑牌" },
        ],
        showWhen: {
          parameter: "target",
          values: ["specific"],},
        default: "self",
      },{
        id: "operation",
        type: "select",
        label: "操作",
        options: [
          { value: "add", label: "添加" },
          { value: "subtract", label: "减少" },
          { value: "set", label: "设置为" },
        ],
        default: "add",
      },
      {
        id: "value",
        type: "number",
        label: "出售价值数量",
        default: 1,
        min: 0,
      },
    ],
    category: "经济",
  },
  {
    id: "create_joker",
    label: "创建小丑牌",
    description: "创建随机或特定的小丑牌。要创建自己模组中的小丑牌，格式为 [modprefix]_[joker_name]。你可以在模组元数据页面找到你的模组前缀。",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [
      {
        id: "joker_type",
        type: "select",
        label: "小丑牌类型",
        options: [
          { value: "random", label: "随机小丑牌" },
          { value: "specific", label: "特定小丑牌" },
        ],
        default: "random",
      },
      {
        id: "rarity",
        type: "select",
        label: "稀有度",
        options: () => [
          { value: "random", label: "任意稀有度" },
          ...RARITIES(),
        ],
        default: "random",
        showWhen: {
          parameter: "joker_type",
          values: ["random"],
        },
      },
      {
        id: "joker_key",
        type: "text",
        label: "小丑牌标识符 ( [modprefix]_joker )",
        default: "joker",
        showWhen: {
          parameter: "joker_type",
          values: ["specific"],
        },
      },
      {
        id: "pool",
        type: "text",
        label: "牌池名称 (可选)",
        default: "",
        showWhen: {
          parameter: "joker_type",
          values: ["random"],
        },
      },
      {
        id: "edition",
        type: "select",
        label: "版本",
        options: [
          { value: "none", label: "无版本" }, 
          ...EDITIONS().map((edition) => ({
            value: edition.key,
            label: edition.label,
          })),
        ],
        default: "none",
      },
      {
        id: "sticker",
        type: "select",
        label: "复制贴纸",
        options: [{ value: "none", label: "无贴纸" }, ...STICKERS],
        default: "none",
      },
      {
        id: "ignore_slots",
        type: "select",
        label: "___ 小丑牌槽位",
        options: [
          { value: "respect", label: "遵守" },
          { value: "ignore", label: "忽略" },
        ],
        default: "respect",
      },
    ],
    category: "小丑牌",
  },
  {
    id: "copy_joker",
    label: "复制小丑牌",
    description: "从你的收藏中复制现有小丑牌。要复制自己模组中的小丑牌，格式为 j_[modprefix]_[joker_name]。你可以在模组元数据页面找到你的模组前缀。",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [
      {
        id: "selection_method",
        type: "select",
        label: "选择方式",
        options: [
          { value: "random", label: "随机小丑牌" },
          { value: "specific", label: "特定小丑牌" },
          { value: "position", label: "按位置" },
          { value: "selected", label: "选中小丑牌" },
        ],
        default: "random",
      },
      {
        id: "joker_key",
        type: "text",
        label: "小丑牌标识符 (例如: j_joker, j_greedy_joker)",
        default: "j_joker",
        showWhen: {
          parameter: "selection_method",
          values: ["specific"],
        },
      },
      {
        id: "position",
        type: "select",
        label: "位置",
        options: [
          { value: "first", label: "首个位置" },
          { value: "last", label: "末尾位置" },
          { value: "left", label: "此小丑牌左侧" },
          { value: "right", label: "此小丑牌右侧" },
          { value: "specific", label: "特定索引" },
        ],
        default: "first",
        showWhen: {
          parameter: "selection_method",
          values: ["position"],
        },
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
      {
        id: "edition",
        type: "select",
        label: "复制版本",
        options: [
          { value: "none", label: "无版本" },
          ...EDITIONS().map((edition) => ({
            value: edition.key,
            label: edition.label,
          })),
          ],
        default: "none",
      },
      {
        id: "sticker",
        type: "select",
        label: "复制贴纸",
        options: [{ value: "none", label: "无贴纸" }, ...STICKERS],
        default: "none",
      },
      {
        id: "ignore_slots",
        type: "select",
        label: "___ 小丑牌槽位",
        options: [
          { value: "respect", label: "遵守" },
          { value: "ignore", label: "忽略" },
        ],
        default: "respect",
      },
    ],
    category: "小丑牌",
  },
  {
    id: "destroy_joker",
    label: "摧毁小丑牌",
    description: "从你的收藏中摧毁现有小丑牌。要摧毁自己模组中的小丑牌，格式为 j_[modprefix]_[joker_name]。你可以在模组元数据页面找到你的模组前缀。",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [
      {
        id: "selection_method",
        type: "select",
        label: "选择方式",
        options: [
          { value: "random", label: "随机小丑牌" },
          { value: "specific", label: "特定小丑牌" },
          { value: "position", label: "按位置" },
          { value: "selected", label: "选中小丑牌" },
        ],
        default: "random",
      },
      {
        id: "joker_key",
        type: "text",
        label: "小丑牌标识符 (例如: j_joker, j_greedy_joker)",
        default: "j_joker",
        showWhen: {
          parameter: "selection_method",
          values: ["specific"],
        },
      },
      {
        id: "position",
        type: "select",
        label: "位置",
        options: [
          { value: "first", label: "首个位置" },
          { value: "last", label: "末尾位置" },
          { value: "left", label: "此小丑牌左侧" },
          { value: "right", label: "此小丑牌右侧" },
          { value: "specific", label: "特定索引" },
        ],
        default: "first",
        showWhen: {
          parameter: "selection_method",
          values: ["position"],
        },
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
      {
        id: "bypass_eternal",
        type: "select",
        label: "绕过永恒",
        options: [
          { value: "no", label: "否" },
          { value: "yes", label: "是" },
        ],
        default: "no",
      },
      {
        id: "sell_value_multiplier",
        type: "number",
        label: "出售价值乘数 (0 = 禁用)",
        
        default: 0,
      },
      {
        id: "variable_name",
        type: "text",
        label: "添加出售价值到变量",
        default: "var1",
      },
    ],
    category: "小丑牌",
  },
  {
    id: "unlock_joker",
    label: "解锁小丑牌",
    description: "在收藏中解锁已锁定的小丑牌",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [
      {
        id: "joker_key",
        type: "text",
        label: "小丑牌标识符 ( [modprefix]_joker )",
        default: "joker",
      },
      {
        id: "discover",
        type: "select",
        label: "发现解锁的小丑牌",
        options: [
          { value: "true", label: "发现" },
          { value: "false", label: "保持未发现" },
        ],
        default: "false",
      },
    ],
    category: "小丑牌",
  },
  {
    id: "flip_joker",
    label: "翻转小丑牌",
    description: "翻转小丑牌",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [
      {
        id: "selection_method",
        type: "select",
        label: "选择方式",
        options: [
          { value: "all", label: "所有小丑牌" },
          { value: "random", label: "随机小丑牌" },
          { value: "self", label: "此小丑牌" },
          { value: "position", label: "按位置" },
          { value: "selected", label: "按选择" },
        ],
        default: "all",
      },
      {
        id: "position",
        type: "select",
        label: "位置",
        options: [
          { value: "first", label: "首个位置" },
          { value: "last", label: "末尾位置" },
          { value: "left", label: "此小丑牌左侧" },
          { value: "right", label: "此小丑牌右侧" },
          { value: "specific", label: "特定索引" },
        ],
        default: "first",
        showWhen: {
          parameter: "selection_method",
          values: ["position"],
        },
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
    id: "shuffle_jokers",
    label: "洗牌小丑牌",
    description: "洗牌所有小丑牌",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [],
    category: "小丑牌",
  },
  {
    id: "redeem_voucher",
    label: "兑换代金券",
    description: "兑换特定或随机的代金券",
    applicableTriggers: [
      ...GENERIC_TRIGGERS.filter((trigger) => {
        return ![
          "card_scored",
          "hand_played",
          "hand_drawn",
          "card_discarded",
          "hand_discarded",
          "first_hand_drawn",
          "after_hand_played",
          "before_hand_played",
          "card_held_in_hand",
          "card_held_in_hand_end_of_round",
        ].includes(trigger); // 在盲注期间兑换代金券有问题，会添加到其他正在玩的卡牌等
      }),
    ],
    params: [
      {
        id: "voucher_type",
        type: "select",
        label: "代金券类型",
        options: [
          { value: "random", label: "随机代金券" },
          { value: "specific", label: "特定代金券" },
        ],
        default: "random",
      },
      {
        id: "specific_voucher",
        type: "select",
        label: "特定代金券",
        options: [...VOUCHERS()],
        showWhen: {
          parameter: "voucher_type",
          values: ["specific"],
        },
        default: "v_overstock_norm",
      },
    ],
    category: "消耗品",
  },
  {
    id: "create_consumable",
    label: "创建消耗品",
    description: "创建消耗品卡牌并添加到你的消耗品区域",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [
      {
        id: "set",
        type: "select",
        label: "消耗品集合",
        options: () => [
          { value: "random", label: "随机消耗品" },
          ...CONSUMABLE_SETS(),
        ],
        default: "random",
      },{
        id: "specific_card",
        type: "select",
        label: "特定卡牌",
        options: (parentValues: Record<string, unknown>) => {
          const selectedSet = parentValues?.set as string;
          if (!selectedSet || selectedSet === "random") {
            return [{ value: "random", label: "集合中随机" }];
          }
          // 处理原版集合
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
              { value: "random", label: "集合中随机" },
              ...vanillaCards,
              ...customCards,
            ];}
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
              { value: "random", label: "集合中随机" },
              ...vanillaCards,
              ...customCards,
            ];}
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
              { value: "random", label: "集合中随机" },
              ...vanillaCards,
              ...customCards,
            ];
          }
          // 处理自定义集合
          // 移除模组前缀获取实际集合键
          const setKey = selectedSet.includes("_")
            ? selectedSet.split("_").slice(1).join("_")
            : selectedSet;
          const customConsumablesInSet = CUSTOM_CONSUMABLES().filter(
            (consumable) =>
              consumable.set === setKey || consumable.set === selectedSet
          );
          return [
            { value: "random", label: "集合中随机" },
            ...customConsumablesInSet,
          ];},
        default: "random",
      },{
        id: "soulable",
        type: "select",
        label: "可灵魂绑定",
        options: [
          { value: "y", label: "是" },
          { value: "n", label: "否" },
        ],
        showWhen: {
          parameter: "specific_card",
          values: ["random"],
        },
        default:"n",
      },{
        id: "is_negative",
        type: "select",
        label: "版本",
        options: [
          { value: "n", label: "无版本" },
          { value: "y", label: "负片版本" },
        ],
        default: "n",
      },{
        id: "count",
        type: "number",
        label: "卡牌数量",
        default: 1,
        min: 1,
        max: 5,
      },{
        id: "ignore_slots",
        type: "select",
        label: "忽略槽位",
        options: [
          { value: "y", label: "是" },
          { value: "n", label: "否" },
        ],
        default:"n",
      },
    ],
    category: "消耗品",
  },
  {
    id: "destroy_consumable",
    label: "摧毁消耗品",
    description: "从你的收藏中摧毁消耗品卡牌",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [
      {
        id: "consumable_type",
        type: "select",
        label: "消耗品类型",
        options: [
          { value: "random", label: "随机类型" },
          ...CONSUMABLE_TYPES,
        ],
        default: "random",
      },
      {
        id: "specific_card",
        type: "select",
        label: "特定卡牌",
        options: [
          { value: "random", label: "随机卡牌" },
          ...ALL_CONSUMABLES,
        ],
        showWhen: {
          parameter: "consumable_type",
          values: ["tarot", "planet", "spectral"],
        },
      },
    ],
    category: "消耗品",
  },
  {
    id: "copy_consumable",
    label: "复制消耗品",
    description: "从你的收藏中复制现有消耗品卡牌",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [
      {
        id: "consumable_type",
        type: "select",
        label: "消耗品类型",
        options: [
          { value: "random", label: "随机类型" },
          ...CONSUMABLE_TYPES,
        ],
        default: "random",
      },
      {
        id: "specific_card",
        type: "select",
        label: "特定卡牌",
        options: [
          { value: "random", label: "随机卡牌" },
          ...ALL_CONSUMABLES,
        ],
        showWhen: {
          parameter: "consumable_type",
          values: ["tarot", "planet", "spectral"],
        },
      },
      {
        id: "is_negative",
        type: "select",
        label: "版本",
        options: [
          { value: "none", label: "无版本" },
          { value: "negative", label: "负片版本" },
        ],
        default: "none",
      },
    ],
    category: "消耗品",
  },
  {
    id: "permanent_bonus",
    label: "添加永久加成",
    description: "向触发卡牌添加永久加成 (如徒步者小丑牌)",
    applicableTriggers: ["card_scored"],
    params: [
      {
        id: "bonus_type",
        type: "select",
        label: "加成类型",
        options: [
          { value: "perma_bonus", label: "永久筹码" },
          { value: "perma_mult", label: "永久倍数" },
          { value: "perma_x_chips", label: "永久筹码乘数" },
          { value: "perma_x_mult", label: "永久倍数乘数" },
          { value: "perma_h_chips", label: "永久持有筹码" },
          { value: "perma_h_mult", label: "永久持有倍数" },
          { value: "perma_h_x_chips", label: "永久持有筹码乘数" },
          { value: "perma_h_x_mult", label: "永久持有倍数乘数" },
          { value: "perma_p_dollars", label: "永久金钱 (计分时)" },
          {
            value: "perma_h_dollars",
            label: "永久持有金钱 (回合结束时)",
          },
        ],
        default: "perma_bonus",
      },
      {
        id: "value",
        type: "number",
        label: "数量",
        default: 1,
        min: 0,
      },
    ],
    category: "卡牌效果",
  },
  {
    id: "set_ante",
    label: "设置底注等级",
    description: "修改当前底注等级",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [
      {
        id: "operation",
        type: "select",
        label: "操作",
        options: [
          { value: "set", label: "设置为" },
          { value: "add", label: "添加" },
          { value: "subtract", label: "减少" },
        ],
        default: "set",
      },
      {
        id: "value",
        type: "number",
        label: "数量",
        default: 1,
        min: 1,
      },
    ],
    category: "游戏规则",
  },
  {
    id: "create_tag",
    label: "创建标签",
    description: "创建特定或随机的标签",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [
      {
        id: "tag_type",
        type: "select",
        label: "标签类型",
        options: [
          { value: "random", label: "随机标签" },
          { value: "specific", label: "特定标签" },
        ],
        default: "random",
      },
      {
        id: "specific_tag",
        type: "select",
        label: "特定标签",
        options: [...TAGS],
        showWhen: {
          parameter: "tag_type",
          values: ["specific"],
        },
      },
    ],
    category: "消耗品",
  },
  {
    id: "destroy_self",
    label: "摧毁自身",
    description: "摧毁此小丑牌",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [{
      id: "animation",
      type: "select",
      label: "动画",
      options: [
          { value: "start_dissolve", label: "溶解" },
          { value: "shatter", label: "破碎" },
          { value: "explode", label: "爆炸" },
        ],
      default : "start_dissolve",},{
      id: "display_message",
      type: "select",
      label: "显示消息",
      options: [
          { value: "y", label: "是" },
          { value: "n", label: "否" },
        ],
      default : "n",
    }],
    category: "小丑牌",
  },{
    id: "disable_boss_blind",
    label: "禁用首领盲注",
    description: "禁用当前首领盲注，移除其效果",
    applicableTriggers: [...GENERIC_TRIGGERS, "passive"],
    params: [],
    category: "游戏规则",
  },
  {
    id: "beat_current_blind",
    label: "击败当前盲注",
    description: "立即击败当前首领盲注",
    applicableTriggers: ["after_hand_played"],
    params: [],
    category: "游戏规则",
  },
  {
    id: "edit_booster_packs",
    label: "编辑增强包",
    description: "修改商店中可用增强包的值",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [
      {
        id: "selected_type",
        type: "select",
        label: "编辑类型",
        options: [
          { value: "size", label: "卡牌槽位" },
          { value: "choice", label: "选择次数" },
        ],
        default: "size",
      },
      {
        id: "operation",
        type: "select",
        label: "操作",
        options: [
          { value: "add", label: "添加" },
          { value: "subtract", label: "减少" },
          { value: "set", label: "设置为" },
        ],
        default: "add",
      },
      {
        id: "value",
        type: "number",
        label: "数量",
        default: 1,
        min: 0,
      },
    ],
    category: "游戏规则",
  },
  {
    id: "edit_shop_slots",
    label: "编辑商店卡牌槽位",
    description: "修改商店的卡牌槽位",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [
      {
        id: "operation",
        type: "select",
        label: "操作",
        options: [
          { value: "add", label: "添加" },
          { value: "subtract", label: "减少" },
          { value: "set", label: "设置为" },
        ],
        default: "add",
      },
      {
        id: "value",
        type: "number",
        label: "数量",
        default: 1,
        min: 0,
      },
    ],
    category: "游戏规则",
  },
  {
    id: "modify_blind_requirement",
    label: "修改盲注要求",
    description: "更改盲注的分数要求",
    applicableTriggers: [
      "blind_selected",
      "card_scored",
      "hand_played",
      "card_discarded",
      "hand_discarded",
      "card_held_in_hand",
      "joker_evaluated",
    ],
    params: [
      {
        id: "operation",
        type: "select",
        label: "操作",
        options: [
          { value: "add", label: "添加" },
          { value: "subtract", label: "减少" },
          { value: "set", label: "设置为" },
          { value: "multiply", label: "乘以" },
          { value: "divide", label: "除以" },
        ],
        default: "multiply",
      },
      {
        id: "value",
        type: "number",
        label: "数量",
        default: 2,
      },
    ],
    category: "游戏规则",
  },
  {
    id: "free_rerolls",
    label: "免费重掷",
    description: "提供免费商店重掷",
    applicableTriggers: ["passive"],
    params: [
      {
        id: "value",
        type: "number",
        label: "免费重掷次数",
        default: 1,
      },
    ],
    category: "经济",
  },
  {
    id: "edit_consumable_slots",
    label: "编辑消耗品槽位",
    description: "修改可用的消耗品槽位数量",
    applicableTriggers: [...GENERIC_TRIGGERS, "passive"],
    params: [
      {
        id: "operation",
        type: "select",
        label: "操作",
        options: [
          { value: "add", label: "添加" },
          { value: "subtract", label: "减少" },
          { value: "set", label: "设置为" },
        ],
        default: "add",
      },
      {
        id: "value",
        type: "number",
        label: "数量",
        default: 1,
        min: 0,
      },
    ],
    category: "游戏规则",
  },
  {
    id: "edit_voucher_slots",
    label: "编辑代金券槽位",
    description: "修改商店中可用的代金券数量",
    applicableTriggers: [...GENERIC_TRIGGERS, "passive"],
    params: [
      {
        id: "operation",
        type: "select",
        label: "操作",
        options: [
          { value: "add", label: "添加" },
          { value: "subtract", label: "减少" },
          { value: "set", label: "设置为" },
        ],
        default: "add",
      },
      {
        id: "value",
        type: "number",
        label: "数量",
        default: 1,
        min: 0,
      },
    ],
    category: "游戏规则",
  },
  {
    id: "edit_booster_slots",
    label: "编辑增强包槽位",
    description: "修改商店中可用的增强包数量",
    applicableTriggers: [...GENERIC_TRIGGERS, "passive"],
    params: [
      {
        id: "operation",
        type: "select",
        label: "操作",
        options: [
          { value: "add", label: "添加" },
          { value: "subtract", label: "减少" },
          { value: "set", label: "设置为" },
        ],
        default: "add",
      },
      {
        id: "value",
        type: "number",
        label: "数量",
        default: 1,
        min: 0,
      },
    ],
    category: "游戏规则",
  },
  {
    id: "discount_items",
    label: "折扣物品",
    description: "减少特定商店物品的成本",
    applicableTriggers: ["passive"],
    params: [
      {
        id: "discount_type",
        type: "select",
        label: "折扣类型",
        options: [
          { value: "planet", label: "星球牌 (卡牌和包)" },
          { value: "tarot", label: "塔罗牌 (卡牌和包)" },
          { value: "spectral", label: "幽灵牌 (卡牌和包)" },
          { value: "standard", label: "标准牌 (扑克牌和包)" },
          { value: "jokers", label: "小丑牌" },
          { value: "vouchers", label: "代金券" },
          { value: "all_consumables", label: "所有消耗品" },
          { value: "all_cards", label: "所有卡牌" },
          { value: "all_shop_items", label: "所有商店物品" },
        ],
        default: "planet",
      },
      {
        id: "discount_method",
        type: "select",
        label: "折扣方式",
        options: [
          { value: "flat_reduction", label: "固定金额减少 (减$X)" },
          {
            value: "percentage_reduction",
            label: "百分比减少 (减X%)",
          },
          { value: "make_free", label: "完全免费 ($0)" },
        ],
        default: "make_free",
      },
      {
        id: "discount_amount",
        type: "number",
        label: "折扣金额",
        default: 1,
        showWhen: {
          parameter: "discount_method",
          values: ["flat_reduction", "percentage_reduction"],
        },
      },
    ],
    category: "经济",
  },
  {
    id: "edit_joker_slots",
    label: "编辑小丑牌槽位",
    description: "修改可用的小丑牌槽位数量",
    applicableTriggers: [...GENERIC_TRIGGERS, "passive"],
    params: [
      {
        id: "operation",
        type: "select",
        label: "操作",
        options: [
          { value: "add", label: "添加" },
          { value: "subtract", label: "减少" },
          { value: "set", label: "设置为" },
        ],
        default: "add",
      },
      {
        id: "value",
        type: "number",
        label: "数量",
        default: 1,
      },
    ],
    category: "游戏规则",
  },
  {
    id: "balance",
    label: "平衡筹码和倍数",
    description: "等离子牌组效果",
    applicableTriggers: [
      "hand_played",
      "card_scored",
      "card_held_in_hand",
      "card_held_in_hand_end_of_round",
      "joker_evaluated",
      "before_hand_played",
      "after_hand_played",
    ],
    params: [],
    category: "计分",
  },{
      id: "swap_chips_mult",
      label: "交换筹码和倍数",
      description: "交换筹码和倍数的数值",
      applicableTriggers: [
      "hand_played",
      "card_scored",
      "card_held_in_hand",
      "card_held_in_hand_end_of_round",
      "joker_evaluated",
      "before_hand_played",
      "after_hand_played",
    ],
      params: [],
      category: "计分",
  },
  {
      id: "edit_card_apperance",
      label: "编辑卡牌出现",
      description: "修改卡牌在当前游戏中是否可以出现",
      applicableTriggers: GENERIC_TRIGGERS,
      params: [
        {
            id: "key",
            type: "text",
            label: "卡牌标识符 (itemkey_key) 或 (itemkey_modprefix_key)",
            default: "",
          },
         {
            id: "card_apperance",
            type: "select",
            label: "卡牌出现",
            options: [
            { value: "appear", label: "可以出现" },
            { value: "disapper", label: "不能出现" },
            ],
            default: "appear",
          },
        ],
      category: "特殊",
    },
  {
    id: "change_suit_variable",
    label: "更改花色变量",
    description: "将花色变量的值更改为特定花色或随机花色",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [
      {
        id: "variable_name",
        type: "select",
        label: "花色变量",
        options: [], // 将动态填充花色变量
      },
      {
        id: "change_type",
        type: "select",
        label: "更改类型",
        options: [
          { value: "random", label: "随机花色" },
          { value: "specific", label: "特定花色" },
          { value: "pool", label: "从池中随机" },
        ],
        default: "random",
      },
      {
        id: "suit_pool",
        type: "checkbox",
        label: "可能的花色",
        checkboxOptions: [...SUITS],
        showWhen: {
          parameter: "change_type",
          values: ["pool"],
        }
      },
      {
        id: "specific_suit",
        type: "select",
        label: "花色",
        options: [...SUITS],
        showWhen: {
          parameter: "change_type",
          values: ["specific"],
        },
      },
    ],
    category: "变量",
  },
  {
    id: "reduce_flush_straight_requirements",
    label: "减少同花/顺子要求",
    description: "减少组成同花和顺子所需的卡牌数量",
    applicableTriggers: ["passive"],
    params: [
      {
        id: "reduction_value",
        type: "number",
        label: "减少数量",
        default: 1,
      },
    ],
    category: "游戏规则",
  },
  {
    id: "shortcut",
    label: "捷径顺子",
    description: "允许顺子中有间隔 (例如: 2, 4, 6, 8, 10 算作顺子)",
    applicableTriggers: ["passive"],
    params: [],
    category: "游戏规则",
  },
  {
    id: "showman",
    label: "允许重复卡牌 (表演者)",
    description: "小丑牌、塔罗牌、星球牌和幽灵牌可以多次出现",
    applicableTriggers: ["passive"],
    params: [],
    category: "游戏规则",
  },
  {
    id: "change_rank_variable",
    label: "更改点数变量",
    description: "将点数变量的值更改为特定点数或随机点数",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [
      {
        id: "variable_name",
        type: "select",
        label: "点数变量",
        options: [], // 将动态填充点数变量
      },
      {
        id: "change_type",
        type: "select",
        label: "更改类型",
        options: [
          { value: "random", label: "随机点数" },
          { value: "specific", label: "特定点数" },
          { value: "pool", label: "从池中随机" },
        ],
        default: "random",
      },
      {
        id: "rank_pool",
        type: "checkbox",
        label: "可能的点数",
        checkboxOptions: [...RANKS],
        showWhen: {
          parameter: "change_type",
          values: ["pool"],
        }
      },
      {
        id: "specific_rank",
        type: "select",
        label: "点数",
        options: [...RANKS],
        showWhen: {
          parameter: "change_type",
          values: ["specific"],
        },
      },
    ],
    category: "变量",
  },
  {
    id: "change_pokerhand_variable",
    label: "更改扑克牌型变量",
    description: "将扑克牌型变量的值更改为特定牌型或随机牌型",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [
      {
        id: "variable_name",
        type: "select",
        label: "扑克牌型变量",
        options: [], // 将动态填充扑克牌型变量
      },
      {
        id: "change_type",
        type: "select",
        label: "更改类型",
        options: [
          { value: "random", label: "随机扑克牌型" },
          { value: "pool", label: "从池中随机" },
          { value: "specific", label: "特定扑克牌型" },
          { value: "most_played", label: "最常使用牌型" },
          { value: "least_played", label: "最少使用牌型" },
        ],
        default: "random",
      },
      {
        id: "pokerhand_pool",
        type: "checkbox",
        label: "可能的扑克牌型",
        checkboxOptions: [...POKER_HANDS],
        showWhen: {
          parameter: "change_type",
          values: ["pool"],
        }
      },
      {
        id: "specific_pokerhand",
        type: "select",
        label: "扑克牌型",
        options: [...POKER_HANDS],
        showWhen: {
          parameter: "change_type",
          values: ["specific"],
        },
      },
    ],
    category: "变量",
  },
  {
    id: "combine_ranks",
    label: "点数X视为Y",
    description: "将指定点数视为不同点数",
    applicableTriggers: ["passive"],
    params: [
      {
        id: "source_rank_type",
        type: "select",
        label: "源点数类型",
        options: [
          { value: "specific", label: "特定点数" },
          { value: "face_cards", label: "人头牌 (J, Q, K)" },
          { value: "all", label: "所有点数" },
        ],
        default: "specific",
      },
      {
        id: "source_ranks",
        type: "text",
        label: "源点数 (逗号分隔: 2,3,J,K)",
        default: "J,Q,K",
        showWhen: {
          parameter: "source_rank_type",
          values: ["specific"],
        },
      },
      {
        id: "target_rank",
        type: "select",
        label: "目标点数",
        options: [
          ...RANKS,
          { value: "face_cards", label: "人头牌 (J, Q, K)" },
        ],
        default: "J",
      },
    ],
    category: "卡牌效果",
  },
  {
    id: "combine_suits",
    label: "合并花色",
    description: "两个花色被视为彼此 (双向)",
    applicableTriggers: ["passive"],
    params: [
      {
        id: "suit_1",
        type: "select",
        label: "第一个花色",
        options: [...SUITS],
        default: "Spades",
      },
      {
        id: "suit_2",
        type: "select",
        label: "第二个花色",
        options: [...SUITS],
        default: "Hearts",
      },
    ],
    category: "卡牌效果",
  },
  {
    id: "splash_effect",
    label: "每张已出卡牌都计分 (溅射)",
    description: "当手牌出牌时，其中的每张卡牌都计分",
    applicableTriggers: ["passive"],
    params: [],
    category: "特殊",
  },
  {
    id: "copy_joker_ability",
    label: "复制小丑牌能力",
    description: "复制另一个小丑牌的计算函数 (如蓝图/头脑风暴)",
    applicableTriggers: ["passive"],
    params: [
      {
        id: "selection_method",
        type: "select",
        label: "目标小丑牌",
        options: [
          { value: "right", label: "右侧小丑牌" },
          { value: "left", label: "左侧小丑牌" },
          { value: "specific", label: "特定位置" },
        ],
        default: "right",
      },
      {
        id: "specific_index",
        type: "number",
        label: "小丑牌位置 (1-5)",
        default: 1,
        showWhen: {
          parameter: "selection_method",
          values: ["specific"],
        },
      },
    ],
    category: "小丑牌",
  },
  {
    id: "prevent_game_over",
    label: "防止游戏结束",
    description: "当满足游戏结束条件时防止运行结束 (如骨先生)",
    applicableTriggers: ["game_over"],
    params: [],
    category: "特殊",
  },
  {
    id: "force_game_over",
    label: "强制游戏结束",
    description: "强制运行结束 (忽略骨先生)",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [],
    category: "特殊",
  },
        {
      id: "Win_blind",
      label: "赢得当前盲注",
      description: "强制赢得当前盲注",
      applicableTriggers: [...GENERIC_TRIGGERS],
      params: [],
      category: "特殊",
    },
  {
    id: "juice_up_joker",
    label: "增强小丑牌",
    description: "让小丑牌播放动画",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [
      {
        id: "mode",
        type: "select",
        label: "增强模式",
        options: [
          { value: "constant", label: "持续" },
          { value: "onetime", label: "一次性" },
        ],
        default: "constant",
      },
      {
        id: "scale",
        type: "number",
        label: "缩放",
        min: 0,
        default: 1,
      },
      {
        id: "rotation",
        type: "number",
        label: "旋转",
        min: 0,
        default: 1,
      },
    ],
    category: "特殊",
  },
  {
    id: "juice_up_card",
    label: "增强卡牌",
    description: "让卡牌播放动画",
    applicableTriggers: ["card_scored", "card_held_in_hand"],
    params: [
      {
        id: "mode",
        type: "select",
        label: "增强模式",
        options: [
          { value: "constant", label: "持续" },
          { value: "onetime", label: "一次性" },
        ],
        default: "constant",
      },
      {
        id: "scale",
        type: "number",
        label: "缩放",
        min: 0,
        default: 1,
      },
      {
        id: "rotation",
        type: "number",
        label: "旋转",
        min: 0,
        default: 1,
      },
    ],
    category: "特殊",
  },
  {
    id: "show_message",
    label: "显示消息",
    description: "显示指定颜色的自定义消息",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [
      {
        id: "colour",
        type: "select",
        label: "消息颜色",
        options: [
          { value: "G.C.WHITE", label: "白色" },
          { value: "G.C.RED", label: "红色" },
          { value: "G.C.GREEN", label: "绿色" },
          { value: "G.C.BLUE", label: "蓝色" },
          { value: "G.C.YELLOW", label: "黄色" },
          { value: "G.C.PURPLE", label: "紫色" },
          { value: "G.C.ORANGE", label: "橙色" },
          { value: "G.C.BLACK", label: "黑色" },
          { value: "G.C.CHIPS", label: "筹码 (蓝色)" },
          { value: "G.C.MULT", label: "倍数 (红色)" },
          { value: "G.C.MONEY", label: "金钱 (黄色)" },
        ],
        default: "G.C.WHITE",
      },
    ],
    category: "特殊",
  },
  {
    id: "emit_flag",
    label: "发送标志位",
    description: "发送自定义标志位。标志位是可以设置为真或假的全局变量，可以被任何其他小丑牌检查。",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [
      {
        id: "flag_name",
        type: "text",
        label: "唯一标志位名称",
        default: "custom_flag",
      },
      {
        id: "change",
        type: "select",
        label: "设置标志位为",
        options: [
          { value: "true", label: "真" },
          { value: "false", label: "假" },
          { value: "invert", label: "反转当前" },
        ],
        default: "true",
      },
      {
      id: "display_message",
      type: "select",
      label: "显示消息",
      options: [
          { value: "y", label: "是" },
          { value: "n", label: "否" },
        ],
      default : "n",
    },
    ],
    category: "特殊",
  },
  {
    id: "play_sound",
    label: "播放音效",
    description: "播放音效标签中定义的特定音效",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [
      {
        id: "sound_key",
        type: "text",
        label: "音效标识符 (modprefix_key) 或 (key)",
        default: "",
      },
    ],
    category: "特殊",
  },
  {
    id: "fix_probability",
    label: "设置概率",
    description: "设置机会掷骰的分子或分母",
    applicableTriggers: ["change_probability"],
    params: [
      {
        id: "part",
        type: "select",
        label: "分子或分母",
        options: [
          { value: "numerator", label: "分子" },
          { value: "denominator", label: "分母" },
          { value: "both", label: "两者" },
        ],
        default: "numerator",
      },
      {
        id: "value",
        type: "number",
        label: "数量",
        default: 1,
        min: 0,
      },
    ],
    category: "概率",
  },
  {
    id: "mod_probability",
    label: "修改概率",
    description: "修改机会掷骰的分子或分母",
    applicableTriggers: ["change_probability"],
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
        id: "operation",
        type: "select",
        label: "操作",
        options: [
          { value: "increment", label: "增加数值" },
          { value: "decrement", label: "减少数值" },
          { value: "multiply", label: "乘以" },
          { value: "divide", label: "除以" },
        ],
        default: "multiply",
      },
      {
        id: "value",
        type: "number",
        label: "数量",
        default: 2,
      },
    ],
    category: "概率",
  },
  {
    id: "crash_game",
    label: "使游戏崩溃",
    description: "使用自定义消息使游戏崩溃",
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [],
    category: "特殊",
  },
];

export function getEffectTypeById(
  id: string
): EffectTypeDefinition | undefined {
  return EFFECT_TYPES.find((effectType) => effectType.id === id);
}

export function getEffectsForTrigger(
  triggerId: string
): EffectTypeDefinition[] {
  return EFFECT_TYPES.filter(
    (effect) =>
      effect.applicableTriggers && effect.applicableTriggers.includes(triggerId)
  );
}
