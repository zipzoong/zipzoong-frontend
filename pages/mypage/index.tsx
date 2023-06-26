import React from 'react';
import MyPageLayout from '@/layouts/MyPageLayout';
import { GetServerSideProps } from 'next';
import { users } from '@zipzoong/sdk/lib/functional';
import connection from '@/lib/connection';
import { ICustomer } from '@zipzoong/sdk/lib/structures/user/customer';
import { useRecoilValue } from 'recoil';
import service from '@/constants/service.constants';

interface MyPageSSRPropsType {
  data: ICustomer.IPrivate;
}

const MyPage = (data: ICustomer.IPrivate) => {
  const [more, setMore] = React.useState<users.hs_providers.me.get.Output | users.re_agents.me.get.Output>({
    example_images: [
      {
        is_visible: true,
        id: 'string',
        url: 'string',
        created_at: '2023-06-26T06:46:56.459Z',
        updated_at: '2023-06-26T06:46:56.459Z'
      }
    ],
    phone: 'string',
    profile_image_url: 'string',
    introduction: {
      title: 'string',
      content: 'string'
    },
    expertise: {
      super_category_id: 'string',
      super_category_name: 'string',
      sub_expertises: [
        {
          sub_category_id: 'string',
          sub_category_name: 'string'
        }
      ]
    },
    address: {
      first: 'string',
      second: 'string'
    },
    business_registration_num: 'string',
    type: 'home service provider',
    mode: 'private',
    id: 'string',
    name: 'string',
    email: 'user@example.com',
    created_at: '2023-06-26T06:46:56.459Z',
    updated_at: '2023-06-26T06:46:56.459Z',
    is_verified: true,
    business_certification_images: [
      {
        id: 'string',
        url: 'string',
        created_at: '2023-06-26T06:46:56.459Z',
        updated_at: '2023-06-26T06:46:56.459Z'
      }
    ],
    acceptant_agreements: [
      {
        id: 'string',
        title: 'string',
        content: 'string',
        target_type: 'customer',
        is_required: true
      }
    ]
  });
  React.useLayoutEffect(() => {
    (async () => {
      if (data.type === service.HS_PROVIDER) setMore(await users.hs_providers.me.get(connection));
      if (data.type === service.RE_AGENTS) setMore(await users.re_agents.me.get(connection));
    })();
  }, []);

  return <MyPageLayout data={data} major={more} />;
};

const executeAPI = async () => {
  try {
    return await users.customers.me.get(connection);
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getServerSideProps: GetServerSideProps<MyPageSSRPropsType> = async () => {
  const res = await executeAPI();
  if (!res) return { notFound: true };

  return {
    props: {
      data: res
    }
  };
};

export default MyPage;
