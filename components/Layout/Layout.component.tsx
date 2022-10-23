import { Layout as AntLayout } from 'antd';
import Head from 'next/head';
import { FC } from 'react';
import styles from './Layout.module.css';
import { LayoutProps } from './Layout.types';

const { Header, Content, Footer } = AntLayout;

export const Layout: FC<LayoutProps> = ({ children, options }) => (
  <AntLayout>
    <Head>
      <title>Quiz</title>
      <meta name='description' content='Happy quiz!' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    {/* <Header className={styles.header}></Header> */}
    <Content className={styles.content}>{children}</Content>
    {/* <Footer className={styles.footer}></Footer> */}
  </AntLayout>
);
