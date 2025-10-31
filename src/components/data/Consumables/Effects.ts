import { EffectTypeDefinition } from "../../ruleBuilder/types";
import {
  PencilSquareIcon,
  BanknotesIcon,
  SparklesIcon,
  Cog6ToothIcon,
  CakeIcon,
  UserGroupIcon,
  CursorArrowRaysIcon,
  HandRaisedIcon,
  ShoppingBagIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import { CategoryDefinition } from "../Jokers/Triggers";
import {
  ENHANCEMENTS,
  SUITS,
  RANKS,
  SEALS,
  EDITIONS,
  POKER_HANDS,
  TAROT_CARDS,
  PLANET_CARDS,
  SPECTRAL_CARDS,
  CUSTOM_CONSUMABLES,
  CONSUMABLE_SETS,
  RARITIES,
  TAGS,
  VOUCHERS,
  STICKERS,
} from "../BalatroUtils";

export const CONSUMABLE_EFFECT_CATEGORIES: CategoryDefinition[] = [
  {
    label: "选中卡牌",  // 统一为中文
    icon: CursorArrowRaysIcon,
  },
  {
    label: "计分",  // 统一为中文
    icon: ChartBarIcon,
  },
  {
    label: "新增卡牌",
    icon: PencilSquareIcon,
  },
  {
    label: "经济",  // 统一为中文
    icon: BanknotesIcon,
  },
  {
    label: "商店效果",  // 统一为中文
    icon: ShoppingBagIcon,
  },
  {
    label: "手牌效果",  // 统一为中文
    icon: HandRaisedIcon,
  },
  {
    label: "游戏规则",  // 统一为中文
    icon: Cog6ToothIcon,
  },
  {
    label: "消耗品",  // 统一为中文
    icon: CakeIcon,
  },
  {
    label: "小丑牌",  // 统一为中文
    icon: UserGroupIcon,
  },
  {
    label: "特殊",  // 统一为中文
    icon: SparklesIcon,
  },
];

export const CONSUMABLE_EFFECT_TYPES: EffectTypeDefinition[] = [
  // ===== 计分效果 =====
  {
    id: "add_chips",
    label: "添加筹码",
    description: "向手牌分数添加固定数量的筹码",
    applicableTriggers: ["held_hand"],
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
    applicableTriggers: ["held_hand"],
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
    applicableTriggers: ["held_hand"],
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
    applicableTriggers: ["held_hand"],
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
    applicableTriggers: ["held_hand"],
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
    applicableTriggers: ["held_hand"],
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
    applicableTriggers: ["held_hand"],
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
    applicableTriggers: ["held_hand"],
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
  // ===== 选中卡牌效果 =====
  {
    id: "edit_cards",
    label: "编辑选中卡牌",
    description: "对选中卡牌应用多种修改 (增强、封印、版本、花色、点数)",
    applicableTriggers: ["consumable_used"],
    params: [
      {
        id: "enhancement",
        type: "select",
        label: "增强类型",
        options: () => [
          { value: "none", label: "不更改" },
          { value: "remove", label: "移除增强" },
          ...ENHANCEMENTS().map((enhancement) => ({
            value: enhancement.key,
            label: enhancement.label,
          })),
          { value: "random", label: "随机增强" },
        ],
        default: "none",
      },
      {
        id: "seal",
        type: "select",
        label: "封印类型",
        options: () => [
          { value: "none", label: "不更改" },
          { value: "remove", label: "移除封印" },
          { value: "random", label: "随机封印" },
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
        label: "版本类型",
        options: [
          { value: "none", label: "不更改" },
          { value: "remove", label: "移除版本" },
          ...EDITIONS().map((edition) => ({
            value: edition.key,
            label: edition.label,
          })),
          { value: "random", label: "随机版本" },
        ],
        default: "none",
      },
      {
        id: "suit",
        type: "select",
        label: "花色",
        options: [
          { value: "none", label: "不更改" },
          ...SUITS,
          { value: "random", label: "随机花色" },
        ],
        default: "none",
      },
      {
        id: "rank",
        type: "select",
        label: "点数",
        options: [
          { value: "none", label: "不更改" },
          ...RANKS.map((rank) => ({ value: rank.label, label: rank.label })),
          { value: "random", label: "随机点数" },
        ],
        default: "none",
      },
    ],
    category: "选中卡牌",
  },
  {
    id: "destroy_selected_cards",
    label: "摧毁选中卡牌",
    description: "摧毁所有当前选中的卡牌",
    applicableTriggers: ["consumable_used"],
    params: [],
    category: "选中卡牌",
  },
  {
    id: "increment_rank",
    label: "增加/减少点数",
    description: "按指定数量增加或减少选中卡牌的点数",
    applicableTriggers: ["consumable_used"],
    params: [
      {
        id: "operation",
        type: "select",
        label: "操作",
        options: [
          { value: "increment", label: "增加 (+)" },
          { value: "decrement", label: "减少 (-)" },
        ],
        default: "increment",
      },
      {
        id: "value",
        type: "number",
        label: "数量",
        default: 1,
        min: 1,
        max: 13,
      },
    ],
    category: "选中卡牌",
  },
  {
    id: "copy_selected_cards",
    label: "复制选中卡牌",
    description: "创建选中卡牌的副本，可自定义属性",
    applicableTriggers: ["consumable_used"],
    params: [
      {
        id: "copies",
        type: "number",
        label: "每张卡牌的副本数量",
        default: 1,
        min: 1,
        max: 5,
      },
      {
        id: "enhancement",
        type: "select",
        label: "增强类型",
        options: () => [
          { value: "none", label: "保持原增强" },
          ...ENHANCEMENTS().map((enhancement) => ({
            value: enhancement.key,
            label: enhancement.label,
          })),
          { value: "random", label: "随机增强" },
        ],
        default: "none",
      },
      {
        id: "seal",
        type: "select",
        label: "封印类型",
        options: () => [
          { value: "none", label: "保持原封印" },
          { value: "random", label: "随机封印" },
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
        label: "版本类型",
        options: [
          { value: "none", label: "保持原版本" },
          { value: "remove", label: "移除版本" },
          ...EDITIONS().map((edition) => ({
            value: edition.key,
            label: edition.label,
          })),
          { value: "random", label: "随机版本" },
        ],
        default: "none",
      },
    ],
    category: "选中卡牌",
  },
  {
    id: "convert_left_to_right",
    label: "左侧转为右侧",
    description: "将所有选中卡牌转换为与最右侧选中卡牌匹配 (如死神塔罗牌)",
    applicableTriggers: ["consumable_used"],
    params: [],
    category: "选中卡牌",
  },
  {
    id: "perma_bonus",
    label: "给予永久加成",
    description: "给予选中卡牌在整个游戏中持续的永久加成",
    applicableTriggers: ["consumable_used"],
    params: [
      {
        id: "bonus_type",
        type: "select",
        label: "加成类型",
        options: [
          { value: "perma_bonus", label: "永久筹码" },
          { value: "perma_mult", label: "永久倍数" },
          { value: "h_mult", label: "持有倍数" },
          { value: "h_chips", label: "持有筹码" },
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
        label: "加成数量",
        default: 10,
        min: 1,
      },
    ],
    category: "选中卡牌",
  },

  // ===== 手牌效果 =====
  {
    id: "edit_hand_size",
    label: "编辑手牌大小",
    description: "添加、减少或设置玩家的手牌大小",
    applicableTriggers: ["consumable_used", "held_hand"],
    params: [
      {
        id: "operation",
        type: "select",
        label: "操作",
        options: [
          { value: "add", label: "添加" },
          { value: "subtract", label: "减少" },
          { value: "set", label: "设置" },
        ],
        default: "add",
      },
      {
        id: "value",
        type: "number",
        label: "数量",
        default: 1,
        min: 1,
        max: 50,
      },
    ],
    category: "手牌效果",
  },
  {
    id: "draw_cards",
    label: "抽牌到手牌",
    description: "从你的牌组中抽牌到手牌",
    applicableTriggers: ["consumable_used", "held_hand"],
    params: [
      {
        id: "value",
        type: "number",
        label: "数量",
        default: 1,
      },
    ],
    category: "手牌效果",
  },
  {
    id: "edit_play_size",
    label: "编辑出牌大小",
    description: "添加、减少或设置玩家的出牌大小",
    applicableTriggers: ["consumable_used", "held_hand"],
    params: [
      {
        id: "operation",
        type: "select",
        label: "操作",
        options: [
          { value: "add", label: "添加" },
          { value: "subtract", label: "减少" },
          { value: "set", label: "设置" },
        ],
        default: "add",
      },
      {
        id: "value",
        type: "number",
        label: "数量",
        default: 1,
        min: 1,
        max: 50,
      },
    ],
    category: "手牌效果",
  },
  {
    id: "edit_discard_size",
    label: "编辑弃牌大小",
    description: "添加、减少或设置玩家的弃牌大小",
    applicableTriggers: ["consumable_used", "held_hand"],
    params: [
      {
        id: "operation",
        type: "select",
        label: "操作",
        options: [
          { value: "add", label: "添加" },
          { value: "subtract", label: "减少" },
          { value: "set", label: "设置" },
        ],
        default: "add",
      },
      {
        id: "value",
        type: "number",
        label: "数量",
        default: 1,
        min: 1,
        max: 50,
      },
    ],
    category: "手牌效果",
  },
  {
    id: "edit_voucher_slots",
    label: "编辑代金券槽位",
    description: "修改商店中可用的代金券数量",
    applicableTriggers: ["consumable_used", "held_hand"],
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
    category: "商店效果",
  },
  {
    id: "edit_booster_slots",
    label: "编辑增强包槽位",
    description: "修改商店中可用的增强包数量",
    applicableTriggers: ["consumable_used", "held_hand"],
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
    category: "商店效果",
  },
    {
      id: "set_ante",
      label: "设置底注等级",
      description: "修改当前底注等级",
      applicableTriggers: ["consumable_used", "held_hand"],
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
    id: "edit_hands",
    label: "编辑手牌次数",
    description: "添加、减少或设置玩家本回合的手牌次数",
    applicableTriggers: ["consumable_used", "held_hand"],
    params: [
      {
        id: "operation",
        type: "select",
        label: "操作",
        options: [
          { value: "add", label: "添加" },
          { value: "subtract", label: "减少" },
          { value: "set", label: "设置" },
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
        min: 1,
        max: 50,
      },
    ],
    category: "手牌效果",
  },
  {
    id: "edit_discards",
    label: "编辑弃牌次数",
    description: "添加、减少或设置玩家本回合的弃牌次数",
    applicableTriggers: ["consumable_used", "held_hand"],
    params: [
      {
        id: "operation",
        type: "select",
        label: "操作",
        options: [
          { value: "add", label: "添加" },
          { value: "subtract", label: "减少" },
          { value: "set", label: "设置" },
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
        min: 1,
        max: 50,
      },
    ],
    category: "手牌效果",
  },

  // ===== 其他效果 =====
  {
    id: "convert_all_cards_to_suit",
    label: "转换所有卡牌花色",
    description: "将手牌中所有卡牌转换为特定花色",
    applicableTriggers: ["consumable_used", "held_hand"],
    params: [
      {
        id: "suit",
        type: "select",
        label: "目标花色",
        options: [
          ...SUITS, 
          { value: "random", label: "随机花色" },
          { value: "pool", label: "从池中随机" }
        ],
        default: "Hearts",
      },
      {
        id: "suit_pool",
        type: "checkbox",
        label: "可能的花色",
        checkboxOptions: [...SUITS],
        showWhen: {
          parameter: "suit",
          values: ["pool"],
        }
      },
    ],
    category: "卡牌修改",
  },
  {
    id: "convert_all_cards_to_rank",
    label: "转换所有卡牌点数",
    description: "将手牌中所有卡牌转换为特定点数",
    applicableTriggers: ["consumable_used", "held_hand"],
    params: [
      {
        id: "rank",
        type: "select",
        label: "目标点数",
        options: [
          ...RANKS.map((rank) => ({ value: rank.label, label: rank.label })),
          { value: "random", label: "随机点数" },
          { value: "pool", label: "从池中随机" },
        ],
        default: "Ace",
      },
      {
        id: "suit_pool",
        type: "checkbox",
        label: "可能的花色",
        checkboxOptions: [...SUITS],
        showWhen: {
          parameter: "suit",
          values: ["pool"],
        }
      },     
    ],
    category: "卡牌修改",
  },
  {
    id: "destroy_random_cards",
    label: "摧毁随机卡牌",
    description: "从手牌中摧毁指定数量的随机卡牌",
    applicableTriggers: ["consumable_used", "held_hand"],
    params: [
      {
        id: "count",
        type: "number",
        label: "卡牌数量",
        default: 1,
        min: 1,
        max: 8,
      },
    ],
    category: "卡牌修改",
  },
{
    id: "flip_joker",
    label: "翻转小丑牌",
    description: "翻转小丑牌",
    applicableTriggers: ["consumable_used", "held_hand"],
    params: [
      {
        id: "selection_method",
        type: "select",
        label: "选择方式",
        options: [
          { value: "all", label: "所有小丑牌" },
          { value: "random", label: "随机小丑牌" },
          { value: "selected", label: "按选择" },
        ],
        default: "all",
      },
    ],
    category: "小丑牌",
  },
  {
      id: "disable_boss_blind",
      label: "禁用首领盲注",
      description: "禁用当前首领盲注，移除其效果",
      applicableTriggers: ["consumable_used", "held_hand"],
      params: [],
      category: "游戏规则",
    },
      {
        id: "shuffle_jokers",
        label: "洗牌小丑牌",
        description: "洗牌所有小丑牌",
        applicableTriggers: ["consumable_used", "held_hand"],
        params: [],
        category: "小丑牌",
      },
      {
    id: "modify_blind_requirement",
    label: "修改盲注要求",
    description: "更改盲注的分数要求",
    applicableTriggers: ["consumable_used", "held_hand"],
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
      id: "force_game_over",
      label: "强制游戏结束",
      description: "强制运行结束 (忽略骨先生)",
      applicableTriggers: ["consumable_used", "held_hand"],
      params: [],
      category: "特殊",
    },
      {
      id: "Win_blind",
      label: "赢得当前盲注",
      description: "强制赢得当前盲注",
      applicableTriggers: ["consumable_used", "held_hand"],
      params: [],
      category: "特殊",
    },
  {
    id: "edit_joker_slots",
    label: "编辑小丑牌槽位",
    description: "添加或移除游戏中可用的小丑牌槽位",
    applicableTriggers: ["consumable_used", "held_hand"],
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
    category: "小丑牌",
  },
  {
    id: "add_cards_to_hand",
    label: "添加卡牌到手牌",
    description: "创建具有指定属性的新卡牌并添加到手牌",
    applicableTriggers: ["consumable_used", "held_hand"],
    params: [
      {
        id: "count",
        type: "number",
        label: "卡牌数量",
        default: 1,
        min: 1,
        max: 8,
      },
      {
        id: "rank",
        type: "select",
        label: "点数",
        options: [
          { value: "random", label: "随机点数" },
          { value: "Face Cards", label: "人头牌" },
          { value: "Numbered Cards", label: "数字牌" },
          { value: "pool", label: "从池中随机" },
          ...RANKS.map((rank) => ({ value: rank.label, label: rank.label })),
        ],
        default: "random",
      },
      {
        id: "rank_pool",
        type: "checkbox",
        label: "可能的点数",
        checkboxOptions: [...RANKS],
        showWhen: {
          parameter: "rank",
          values: ["pool"],
        }
      },
      {
        id: "suit",
        type: "select",
        label: "花色",
        options: [
          { value: "none", label: "随机花色" },
          { value: "pool", label: "从池中随机" },
          ...SUITS],
        default: "none",
      },
      {
        id: "suit_pool",
        type: "checkbox",
        label: "可能的花色",
        checkboxOptions: [...SUITS],
        showWhen: {
          parameter: "suit",
          values: ["pool"],
        }
      },
      {
        id: "enhancement",
        type: "select",
        label: "增强类型",
        options: () => [
          { value: "none", label: "无增强" },
          ...ENHANCEMENTS().map((enhancement) => ({
            value: enhancement.key,
            label: enhancement.label,
          })),
          { value: "random", label: "随机增强" },
        ],
        default: "none",
      },
      {
        id: "seal",
        type: "select",
        label: "封印类型",
        options: () => [
          { value: "none", label: "无封印" },
          { value: "random", label: "随机封印" },
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
        label: "版本类型",
        options: [
          { value: "none", label: "无版本" },
          ...EDITIONS().map((edition) => ({
            value: edition.key,
            label: edition.label,
          })),
          { value: "random", label: "随机版本" },
        ],
        default: "none",
      },
    ],
    category: "卡牌修改",
  },
  {
    id: "level_up_hand",
    label: "升级扑克牌型",
    description: "升级特定扑克牌型、随机牌型或所有牌型",
    applicableTriggers: ["consumable_used", "held_hand"],
    params: [
      {
        id: "hand_type",
        type: "select",
        label: "扑克牌型",
        options: [
          ...POKER_HANDS.map((hand) => ({
            value: hand.value,
            label: hand.label,
          })),
          { value: "random", label: "随机牌型" },
          { value: "all", label: "所有牌型" },
          { value: "pool", label: "从池中随机" },
        ],
        default: "Pair",
      },
      {
        id: "pokerhand_pool",
        type: "checkbox",
        label: "可能的扑克牌型",
        checkboxOptions: [...POKER_HANDS],
        showWhen: {
          parameter: "hand_type",
          values: ["pool"],
        }
      },
      {
        id: "levels",
        type: "number",
        label: "等级数量",
        default: 1,
        min: 1,
        max: 10,
      },
    ],
    category: "手牌效果",
  },
  {
    id: "edit_dollars",
    label: "编辑金钱",
    description: "添加、减少或设置玩家的金钱",
    applicableTriggers: ["consumable_used", "held_hand"],
    params: [
      {
        id: "operation",
        type: "select",
        label: "操作",
        options: [
          { value: "add", label: "添加" },
          { value: "subtract", label: "减少" },
          { value: "set", label: "设置" },
        ],
        default: "add",
      },
      {
        id: "value",
        type: "number",
        label: "金额",
        default: 5,
        min: 0,
      },
    ],
    category: "经济",
  },
  {
    id: "double_dollars",
    label: "双倍金钱",
    description: "将当前金钱翻倍，最多达到指定限制",
    applicableTriggers: ["consumable_used", "held_hand"],
    params: [
      {
        id: "limit",
        type: "number",
        label: "最大获得金额",
        default: 20,
        min: 1,
        max: 999,
      },
    ],
    category: "经济",
  },
  {
    id: "add_dollars_from_jokers",
    label: "从小丑牌出售价值添加金钱",
    description: "获得等于所有小丑牌总出售价值的金钱，最多达到限制",
    applicableTriggers: ["consumable_used"],
    params: [
      {
        id: "limit",
        type: "number",
        label: "最大获得金额",
        default: 50,
        min: 1,
        max: 999,
      },
    ],
    category: "经济",
  },
  {
    id: "create_consumable",
    label: "创建消耗品",
    description: "创建消耗品卡牌并添加到你的消耗品区域",
    applicableTriggers: ["consumable_used", "held_hand"],
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
    applicableTriggers: ["consumable_used", "held_hand"],
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
      },
      {
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
              { value: "random", label: "集合中随机" },
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
              { value: "random", label: "集合中随机" },
              ...vanillaCards,
              ...customCards,
            ];
          }

          // 处理自定义集合
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
          ];
        },
        default: "random",
      },
    ],
    category: "消耗品",
  },
  {
    id: "fool_effect",
    label: "创建最后使用的消耗品",
    description: "创建最后使用的塔罗牌或星球牌的副本 (如愚者)",
    applicableTriggers: ["consumable_used", "held_hand"],
    params: [],
    category: "消耗品",
  },
  {
    id: "create_tag",
    label: "创建标签",
    description: "创建特定或随机的标签",
    applicableTriggers: ["consumable_used", "held_hand"],
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
    id: "edit_booster_packs",
    label: "编辑增强包",
    description: "修改商店中可用增强包的值",
    applicableTriggers: ["consumable_used", "held_hand"],
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
    category: "商店效果",
  },
  {
    id: "edit_shop_slots",
    label: "编辑商店卡牌槽位",
    description: "修改商店的卡牌槽位",
    applicableTriggers: ["consumable_used", "held_hand"],
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
    category: "商店效果",
  },
  {
    id: "redeem_voucher",
    label: "兑换代金券",
    description: "兑换特定或随机的代金券",
    applicableTriggers: ["consumable_used", "held_hand"],
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
    id: "edit_cards_in_hand",
    label: "编辑手牌中卡牌",
    description: "对手牌中随机卡牌应用多种修改 (增强、封印、版本、花色、点数)",
    applicableTriggers: ["consumable_used", "held_hand"],
    params: [
      {
        id: "amount",
        type: "number",
        label: "卡牌数量",
        default: 1,
        min: 1,
        max: 8,
      },
      {
        id: "enhancement",
        type: "select",
        label: "增强类型",
        options: () => [
          { value: "none", label: "不更改" },
          ...ENHANCEMENTS().map((enhancement) => ({
            value: enhancement.key,
            label: enhancement.label,
          })),
          { value: "random", label: "随机增强" },
        ],
        default: "none",
      },
      {
        id: "seal",
        type: "select",
        label: "封印类型",
        options: () => [
          { value: "none", label: "不更改" },
          { value: "random", label: "随机封印" },
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
        label: "版本类型",
        options: [
          { value: "none", label: "不更改" },
          ...EDITIONS().map((edition) => ({
            value: edition.key,
            label: edition.label,
          })),
          { value: "random", label: "随机版本" },
        ],
        default: "none",
      },
      {
        id: "suit",
        type: "select",
        label: "花色",
        options: [
          { value: "none", label: "不更改" },
          ...SUITS,
          { value: "random", label: "随机花色" },
          { value: "pool", label: "从池中随机" },
        ],
        default: "none",
      },
      {
        id: "suit_pool",
        type: "checkbox",
        label: "可能的花色",
        checkboxOptions: [...SUITS],
        showWhen: {
          parameter: "suit",
          values: ["pool"],
        }
      },
      {
        id: "rank",
        type: "select",
        label: "点数",
        options: [
          { value: "none", label: "不更改" },
          ...RANKS.map((rank) => ({ value: rank.label, label: rank.label })),
          { value: "random", label: "随机点数" },
          { value: "pool", label: "从池中随机" },
        ],
        default: "none",
      },
      {
        id: "rank_pool",
        type: "checkbox",
        label: "可能的点数",
        checkboxOptions: [...RANKS],
        showWhen: {
          parameter: "rank",
          values: ["pool"],
        }
      },      
    ],
    category: "卡牌修改",
  },
  {
    id: "create_joker",
    label: "创建小丑牌",
    description: "创建随机或特定的小丑牌。要创建自己模组中的小丑牌，格式为 [modprefix]_[joker_name]。你可以在模组元数据页面找到你的模组前缀。",
    applicableTriggers: ["consumable_used", "held_hand"],
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
    description: "在你的小丑牌区域创建小丑牌的副本",
    applicableTriggers: ["consumable_used", "held_hand"],
    params: [
       {
        id: "selection_method",
        type: "select",
        label: "选择方式",
        options: [
          { value: "random", label: "随机小丑牌" },
          { value: "selected", label: "选中小丑牌" },
        ],
      },
      {
        id: "amount",
        type: "number",
        label: "要复制的小丑牌数量",
        showWhen: {
          parameter: "selection_method",
          values: ["random"],
        },
        default: 1,
        min: 1,
        max: 5,
      },
      {
        id: "edition",
        type: "select",
        label: "要应用的版本",
        options: [
          { value: "none", label: "保持原版本" },
          { value: "remove", label: "移除版本" },
          ...EDITIONS().map((edition) => ({
            value: edition.key,
            label: edition.label,
          })),
          { value: "random", label: "随机版本" },
        ],
        default: "none",
      },
    ],
    category: "小丑牌",
  },
  {
    id: "destroy_joker",
    label: "摧毁小丑牌",
    description: "从你的小丑牌区域摧毁小丑牌 (永恒小丑牌安全)",
    applicableTriggers: ["consumable_used", "held_hand"],
    params: [
        {
        id: "selection_method",
        type: "select",
        label: "摧毁小丑牌",
        options: [
          { value: "random", label: "随机小丑牌" },
          { value: "selected", label: "选中小丑牌" },
        ],
      },
      {
        id: "amount",
        type: "number",
        label: "要摧毁的小丑牌数量",
          showWhen: {
          parameter: "selection_method",
          values: ["random"],
        },
        default: 1,
        min: 1,
        max: 5,
      },
    ],
    category: "小丑牌",
  },
    {
    id: "edit_selected_joker",
    label: "编辑选中小丑牌",
    description: "对选中小丑牌应用修改器",
    applicableTriggers: ["consumable_used"],
    params: [
      {
        id: "sticker",
        type: "select",
        label: "贴纸",
        options: [
          { value: "none", label: "无贴纸" },
          ...STICKERS.map((sticker) => ({
            key: sticker.key,
            value: sticker.value,
            label: sticker.label,
          })),
        { value: "remove", label: "移除贴纸" },
        ],
        default: "none",
      },
      {
        id: "edition",
        type: "select",
        label: "版本",
        options: [
          { value: "none", label: "无版本" },
          { value: "remove", label: "移除版本" },
          ...EDITIONS().map((edition) => ({
            value: edition.key,
            label: edition.label,
          })),
          { value: "random", label: "随机版本" },
        ],
        default: "none",
      },
    ],
    category: "小丑牌",
  },
  {
    id: "edition_random_joker",
    label: "对随机小丑牌应用版本",
    description: "对你的小丑牌区域中的随机小丑牌应用版本",
    applicableTriggers: ["consumable_used", "held_hand"],
    params: [
      {
        id: "amount",
        type: "number",
        label: "要应用版本的小丑牌数量",
        default: 1,
        min: 1,
        max: 5,
      },
      {
        id: "edition",
        type: "select",
        label: "要应用的版本",
        options: [
          ...EDITIONS().map((edition) => ({
            value: edition.key,
            label: edition.label,
          })),
          { value: "random", label: "随机版本" },
          { value: "remove", label: "移除版本" },
        ],
        default: "e_foil",
      },
      {
        id: "target_type",
        type: "select",
        label: "目标小丑牌",
        options: [
          { value: "editionless", label: "仅无版本小丑牌" },
          { value: "any", label: "任意小丑牌" },
        ],
        default: "editionless",
      },
    ],
    category: "小丑牌",
  },
    {
        id: "edit_card_apperance",
        label: "编辑卡牌出现",
        description: "修改卡牌在当前游戏中是否可以出现",
        applicableTriggers: ["consumable_used", "held_hand"],
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
    id: "emit_flag",
    label: "发送标志位",
    description: "发送自定义标志位。标志位是可以设置为真或假的全局变量，可以被任何其他小丑牌检查。",
    applicableTriggers: ["consumable_used", "held_hand"],
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
    ],
    category: "特殊",
  },
  {
    id: "play_sound",
    label: "播放音效",
    description: "播放音效标签中定义的特定音效",
    applicableTriggers: ["consumable_used", "held_hand"],
    params: [
      {
        id: "sound_key",
        type: "text",
        label: "音效标识符 (modprefix_key)",
        default: "",
      },
    ],
    category: "特殊",
  },
  {
    id: "crash_game",
    label: "使游戏崩溃",
    description: "使用自定义消息使游戏崩溃",
    applicableTriggers: ["consumable_used", "held_hand"],
    params: [],
    category: "特殊",
  },
];

export function getConsumableEffectsForTrigger(
  triggerId: string
): EffectTypeDefinition[] {
  return CONSUMABLE_EFFECT_TYPES.filter((effect) =>
    effect.applicableTriggers?.includes(triggerId)
  );
}

export function getConsumableEffectTypeById(
  id: string
): EffectTypeDefinition | undefined {
  return CONSUMABLE_EFFECT_TYPES.find((effect) => effect.id === id);
}

export function getSelectedCardEffects(): EffectTypeDefinition[] {
  return CONSUMABLE_EFFECT_TYPES.filter(
    (effect) => effect.category === "Selected Cards"
  );
}

export function getNonSelectedCardEffects(): EffectTypeDefinition[] {
  return CONSUMABLE_EFFECT_TYPES.filter(
    (effect) => effect.category !== "Selected Cards"
  );
}
