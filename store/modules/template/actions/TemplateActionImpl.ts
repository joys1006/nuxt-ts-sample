import { Commit } from 'vuex';
import { Modify } from '@/types/common';
import HomeActionInterface from '@/store/modules/home/actions/HomeActionInterface';
import HomeType from '@/store/modules/home/types/HomeType';
import GetTablesRequest from '@/types/mock/GetTablesRequest';
import MockResponse from '@/types/mock/TableResponse';
import TemplateActionInterface from '@/store/modules/template/actions/TemplateActionInterface';

type TemplateActionImpl = Modify<TemplateActionInterface, {}>;

export default TemplateActionImpl;
