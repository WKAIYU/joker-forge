import { EffectTypeDefinition } from "../../ruleBuilder/types";
import {
  SparklesIcon,
  BanknotesIcon,
  ChartBarIcon,
  UserGroupIcon,
  CakeIcon,
  VariableIcon,
} from "@heroicons/react/24/outline";
import { CategoryDefinition } from "../Jokers/Triggers";
import {
  RARITIES,
  STICKERS,
  POKER_HANDS,
  CONSUMABLE_SETS,
  TAROT_CARDS,
  CUSTOM_CONSUMABLES,
  PLANET_CARDS,
  SPECTRAL_CARDS,
  EDITIONS,
  RANKS,
  SEALS,
  ENHANCEMENTS,
  SUITS,
  TAGS,
} from "../BalatroUtils";
import { GENERIC_TRIGGERS, SCORING_TRIGGERS } from "./Triggers";

export const CARD_EFFECT_CATEGORIES: CategoryDefinition[] = [
  {
    label: "计分",
    icon: ChartBarIcon,
  },
  {
    label: "经济",
    icon: BanknotesIcon,
  },
  {
    label: "消耗品",
    icon: CakeIcon,
  },
  {
    label: "小丑牌",
    icon: UserGroupIcon,
  },
  {
    label: "变量",
    icon: VariableIcon,
  },
  {
    label: "特殊",
    icon: SparklesIcon,
  },
];

