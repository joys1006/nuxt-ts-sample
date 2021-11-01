import { Dictionary } from '@/types/common';
import { ColumnFilterItem } from 'ant-design-vue/types/table/column';

type itemRender = (page: number, type: string, originalElement: Element) => Function;
type showTotal = (total: number, range: number) => Function;

export interface TablePagination {
  current: number;
  defaultCurrent?: number;
  defaultPageSize?: number;
  disabled?: boolean;
  hideOnSingle?: boolean;
  itemRender?: itemRender;
  pageSize: number;
  pageSizeOptions?: Array<string>;
  showLessItems?: boolean;
  showQuickJumper?: boolean;
  showSizeChanger?: boolean;
  showTitle?: boolean;
  showTotal?: showTotal;
  simple?: boolean;
  size?: number;
  total: number;
}

// 리스트 컬럼
export interface TableListColumn {
  key?: number | string | undefined;
  className?: string | undefined;
  title?: string | undefined;
  dataIndex: string;
  align?: string | undefined;
  width?: number | string | undefined;
  customRender?: Function | undefined;
  customCell?: Function | undefined;
  fixed?: string | undefined;
  slots?: Dictionary<string | number | boolean | undefined>;
  scopedSlots?: Dictionary<string | number | boolean | undefined>;
  mouseleave?: Function;
  mouseenter?: Function;
  sorter?: boolean;
  sorting?: Function;
  class?: string;
  click?: Function | undefined;
  filteredValue?: string[] | any[];
  onFilter?: Function;
  filters?: ColumnFilterItem[];
  filtered?: boolean;
  defaultFilteredValue?: string[] | any[];
  sortDirections?: Array<string>;
  defaultSortOrder?: string;
  children?: Array<TableListColumn>;
}

export interface TableListFieldSet {
  key?: number;
  children?: string | number | undefined;
  row?: string | number | boolean | undefined;
  isActive?: boolean | undefined;
  point?: number | undefined;
}

export interface TableListOptions {
  fixed?: boolean | undefined;
  scroll?: Dictionary<string | number | undefined>;
  loading?: boolean | undefined;
  pageNum?: number | string | (string | null)[] | undefined;
  pageSize?: number | undefined;
  current?: number | undefined;
  total?: number | undefined;
  pagination: TablePagination;
  searchText?: string | (string | null)[] | undefined;
  emptyText?: any;
  setCommentSpan?: number | undefined;
  expandedRowKeys?: any;
  faqCategoryList?: Array<Dictionary<string | number | undefined>>;
  isActive?: boolean | number | string | null;
  cateId?: string | (string | null)[] | number | undefined;
}
