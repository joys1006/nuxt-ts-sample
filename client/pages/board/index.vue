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
      :data-source="boards.list"
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
import BoardListRequest from '@/types/mock/BoardListRequest';

@Component({
  name: 'Board'
})
export default class Board extends Vue {
  @Action(HomeType.GET_BOARDS)
  private getboards!: HomeActionInterface[HomeType.GET_BOARDS];

  @Getter(HomeType.GET_BOARDS)
  private readonly boards!: HomeGetterInterface[HomeType.GET_BOARDS];

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
      key: 'author',
      title: '작성자',
      width: '100px',
      align: 'center',
      dataIndex: 'author',
      scopedSlots: {customRender: 'author'}
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
    const payload: BoardListRequest = new BoardListRequest();

    payload.current = this.tableOption.pagination.current;
    payload.size = this.tableOption.pagination.pageSize;

    this.tableOption.loading = true;

    this.getboards(payload)
      .then((response) => {
        this.tableOption.pagination.total = response.data.total;
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
