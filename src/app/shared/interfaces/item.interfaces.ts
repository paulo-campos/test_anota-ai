export type IType = '1'| '2' | '3';

export interface IItem {
  id: number;
  title: string;
  description: string;
  img: string;
  type: IType;
}
