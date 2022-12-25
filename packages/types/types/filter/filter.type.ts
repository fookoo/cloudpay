export enum ConditionEnum {
  Equal,
  NotEqual,
  LessThan,
  LassEqualThan,
  MoreThan,
  MoreEqualThan,
  Between,
  Include
}
export interface IFilter {
  field: string
  condition: ConditionEnum
  value: string | number
}
