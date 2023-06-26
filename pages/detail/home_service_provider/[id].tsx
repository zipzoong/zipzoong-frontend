import HomeServiceLayout from '@/layouts/HomeServiceLayout';
import connection from '@/lib/connection';
import { users } from '@zipzoong/sdk/lib/functional';
import { GetServerSideProps } from 'next';
import React from 'react';

interface DetailSSRPropsType {
  data: users.hs_providers.getOne.Output;
}

const HomeServiceProvider = (data: DetailSSRPropsType) => {
  return <HomeServiceLayout {...data} />;
};

const executeAPI = async (id: string) => {
  try {
    return await users.hs_providers.getOne(connection, id);
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getServerSideProps: GetServerSideProps = async context => {
  const { id } = context?.query;
  const res = await executeAPI(id as string);
  if (!res) return { notFound: true };

  return {
    props: {
      data: res
    }
  };
};

export default HomeServiceProvider;
