import type { NextPage } from 'next';
import { observer } from 'mobx-react';
import cn from 'classnames';
import { Layout } from 'components/Layout';
import { Typography } from 'antd';

const { Title } = Typography;

const Testing: NextPage = () => {
  return <Layout>a</Layout>;
};

export default observer(Testing);
