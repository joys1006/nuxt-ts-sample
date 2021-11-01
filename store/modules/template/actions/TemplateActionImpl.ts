import { Commit } from 'vuex';
import { Modify } from '@/types/common';
import HomeActionInterface from '@/store/modules/home/actions/HomeActionInterface';
import HomeType from '@/store/modules/home/types/HomeType';
import MockListRequest from '@/types/mock/MockListRequest';
import MockResponse from '@/types/mock/MockResponse';
import TemplateActionInterface from '@/store/modules/template/actions/TemplateActionInterface';

type TemplateActionImpl = Modify<TemplateActionInterface, {}>;

export default TemplateActionImpl;