export const CARD_EFFECT_TYPES: EffectTypeDefinition[] = [
  {
    id: "add_mult",
    label: "添加倍数",
    description: "在当前计分计算中添加倍数",
    applicableTriggers: SCORING_TRIGGERS,
    params: [
      {
        id: "value",
        type: "number",
        label: "数量",
        default: 4,
        min: 1,
      },
    ],
    category: "计分",
  },
  {
    id: "add_chips",
    label: "添加筹码",
    description: "在当前计分计算中添加筹码",
    applicableTriggers: SCORING_TRIGGERS,
    params: [
      {
        id: "value",
        type: "number",
        label: "数量",
        default: 30,
        min: 1,
      },
    ],
    category: "计分",
  },
  {
    id: "add_x_mult",
    label: "应用倍数乘数",
    description: "将倍数乘以指定数值",
    applicableTriggers: SCORING_TRIGGERS,
    params: [
      {
        id: "value",
        type: "number",
        label: "乘数",
        default: 1.5,
        min: 1,
      },
    ],
    category: "计分",
  },
  {
    id: "add_x_chips",
    label: "应用筹码乘数",
    description: "将筹码乘以指定数值",
    applicableTriggers: SCORING_TRIGGERS,
    params: [
      {
        id: "value",
        type: "number",
        label: "乘数",
        default: 2,
        min: 1,
      },
    ],
    category: "计分",
  },
  {
    id: "add_exp_mult",
    label: "应用指数倍数 (^Mult)",
    description: "应用指数倍数 (emult) - 需要 TALISMAN 模组",
    applicableTriggers: SCORING_TRIGGERS,
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
    id: "add_exp_chips",
    label: "应用指数筹码 (^Chips)",
    description: "应用指数筹码 (echips) - 需要 TALISMAN 模组",
    applicableTriggers: SCORING_TRIGGERS,
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
    id: "add_hyper_mult",
    label: "应用超级倍数",
    description: "应用 (n)^ 倍数 - 需要 TALISMAN 模组",
    applicableTriggers: SCORING_TRIGGERS,
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
    id: "add_hyper_chips",
    label: "应用超级筹码",
    description: "应用 (n)^ 筹码 - 需要 TALISMAN 模组",
    applicableTriggers: SCORING_TRIGGERS,
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
    id: "edit_dollars",
    label: "编辑金钱",
    description: "修改玩家的金钱",
    applicableTriggers: GENERIC_TRIGGERS,
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
        label: "金额",
        default: 1,
        min: 1,
      },
    ],
    category: "经济",
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
          ],
          default: "random",
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
    },{
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
        ],
        default: "random",
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
        options: [],
      },
      {
        id: "change_type",
        type: "select",
        label: "更改类型",
        options: [
          { value: "random", label: "随机扑克牌型" },
          { value: "specific", label: "特定扑克牌型" },
          { value: "most_played", label: "最常使用牌型" },
          { value: "least_played", label: "最少使用牌型" },
        ],
        default: "random",
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
  },{
    id: "destroy_card",
    label: "摧毁卡牌",
    description: "摧毁此卡牌",
    applicableTriggers: GENERIC_TRIGGERS,
    params: [
      {
        id: "setGlassTrigger",
        type: "select",
        label: "是否触发玻璃小丑牌等效果？",
        options: [
          { value: "true", label: "是" },
          { value: "false", label: "否" },
        ],
        default: "false",
      },
    ],
    category: "特殊",
  },
  {
    id: "retrigger_card",
    label: "重复触发卡牌",
    description: "额外触发此卡牌的效果",
    applicableTriggers: SCORING_TRIGGERS,
    params: [
      {
        id: "value",
        type: "number",
        label: "重复触发次数",
        default: 1,
        min: 1,
      },
    ],
    category: "计分",
  },
  {
      id: "create_tag",
      label: "创建标签",
      description: "创建特定或随机标签",
      applicableTriggers: SCORING_TRIGGERS,
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
    id: "create_joker",
    label: "创建小丑牌",
    description: "创建随机或特定的小丑牌。要创建自己模组中的小丑牌，格式为 [modprefix]_[joker_name]。你可以在模组元数据页面找到你的模组前缀。",
    applicableTriggers: GENERIC_TRIGGERS,
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
        options: [{ value: "none", label: "无版本" }, ...EDITIONS()],
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
    description: "摧毁现有小丑牌",
    applicableTriggers: GENERIC_TRIGGERS,
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
        ],
        default: "first",
        showWhen: {
          parameter: "selection_method",
          values: ["position"],
        },
      },
    ],
    category: "小丑牌",
  },
  {
    id: "copy_joker",
    label: "复制小丑牌",
    description: "复制现有小丑牌",
    applicableTriggers: GENERIC_TRIGGERS,
    params: [
      {
        id: "selection_method",
        type: "select",
        label: "选择方式",
        options: [
          { value: "random", label: "随机小丑牌" },
          { value: "specific", label: "特定小丑牌" },
          { value: "position", label: "按位置" },
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
        ],
        default: "first",
        showWhen: {
          parameter: "selection_method",
          values: ["position"],
        },
      },
      {
        id: "edition",
        type: "select",
        label: "复制版本",
        options: [
          { value: "none", label: "无版本" },
          { value: "e_foil", label: "箔片版" },
          { value: "e_holo", label: "全像版" },
          { value: "e_polychrome", label: "多彩版" },
          { value: "e_negative", label: "负片版" },
        ],
        default: "none",
      },
    ],
    category: "小丑牌",
  },
  {
    id: "level_up_hand",
    label: "升级牌型",
    description: "提高扑克牌型的等级",
    applicableTriggers: GENERIC_TRIGGERS,
    params: [
      {
        id: "hand_selection",
        type: "select",
        label: "牌型选择",
        options: [
          { value: "current", label: "当前牌型 (已计分)" },
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
    category: "特殊",
  },
  {
    id: "create_consumable",
    label: "创建消耗品",
    description: "创建消耗品卡牌并添加到你的消耗品区域",
    applicableTriggers: GENERIC_TRIGGERS,
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
    id: "copy_consumable",
    label: "复制消耗品",
    description: "从你的收藏中复制现有消耗品卡牌",
    applicableTriggers: GENERIC_TRIGGERS,
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
    id: "destroy_consumable",
    label: "摧毁消耗品",
    description: "从你的收藏中摧毁消耗品卡牌",
    applicableTriggers: GENERIC_TRIGGERS,
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
    id: "create_last_played_planet",
    label: "创建最后使用星球牌",
    description: "创建与最后使用手牌对应的星球牌 (蓝蜡封印效果)",
    applicableTriggers: GENERIC_TRIGGERS,
    params: [
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
    id: "edit_playing_card",
    label: "编辑扑克牌",
    description: "修改此扑克牌的属性",
    applicableTriggers: GENERIC_TRIGGERS,
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
          ...ENHANCEMENTS(),
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
          ...SEALS(),
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
          ...EDITIONS(),
        ],
        default: "none",
      },
    ],
    category: "特殊",
  },
  {
    id: "show_message",
    label: "显示消息",
    description: "显示指定颜色的自定义消息",
    applicableTriggers: GENERIC_TRIGGERS,
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
    id: "balance",
    label: "平衡筹码和倍数",
    description: "平衡筹码和倍数数值 (等离子牌组效果)",
    applicableTriggers: SCORING_TRIGGERS,
    params: [],
    category: "特殊",
  },
  {
    id: "swap_chips_mult",
    label: "交换筹码和倍数",
    description: "交换筹码和倍数的数值",
    applicableTriggers: SCORING_TRIGGERS,
    params: [],
    category: "特殊",
  },
  {
    id: "draw_cards",
    label: "抽牌到手牌",
    description: "从你的牌组中抽牌到手牌",
    applicableTriggers: [
      "card_scored",
      "card_discarded",
      "card_held",
      "card_held_in_hand_end_of_round",
    ],
    params: [
      {
        id: "value",
        type: "number",
        label: "数量",
        default: 1,
        min: 1,
      },
    ],
    category: "特殊",
  },
  {
    id: "emit_flag",
    label: "发送标志位",
    description: "发送自定义标志位。标志位是可以设置为真或假的全局变量，可以被任何其他小丑牌检查。",
    applicableTriggers: [
      "card_scored",
      "card_discarded",
      "card_held",
      "card_held_in_hand_end_of_round",
    ],
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
    applicableTriggers: [...GENERIC_TRIGGERS],
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
    applicableTriggers: [...GENERIC_TRIGGERS],
    params: [],
    category: "特殊",
  },
];

export function getCardEffectsForTrigger(
  triggerId: string
): EffectTypeDefinition[] {
  return CARD_EFFECT_TYPES.filter((effect) =>
    effect.applicableTriggers?.includes(triggerId)
  );
}

export function getCardEffectTypeById(
  id: string
): EffectTypeDefinition | undefined {
  return CARD_EFFECT_TYPES.find((effect) => effect.id === id);
}
