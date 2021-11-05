<template>
  <div id="Board">
    <div class="button-wrapper right mb15">
      <a-button type="primary" class="btn-40-m1z">
        <nuxt-link to="/board/write">글쓰기</nuxt-link>
      </a-button>
    </div>
    <a-table
      :loading="tableOption.loading"
      :options="tableOption"
      :row-key="(record) => record.no"
      :columns="tableColumns"
      :data-source="tables"
      :locale="{ emptyText: tableOption.emptyText }"
      :pagination="tableOption.pagination"
      @change="paginationChangedEventHandler"
    >
    </a-table>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Action, Getter} from 'vuex-class';
import {Pagination} from 'ant-design-vue';
import HomeType from '../../store/modules/home/types/HomeType';
import HomeActionInterface from '../../store/modules/home/actions/HomeActionInterface';
import HomeGetterInterface from '../../store/modules/home/getters/HomeGetterInterface';
import {TableListColumn, TableListOptions} from '@/types/ui/table';
import GetTablesRequest from '@/types/mock/GetTablesRequest';

@Component({
  name: 'Board'
})
export default class Board extends Vue {
  @Action(HomeType.GET_TABLES)
  private getTables!: HomeActionInterface[HomeType.GET_TABLES];

  @Getter(HomeType.GET_TABLES)
  private readonly tables!: HomeGetterInterface[HomeType.GET_TABLES];

  protected tableColumns: TableListColumn[] = [
    {
      key: 'no',
      title: '번호',
      width: '100px',
      align: 'center',
      dataIndex: 'no',
      scopedSlots: {customRender: 'no'}
    },
    {
      key: 'title',
      title: '제목',
      width: '100px',
      align: 'center',
      dataIndex: 'title',
      scopedSlots: {customRender: 'title'}
    },
    {
      key: 'writer',
      title: '작성자',
      width: '100px',
      align: 'center',
      dataIndex: 'writer',
      scopedSlots: {customRender: 'writer'}
    },
    {
      key: 'createdAt',
      title: '등록일',
      width: '100px',
      align: 'center',
      dataIndex: 'createdAt',
      scopedSlots: {customRender: 'createdAt'}
    }
  ];

  protected tableOption: TableListOptions = {
    loading: false,
    pagination: {
      current: 1,
      pageSize: 10,
      total: 10
    },
    searchText: '',
    emptyText: '데이터가 없습니다.'
  };

  created(): void {
    this.init();
  }

  private init(): void {
    this.getInitData();
  }

  private getInitData(): void {
    const payload: GetTablesRequest = new GetTablesRequest();

    payload.current = this.tableOption.pagination.current;
    payload.size = this.tableOption.pagination.pageSize;

    this.tableOption.loading = true;

    this.getTables(payload)
      .then((response) => {
        this.tableOption.pagination.total = response.data.length;
      })
      .catch((error: Error) => this.$message.error(error.message))
      .finally(() => {
        this.tableOption.loading = false;
      });
  }

  protected paginationChangedEventHandler(value: Pagination): void {
    this.tableOption.pagination.current = Number(value.current);
    this.getInitData();
  }

}

</script>
