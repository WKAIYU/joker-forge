import React from "react";
import {
  ArrowPathIcon,
  SparklesIcon,
  BoltIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import Button from "./Button";
import InputField from "./InputField";
import { ValidationResult } from "./validationUtils";
import { getAllVariables } from "../codeGeneration/Jokers/variableUtils";
import {
  JokerData,
  ConsumableData,
  EnhancementData,
  SealData,
  EditionData,
  VoucherData
} from "../data/BalatroUtils";

interface InfoDescriptionBoxProps {
  value: string;
  onChange: (value: string, shouldAutoFormat?: boolean) => void;
  onKeyDown: (
    e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  item: JokerData | ConsumableData | EnhancementData | SealData | EditionData | VoucherData;
  itemType: "joker" | "consumable" | "enhancement" | "seal" | "edition" | "voucher";
  textAreaId: string;
  autoFormatEnabled: boolean;
  onAutoFormatToggle: () => void;
  validationResult?: ValidationResult;
  placeholder?: string;
  onInsertTag: (tag: string, autoClose?: boolean) => void;
}

const InfoDescriptionBox: React.FC<InfoDescriptionBoxProps> = ({
  value,
  onChange,
  onKeyDown,
  item,
  textAreaId,
  autoFormatEnabled,
  onAutoFormatToggle,
  validationResult,
  placeholder = "描述你的项目的效果使用Balatro格式...",
  onInsertTag,
}) => {
  const colorButtons = [
    { tag: "{C:red}", color: "bg-balatro-red", name: "红色" },
    { tag: "{C:blue}", color: "bg-balatro-blue", name: "蓝色" },
    { tag: "{C:green}", color: "bg-balatro-green", name: "绿色" },
    { tag: "{C:purple}", color: "bg-balatro-purple", name: "紫色" },
    { tag: "{C:attention}", color: "bg-balatro-orange", name: "橙色" },
    { tag: "{C:money}", color: "bg-balatro-money", name: "钱" },
    { tag: "{C:gold}", color: "bg-balatro-gold-new", name: "金色" },
    { tag: "{C:white}", color: "bg-balatro-white", name: "白色" },
    { tag: "{C:inactive}", color: "bg-balatro-grey", name: "未激活" },
    { tag: "{C:default}", color: "bg-balatro-default", name: "默认" },
    { tag: "{C:hearts}", color: "bg-balatro-hearts", name: "红心" },
    { tag: "{C:clubs}", color: "bg-balatro-clubs", name: "梅花" },
    { tag: "{C:diamonds}", color: "bg-balatro-diamonds", name: "方块" },
    { tag: "{C:spades}", color: "bg-balatro-spades", name: "黑桃" },
    { tag: "{C:tarot}", color: "bg-balatro-purple", name: "塔罗牌" },
    { tag: "{C:planet}", color: "bg-balatro-planet", name: "星球牌" },
    { tag: "{C:spectral}", color: "bg-balatro-spectral", name: "幻灵牌" },
    { tag: "{C:enhanced}", color: "bg-balatro-enhanced-new", name: "增强牌" },
    { tag: "{C:common}", color: "bg-balatro-common", name: "普通" },
    { tag: "{C:uncommon}", color: "bg-balatro-uncommon", name: "罕见" },
    { tag: "{C:rare}", color: "bg-balatro-rare", name: "稀有" },
    { tag: "{C:legendary}", color: "bg-balatro-legendary", name: "传奇" },
    {
      tag: "{C:edition}",
      color: "bg-gradient-to-r from-purple-400 to-pink-400",
      name: "版本",
    },
    {
      tag: "{C:dark_edition}",
      color: "bg-gray-900 border-2 border-purple-400",
      name: "负片",
    },
  ];

  const backgroundButtons = [
    { tag: "{X:red,C:white}", color: "bg-balatro-red", name: "红色背景" },
    { tag: "{X:blue,C:white}", color: "bg-balatro-blue", name: "蓝色背景" },
    { tag: "{X:mult,C:white}", color: "bg-balatro-mult", name: "倍率背景" },
    { tag: "{X:chips,C:white}", color: "bg-balatro-chips", name: "筹码背景" },
    { tag: "{X:money,C:white}", color: "bg-balatro-money", name: "金钱背景" },
    {
      tag: "{X:attention,C:white}",
      color: "bg-balatro-orange",
      name: "警示背景",
    },
    {
      tag: "{X:tarot,C:white}",
      color: "bg-balatro-purple",
      name: "塔罗牌背景",
    },
    {
      tag: "{X:planet,C:white}",
      color: "bg-balatro-planet",
      name: "星球牌背景",
    },
    {
      tag: "{X:spectral,C:white}",
      color: "bg-balatro-spectral",
      name: "幻灵牌背景",
    },
    {
      tag: "{X:enhanced,C:white}",
      color: "bg-balatro-enhanced-new",
      name: "增强牌背景",
    },
    {
      tag: "{X:legendary,C:white}",
      color: "bg-balatro-legendary",
      name: "传奇小丑背景",
    },
    {
      tag: "{X:edition,C:white}",
      color: "bg-gradient-to-r from-purple-400 to-pink-400",
      name: "版本背景",
    },
  ];

  const variables = getAllVariables(item);

  const insertVariable = (variableIndex: number) => {
    const placeholder = `#${variableIndex}#`;
    onInsertTag(placeholder, false);
  };

  const getValidationMessage = () => {
    if (!validationResult) return null;

    if (!validationResult.isValid && validationResult.error) {
      return {
        type: "error" as const,
        message: validationResult.error,
        icon: ExclamationTriangleIcon,
      };
    }

    if (validationResult.isValid && validationResult.warning) {
      return {
        type: "warning" as const,
        message: validationResult.warning,
        icon: InformationCircleIcon,
      };
    }

    return null;
  };

  return (
    <div className="p-6 space-y-6">
      <DocumentTextIcon className="absolute top-12 right-16 h-28 w-28 text-black-lighter/20 -rotate-6 pointer-events-none" />

      <div className="bg-black-darker border border-black-lighter rounded-xl p-6">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-white-light font-medium text-sm flex items-center gap-2">
            <DocumentTextIcon className="h-4 w-4 text-mint" />
            格式工具
          </h4>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white-darker">按Ctrl+Z撤销</span>
            <Button
              size="sm"
              variant={autoFormatEnabled ? "primary" : "secondary"}
              onClick={onAutoFormatToggle}
              icon={<SparklesIcon className="h-3 w-3" />}
            >
              自动格式化  
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-white-light text-sm mb-3 font-medium">
              文本颜色
            </p>
            <div className="flex flex-wrap gap-3">
              {colorButtons.map((item, index) => (
                <button
                  key={index}
                  onClick={() => onInsertTag(item.tag)}
                  title={item.name}
                  className={`w-8 h-8 ${item.color} rounded border border-black-lighter hover:scale-110 transition-transform z-10`}
                />
              ))}
            </div>
          </div>

          <div>
            <p className="text-white-light text-sm mb-3 font-medium">
              文本背景
            </p>
            <div className="flex flex-wrap gap-3">
              {backgroundButtons.map((item, index) => (
                <button
                  key={index}
                  onClick={() => onInsertTag(item.tag)}
                  title={item.name}
                  className={`w-8 h-8 ${item.color} rounded border-2 border-white-light hover:scale-110 transition-transform`}
                />
              ))}
            </div>
          </div>

          {variables.length > 0 && (
            <div>
              <p className="text-white-light text-sm mb-3 font-medium">
                变量
              </p>
              <div className="flex flex-wrap gap-2">
                {variables.map((variable, index) => (
                  <button
                    key={variable.id}
                    onClick={() => insertVariable(index + 1)}
                    className="px-3 py-1 bg-mint/20 border border-mint/40 rounded-md text-mint text-xs font-medium hover:bg-mint/30 transition-colors"
                    title={
                      variable.description || `Insert ${variable.name} variable`
                    }
                  >
                    {variable.name} (#{index + 1}#)
                  </button>
                ))}
              </div>
            </div>
          )}

          <div>
            <p className="text-white-light text-sm mb-3 font-medium">
              特殊效果
            </p>
            <div className="flex gap-3 flex-wrap">
              <Button
                size="sm"
                variant="secondary"
                onClick={() => onInsertTag("[s]", false)}
                icon={<ArrowPathIcon className="h-3 w-3" />}
              >
                换行
              </Button>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => onInsertTag("{s:1.1}")}
                icon={<SparklesIcon className="h-3 w-3" />}
              >
                缩放
              </Button>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => onInsertTag("{E:1}")}
                icon={<BoltIcon className="h-3 w-3" />}
              >
                浮动
              </Button>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => onInsertTag("{}")}
              >
                重置
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full -mt-2">
        <InputField
          id={textAreaId}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={onKeyDown}
          multiline={true}
          height="140px"
          separator={true}
          label="描述文本"
          placeholder={placeholder}
        />
        {(() => {
          const validationMsg = getValidationMessage();
          return validationMsg ? (
            <div
              className={`flex items-center gap-2 mt-1 text-sm ${
                validationMsg.type === "error"
                  ? "text-balatro-orange"
                  : "text-yellow-500"
              }`}
            >
              <validationMsg.icon className="h-4 w-4" />
              <span>{validationMsg.message}</span>
            </div>
          ) : null;
        })()}
      </div>
    </div>
  );
};

export default InfoDescriptionBox;
