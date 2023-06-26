import estateOption from '@/data/estateOption';
import lifeServiceOption from '@/data/lifeServiceOption';
import { useRouter } from 'next/router';
import React from 'react';
import { GetServerSideProps } from 'next';
import { users } from '@zipzoong/sdk/lib/functional';
import connection from '@/lib/connection';
import ViewLayout from '@/layouts/ViewLayout';
import service from '@/constants/service.constants';

interface ViewPropsType {
  data: users.hs_providers.getList.Output | users.re_agents.getList.Output;
  type: string;
}

const View = ({ data, type }: ViewPropsType) => {
  const router = useRouter();
  const [option, setOption] = React.useState(estateOption);

  React.useEffect(() => {
    const { type } = router.query;
    if (type === service.HS_PROVIDER) return setOption(estateOption);
    if (type === service.RE_AGENTS) return setOption(lifeServiceOption);
  }, [router]);

  return <ViewLayout option={option} data={data.data} type={type} />;
};

const executeAPI = async (type: string) => {
  try {
    if (type === service.HS_PROVIDER) {
      return await users.hs_providers.getList(connection, {
        super_category_id: '',
        sub_category_id: ''
      });
    }
    if (type === service.RE_AGENTS) {
      return await users.re_agents.getList(connection, {
        super_category_id: '',
        sub_category_id: ''
      });
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getServerSideProps: GetServerSideProps = async context => {
  const { type } = context?.query;
  const res = await executeAPI(type as string);
  if (!res) return { notFound: true };

  return {
    props: {
      data: res,
      type
    }
  };
};

export default View;
