/**
 *  Do not remove this unless you get business authorization.
 *  CategorySub
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {Bean} from "@utils/DvaUtil";

/** categorySubId */
export const CategorySub_ID: string = 'categorySubId';

export const CategorySubFields = {
  categorySubId: CategorySub_ID,
}

export default interface CategorySub extends Bean {

  /** categoryId */
  categoryId?: string;

  /** categoryId s */
  categoryIds?: string[];

  /** categorySubId */
  categorySubId?: string;

  /** categorySubId s */
  categorySubIds?: string[];

  /** comments */
  comments?: string;

  /** commentsLike */
  commentsLike?: string;

  /** 创建时间 */
  createTime?: Date;

  /** 创建时间Max */
  createTimeMax?: Date;

  /** 创建时间Min */
  createTimeMin?: Date;

  /** 是否删除(0:正常，1删除) */
  deleteFlag?: number;

  /** subName */
  subName?: string;

  /** subNameLike */
  subNameLike?: string;

  /** 更新时间 */
  updateTime?: Date;

  /** 更新时间Max */
  updateTimeMax?: Date;

  /** 更新时间Min */
  updateTimeMin?: Date;

}

